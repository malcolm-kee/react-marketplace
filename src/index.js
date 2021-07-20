import * as React from "react";
import * as ReactDOM from "react-dom";
import { ListingItem } from "./listing-item";

ReactDOM.render(
  <ListingItem
    imageUrl="https://images.unsplash.com/photo-1594995846645-d58328c3ffa4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=543&h=384&q=80"
    title="Classic Quartz Clock"
    description="Inexpensive. Best as birthday gift for your enemy."
    price="10"
    availableStock="143"
  />,
  document.getElementById("root")
);
