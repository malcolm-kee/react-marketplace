import * as React from "react";
import { ListingItem } from "../components/listing-item";

const getListings = (page, signal) =>
  fetch(`https://ecomm-service.herokuapp.com/marketplace?page=${page}`, {
    signal,
  }).then((res) => res.json());

const createListing = (data) =>
  fetch("https://ecomm-service.herokuapp.com/marketplace", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

const usePersistedState = (storageKey, defaultValue) => {
  const [value, setValue] = React.useState(
    () => sessionStorage.getItem(storageKey) || defaultValue
  );

  React.useEffect(() => {
    sessionStorage.setItem(storageKey, value);
  }, [value, storageKey]);

  return [value, setValue];
};

export const Marketplace = () => {
  const [listings, setListings] = React.useState(undefined);

  const [page, setPage] = React.useState(1);

  const loadListings = (pageNum, signal) =>
    getListings(pageNum, signal)
      .then((data) => setListings(data))
      .catch((err) => {
        if (err.name !== "AbortError") {
          throw err;
        }
      });
  React.useEffect(() => {
    const ab = new AbortController();
    loadListings(page, ab.signal);
    return () => {
      ab.abort();
    };
  }, [page]);

  const [title, setTitle] = usePersistedState("title", "");

  const [price, setPrice] = usePersistedState("price", "");
  const [description, setDescription] = usePersistedState("description", "");
  const [condition, setCondition] = usePersistedState("condition", "new");
  const [availability, setAvailability] = usePersistedState(
    "availability",
    "in-stock"
  );
  const [numOfStock, setNumOfStock] = usePersistedState("numOfStock", "");

  const titleInputRef = React.useRef();

  return (
    <div>
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          createListing({
            title,
            price: Number(price),
            description,
            condition,
            availability,
            numOfStock: Number(numOfStock),
          }).then(() => {
            loadListings();
            setTitle("");
            setPrice("");
            setDescription("");
            setCondition("new");
            setAvailability("in-stock");
            setNumOfStock("");

            if (titleInputRef.current) {
              titleInputRef.current.focus();
            }
          });
        }}
      >
        <div className="p-3">New Listing</div>
        <div className="space-y-5 p-3">
          <div>
            <label htmlFor="title" className="block text-sm font-medium">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(ev) => setTitle(ev.target.value)}
              required
              ref={titleInputRef}
            />
          </div>
          <div>
            <label htmlFor="price" className="block text-sm font-medium">
              Price
            </label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(ev) => setPrice(ev.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(ev) => setDescription(ev.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="condition" className="block text-sm font-medium">
              Condition
            </label>
            <select
              id="condition"
              value={condition}
              onChange={(ev) => setCondition(ev.target.value)}
              required
            >
              <option value="new">New</option>
              <option value="used_like-new">Used (like new)</option>
              <option value="used_good">Used (good)</option>
              <option value="used_fair">Used (fair)</option>
            </select>
          </div>
          <div>
            <label htmlFor="availability" className="block text-sm font-medium">
              Availability
            </label>
            <select
              id="availability"
              value={availability}
              onChange={(ev) => setAvailability(ev.target.value)}
              required
            >
              <option value="in-stock">In Stock</option>
              <option value="single-item">Single Item</option>
            </select>
          </div>
          <div>
            <label htmlFor="numOfStock" className="block text-sm font-medium">
              Number of Available Stock
            </label>
            <input
              type="number"
              id="numOfStock"
              value={numOfStock}
              onChange={(ev) => setNumOfStock(ev.target.value)}
              required
            />
          </div>
          <div>
            <button>ADD</button>
          </div>
        </div>
      </form>
      <div className="max-w-7xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between">
          <button
            type="button"
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            Prev
          </button>
          <button type="button" onClick={() => setPage(page + 1)}>
            Next
          </button>
        </div>
        <div className="grid md:grid-cols-2 gap-x-4 gap-y-8 xl:grid-cols-3 xl:gap-x-6">
          {listings &&
            listings.map((item) => (
              <ListingItem
                imageUrl={item.imageUrl}
                title={item.title}
                description={item.description}
                price={item.price}
                availableStock={item.numOfStock}
                onlyOne={item.availability === "single-item"}
                key={item._id}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
