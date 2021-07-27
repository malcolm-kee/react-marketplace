import * as React from "react";
import { ListingItem } from "../components/listing-item";

const getListings = () =>
  fetch("https://ecomm-service.herokuapp.com/marketplace").then((res) =>
    res.json()
  );

export const Marketplace = () => {
  const [listings, setListings] = React.useState(undefined);
  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <div className="max-w-7xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:px-8">
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
      {!listings && (
        <div>
          <button
            onClick={() => {
              setIsLoading(true);
              getListings().then((data) => setListings(data));
            }}
            type="button"
          >
            {isLoading ? "Loading..." : "Load Listing"}
          </button>
        </div>
      )}
    </div>
  );
};
