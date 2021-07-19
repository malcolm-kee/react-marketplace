import * as React from "react";
import * as ReactDOM from "react-dom";
import { CareerItem } from "./career-item";
import { jobs } from "./data";
import { Faq } from "./pages/faq";

ReactDOM.render(
  <div className="max-w-4xl mx-auto py-12 space-y-5">
    <Faq />
  </div>,
  document.getElementById("root")
);
