import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

function JobDetails() {
  const jobs = useLoaderData();
  const { id } = useParams();
  console.log(jobs, id);

  const job = jobs.find((item) => item.id == id);
  const { job_title } = job;
  return (
    <div className="relative min-h-screen ">
      <h2 className="text-2xl font-semibold text-center">Job Details</h2>

      <div>
        <img
          className="relative top-6 left-0 w-[300px]"
          src="/public/assets/images/bg1.png"
          alt=""
        />

        <img
          className="relative top-[-277px] left-[994px] w-[300px]"
          src="/public/assets/images/bg2.png"
          alt=""
        />
      </div>
      <div className="grid grid-cols-4">
        <div className="col-span-3 left">
          <div className="job_decpt"></div>
          <div className="job_resp"></div>
          <div className="job_educ"></div>
          <div className="job_exp"></div>
        </div>
        <div className="text-xl p-4 font-semibold right bg-[#f4f2ff] h-[600px] col-span-1">
          <p>Job Details</p>
          <hr className="text-white" />
        </div>
      </div>
    </div>
  );
}

export default JobDetails;
