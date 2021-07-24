import * as React from "react";
import { ListingItem } from "../components/listing-item";
import { listings } from "../data";

export const Marketplace = () => {
  return (
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
  );
};
