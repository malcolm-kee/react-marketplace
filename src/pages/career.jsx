import { CareerItem } from "../components/career-item";
import { Button } from "../components/button";
import * as React from "react";
import { Card, CardBody, CardFooter, CardHeading } from "../components/card";
import { Field } from "../components/field";
import { NumberControl } from "../components/number-control";

const getJobs = () =>
  fetch("https://ecomm-service.herokuapp.com/job?limit=5").then((res) =>
    res.json()
  );

export const Careers = () => {
  const [clicked, setClicked] = React.useState(false);
  const [jobs, setJobs] = React.useState(undefined);
  const loadJobs = () => getJobs().then((result) => setJobs(result));

  return (
    <div className="max-w-6xl mx-auto px-3 py-12 space-y-6">
      <div className="mb-8">
        <div>
          <h1 className="text-6xl mb-4 font-extrabold">Careers</h1>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <CareerForm onSuccess={() => loadJobs()} />
        <div>
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
                  loadJobs();
                }}
              >
                {clicked ? "Loading..." : "Load"}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const addJob = (job) =>
  fetch("https://ecomm-service.herokuapp.com/job", {
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(job),
    method: "POST",
  }).then((res) => res.json());

const CareerForm = ({ onSuccess }) => {
  const [jobTitle, setJobTitle] = React.useState("");
  const [level, setLevel] = React.useState("internship");
  const [department, setDepartment] = React.useState("");
  const [summary, setSummary] = React.useState("");
  const [headcount, setHeadcount] = React.useState(1);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const titleInputRef = React.useRef();

  return (
    <form
      onSubmit={(ev) => {
        ev.preventDefault();
        setIsSubmitting(true);
        addJob({
          title: jobTitle,
          level,
          department,
          summary,
          headcount,
          descriptions: [],
          requirements: [],
        }).then(() => {
          setIsSubmitting(false);
          onSuccess();
          setJobTitle("");
          setLevel("internship");
          setDepartment("");
          setSummary("");
          setHeadcount(1);

          if (titleInputRef.current) {
            titleInputRef.current.focus();
          }
        });
      }}
    >
      <Card>
        <CardHeading>Add Job Posting</CardHeading>
        <CardBody className="space-y-5">
          <Field label="Job Title">
            <input
              value={jobTitle}
              type="text"
              onChange={(ev) => setJobTitle(ev.target.value)}
              required
              ref={titleInputRef}
            />
          </Field>
          <Field label="Level">
            <select
              value={level}
              onChange={(ev) => setLevel(ev.target.value)}
              required
            >
              <option value="internship">Internship</option>
              <option value="entry">Entry</option>
              <option value="experienced">Experienced</option>
              <option value="manager">Manager</option>
            </select>
          </Field>
          <Field label="Department">
            <input
              type="text"
              value={department}
              onChange={(ev) => setDepartment(ev.target.value)}
              required
            />
          </Field>
          <Field label="Summary">
            <textarea
              value={summary}
              onChange={(ev) => setSummary(ev.target.value)}
              required
            />
          </Field>
          <Field label="Headcount">
            <NumberControl value={headcount} onChange={setHeadcount} />
          </Field>
        </CardBody>
        <CardFooter className="text-right">
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "ADDING..." : "ADD"}
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
};
