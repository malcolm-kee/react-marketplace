import * as React from "react";
import { CareerItem } from "../components/career-item";

export const Career = () => {
  return (
    <div className="max-w-xl mx-auto p-6 space-y-5">
      <CareerItem
        title="Memer"
        department="UI / UX Design"
        level="Experienced"
        onEdit={() => alert("Edit btn clicked, populate the form!")}
        onDelete={() => alert("Delete btn clicked, delete the item!")}
      />
      <CareerItem
        title="GitHub Issue Commentor"
        department="Engineering"
        level="Internship"
        onEdit={() => alert("Edit btn clicked, populate the form!")}
        onDelete={() => alert("Delete btn clicked, delete the item!")}
        studentFriendly
      />
    </div>
  );
};
