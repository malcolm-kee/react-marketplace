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
      <div>
        <form className="p-3">
          <div className="text-xl mb-3">Add Job Posting</div>
          <div className="space-y-5">
            <div>
              <label className="block text-sm" htmlFor="title">
                Job Title
              </label>
              <input type="text" name="title" id="title" />
            </div>
            <div>
              <label className="block text-sm" htmlFor="level">
                Level
              </label>
              <select name="level" id="level">
                <option value="internship">Internship</option>
                <option value="entry">Entry</option>
                <option value="experienced">Experienced</option>
                <option value="manager">Manager</option>
              </select>
            </div>
            <div>
              <label className="block text-sm" htmlFor="department">
                Department
              </label>
              <input
                type="text"
                name="department"
                id="department"
                placeholder="e.g. Engineering"
              />
            </div>
            <div>
              <label className="block text-sm" htmlFor="summary">
                Summary
              </label>
              <textarea name="summary" id="summary" />
            </div>
            <div>
              <label className="block text-sm" htmlFor="headcount">
                Headcount
              </label>
              <input type="number" name="headcount" id="headcount" />
            </div>
            <div>
              <button>ADD</button>
            </div>
          </div>
        </form>
      </div>
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
