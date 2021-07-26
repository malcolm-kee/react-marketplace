import * as ReactDOM from "react-dom";
import * as React from "react";
import { CareerItem } from "./components/career-item";
// import { ListingItem } from "./components/listing-item";

ReactDOM.render(
  <div className="max-w-xl mx-auto p-6">
    <CareerItem
      title="Memer"
      department="UI / UX Design"
      level="Experienced"
      onEdit={() => alert("Edit btn clicked, populate the form!")}
      onDelete={() => alert("Delete btn clicked, delete the item!")}
    />
  </div>,
  document.querySelector("#root")
);
