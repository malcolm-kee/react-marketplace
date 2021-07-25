import * as ReactDOM from "react-dom";
import * as React from "react";
import { CareerItem } from "./components/career-item";

ReactDOM.render(
  <div className="max-w-xl mx-auto p-6">
    <CareerItem />
  </div>,
  document.querySelector("#root")
);
