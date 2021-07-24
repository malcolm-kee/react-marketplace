import * as React from "react";
import { ListingItem } from "../components/listing-item";
import { Button } from "../components/button";

const getListings = () =>
  fetch("https://ecomm-service.herokuapp.com/marketplace").then((res) =>
    res.json()
  );

export const Marketplace = () => {
  const [clicked, setClicked] = React.useState(false);
  const [listings, setListings] = React.useState(undefined);

  return (
    <div className="max-w-6xl mx-auto px-3 py-12 space-y-6">
      <div className="mb-8">
        <div>
          <h1 className="text-6xl mb-4 font-extrabold">Marketplace</h1>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-x-4 gap-y-8 xl:grid-cols-3 xl:gap-x-6">
        {listings &&
          listings.map((listing) => (
            <ListingItem
              imageUrl={listing.imageUrl}
              title={listing.title}
              description={listing.description}
              price={listing.price}
              availableStock={listing.numOfStock}
              onlyOne={listing.availability === "single-item"}
              key={listing._id}
            />
          ))}
      </div>
      {!listings && (
        <div className="text-center">
          <Button
            onClick={() => {
              setClicked(true);
              getListings().then((result) => setListings(result));
            }}
          >
            {clicked ? "Loading..." : "Load Listing"}
          </Button>
        </div>
      )}
    </div>
  );
};
