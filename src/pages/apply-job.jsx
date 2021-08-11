import { useJobs, CareerItem } from "domains/career";
import { LoginForm } from "domains/auth";
import * as React from "react";

const createJobApplication = (jobId, token) =>
  fetch("https://ecomm-service.herokuapp.com/job-application", {
    method: "POST",
    body: JSON.stringify({
      linkedinUrl: "https://www.linkedin.com/in/leehsienloong/",
      jobId,
    }),
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error(res.statusText);
  });

export const ApplyJob = () => {
  const { page, setPage, jobs } = useJobs();
  const [token, setToken] = React.useState("");
  const [authStatus, setAuthStatus] = React.useState("anonymous");

  return (
    <div>
      {authStatus === "anonymous" && (
        <LoginForm
          onSuccess={(accessToken) => {
            setToken(accessToken);
            setAuthStatus("authenticated");
          }}
        />
      )}
      <div className="flex justify-between max-w-xl mx-auto">
        <button
          type="button"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          Prev
        </button>
        <button type="button" onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>
      <div className="max-w-xl mx-auto p-6 space-y-5">
        {jobs &&
          jobs.map((job) => (
            <CareerItem
              title={job.title}
              department={job.department}
              level={job.level}
              onApply={
                authStatus === "authenticated"
                  ? () => createJobApplication(job._id, token)
                  : undefined
              }
              key={job._id}
            />
          ))}
      </div>
    </div>
  );
};
