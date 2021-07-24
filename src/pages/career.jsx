import { CareerItem } from "../components/career-item";
import { Button } from "../components/button";
import * as React from "react";

const getJobs = () =>
  fetch("https://ecomm-service.herokuapp.com/job?limit=5").then((res) =>
    res.json()
  );

export const Careers = () => {
  const [clicked, setClicked] = React.useState(false);
  const [jobs, setJobs] = React.useState(undefined);

  return (
    <div className="max-w-6xl mx-auto px-3 py-12 space-y-6">
      <div className="mb-8">
        <div>
          <h1 className="text-6xl mb-4 font-extrabold">Careers</h1>
        </div>
      </div>
      <div className="space-y-3">
        {jobs &&
          jobs.map((job) => (
            <CareerItem
              title={job.title}
              department={job.department}
              level={job.level}
              studentFriendly={job.level === "internship"}
              key={job._id}
            />
          ))}
      </div>
      {!jobs && (
        <div className="text-center">
          <Button
            onClick={() => {
              setClicked(true);
              getJobs().then((result) => setJobs(result));
            }}
          >
            {clicked ? "Loading..." : "Load"}
          </Button>
        </div>
      )}
    </div>
  );
};
