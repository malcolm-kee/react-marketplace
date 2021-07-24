import { jobs } from "../data";
import { CareerItem } from "../components/career-item";
import { Button } from "../components/button";
import * as React from "react";

export const Careers = () => {
  const [clicked, setClicked] = React.useState(false);

  return (
    <div className="max-w-6xl mx-auto px-3 py-12 space-y-6">
      <div className="mb-8">
        <div>
          <h1 className="text-6xl mb-4 font-extrabold">Careers</h1>
        </div>
      </div>
      <div className="space-y-3">
        {jobs.map((job) => (
          <CareerItem
            title={job.title}
            department={job.department}
            level={job.level}
            studentFriendly={job.level === "internship"}
            key={job._id}
          />
        ))}
      </div>
      <div className="text-center">
        <Button
          onClick={() => {
            setClicked(true);
          }}
        >
          {clicked ? "Loading..." : "Load"}
        </Button>
      </div>
    </div>
  );
};
