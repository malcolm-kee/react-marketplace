import { useJobs, CareerItem } from "domains/career";

export const ApplyJob = () => {
  const { page, setPage, jobs } = useJobs();

  return (
    <div>
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
              onApply={() => alert("Apply btn clicked, apply the job!")}
              key={job._id}
            />
          ))}
      </div>
    </div>
  );
};
