import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localstorage";
import bg1 from "../../assets/images/bg1.png";
import bg2 from "../../assets/images/bg2.png";
import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {
  const jobs = useLoaderData();

  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  const handleJobsFilter = (filter) => {
    if (filter === "all") {
      setDisplayJobs(appliedJobs);
    } else if (filter === "remote") {
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJobs(remoteJobs);
    } else if (filter === "onsite") {
      const onsiteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onsiteJobs);
    }
  };

  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (jobs.length > 0) {
      const jobsApplied = [];
      for (const id of storedJobIds) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobsApplied.push(job);
        }
      }
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
    }
  }, [jobs]);
  return (
    <>
      <div className="w-full bg-cover bg-center bg-purple-50">
        <div className="flex h-full w-full bg-purple-50 sm:flex-col">
          <div>
            <img src={bg2} alt="" className="w-48 ms-4 float-right" />
          </div>

          <div className="text-center flex justify-center items-center lg:p-10">
            <h1 className="text-dark lg:text-3xl sm:text-lg font-bold md:text-2xl dark:text-black">
              Applied Jobs
            </h1>
          </div>

          <div>
            <img src={bg1} alt="" className="w-48 me-4 overflow-hidden" />
          </div>
        </div>
      </div>

      <h2 className="text-xl font-semibold my-5">
        Number of applied job: {appliedJobs.length}
      </h2>
      <details className="dropdown">
        <summary className="m-1 btn">Filter By 👇</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li onClick={() => handleJobsFilter("all")}>
            <a>All</a>
          </li>
          <li onClick={() => handleJobsFilter("remote")}>
            <a>Remote</a>
          </li>
          <li onClick={() => handleJobsFilter("onsite")}>
            <a>Onsite</a>
          </li>
        </ul>
      </details>
      <div className="grid grid-cols-1 mx-2">
        {displayJobs.map((job) => (
          <AppliedJob key={job.id} job={job}></AppliedJob>
        ))}
      </div>
    </>
  );
};

export default AppliedJobs;
