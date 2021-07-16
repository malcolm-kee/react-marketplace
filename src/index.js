import * as React from "react";
import * as ReactDOM from "react-dom";
import { CareerItem } from "./career-item";

ReactDOM.render(
  <div className="max-w-4xl mx-auto py-12">
    <CareerItem
      title="Memer"
      department="UI / UX Design"
      level="Experienced"
      onEdit={() => alert("Edit btn clicked, populate the form!")}
      onDelete={() => alert("Delete btn clicked, delete the item!")}
    />
  </div>,
  document.getElementById("root")
);
