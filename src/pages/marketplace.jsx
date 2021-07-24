import * as React from "react";
import { ListingItem } from "../components/listing-item";
import { listings } from "../data";

export const Marketplace = () => {
  return (
    <div className="max-w-6xl mx-auto px-3 py-12 space-y-6">
      <div className="mb-8">
        <div>
          <h1 className="text-6xl mb-4 font-extrabold">Marketplace</h1>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-x-4 gap-y-8 xl:grid-cols-3 xl:gap-x-6">
        {listings.map((listing) => (
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
    </div>
  );
};
