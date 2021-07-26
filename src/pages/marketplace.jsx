import * as React from "react";
import { ListingItem } from "../components/listing-item";

export const Marketplace = () => {
  return (
    <div className="max-w-7xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-x-4 gap-y-8 xl:grid-cols-3 xl:gap-x-6">
        <ListingItem
          imageUrl="https://images.unsplash.com/photo-1594995846645-d58328c3ffa4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=543&h=384&q=80"
          title="Classic Quartz Clock"
          description="Inexpensive. Best as birthday gift for your enemy."
          price="10"
          availableStock="143"
        />
        <ListingItem
          imageUrl="https://images.unsplash.com/photo-1571689936114-b16146c9570a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=543&h=384&q=80"
          title="Handsome Handcarry Bag"
          description="Elegant. Versatile. Influencer-friendly."
          price="50"
          onlyOne
        />
      </div>
    </div>
  );
};
