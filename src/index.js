import * as React from "react";
import * as ReactDOM from "react-dom";
import { CareerItem } from "./career-item";
import { jobs } from "./data";

ReactDOM.render(
  <div className="max-w-4xl mx-auto py-12 space-y-5">
    {jobs.map((job) => (
      <CareerItem
        title={job.title}
        department={job.department}
        level={job.level}
        onEdit={() => alert("Edit btn clicked, populate the form!")}
        onDelete={() => alert("Delete btn clicked, delete the item!")}
        studentFriendly={job.level === "internship"}
        key={job._id}
      />
    ))}
  </div>,
  document.getElementById("root")
);
