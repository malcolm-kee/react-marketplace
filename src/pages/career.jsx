import * as React from "react";
import { CareerItem } from "../components/career-item";

const getJobs = () =>
  fetch("https://ecomm-service.herokuapp.com/job?limit=5").then((res) =>
    res.json()
  );

export const Career = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [jobs, setJobs] = React.useState(undefined);

  return (
    <div>
      <div className="max-w-xl mx-auto p-6 space-y-5">
        {jobs &&
          jobs.map((job) => (
            <CareerItem
              title={job.title}
              department={job.department}
              level={job.level}
              onEdit={() => alert("Edit btn clicked, populate the form!")}
              onDelete={() => alert("Delete btn clicked, delete the item!")}
              key={job._id}
            />
          ))}
      </div>
      {!jobs && (
        <div className="text-center">
          <button
            onClick={() => {
              setIsLoading(true);
              getJobs().then((data) => setJobs(data));
            }}
          >
            {isLoading ? "Loading..." : "Load"}
          </button>
        </div>
      )}
    </div>
  );
};
