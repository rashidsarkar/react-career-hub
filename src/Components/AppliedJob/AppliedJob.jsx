import { useLoaderData } from "react-router-dom";
import UnderNav from "../UnderNav/UnderNav";
import { useEffect, useState } from "react";
import { getItem } from "../../../public/utily";
import DisplayApply from "./DisplayApply";

function AppliedJob() {
  const [appliedJobs, setAppliedJobs] = useState([]); // Renamed 'applyedJob' to 'appliedJobs'
  const [displayJob, setDisplayJob] = useState([]);
  const jobs = useLoaderData();

  useEffect(() => {
    const oldDataID = getItem();

    if (jobs.length > 0) {
      const jobApply = [];
      for (const id of oldDataID) {
        const job = jobs.find((job) => job.id == id);
        if (job) {
          jobApply.push(job);
        }
      }
      setAppliedJobs(jobApply);
      setDisplayJob(jobApply); // Updated the state variable
    }
  }, [jobs]);

  console.log(appliedJobs);

  const handleDisply = (filter) => {
    if (filter === "All") {
      setDisplayJob(appliedJobs);
    } else if (filter === "Remote") {
      const remoteJob = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJob(remoteJob);
    } else if (filter === "Onsite") {
      const onsiteJob = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJob(onsiteJob);
    }
  };

  return (
    <div className="grid grid-cols-1 gap-3 my-14">
      <UnderNav title={"Applied Jobs"}></UnderNav>
      <div className="flex justify-end">
        <select
          className="select select-bordered w-full max-w-xs"
          onChange={(e) => handleDisply(e.target.value)}
        >
          <option disabled selected>
            Filter By
          </option>
          <option value="All">All</option>
          <option value="Remote">Remote</option>
          <option value="Onsite">Onsite</option>
        </select>
      </div>

      {displayJob.map((item, idx) => (
        <DisplayApply key={idx} applyJob={item}></DisplayApply>
      ))}
    </div>
  );
}

export default AppliedJob;
