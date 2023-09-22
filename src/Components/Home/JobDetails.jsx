import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { AiOutlineDollar } from "react-icons/Ai";
import { newItemAdd } from "../../../public/utily";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UnderNav from "../UnderNav/UnderNav";

function JobDetails() {
  const jobs = useLoaderData();
  const { id } = useParams();
  // console.log(jobs, id);

  const job = jobs.find((item) => item.id == id);
  const {
    job_title,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,

    contact_information,
  } = job;
  console.log(job_title);
  const handleAddItemLocal = (id) => {
    newItemAdd(id);
    toast.success("Apply Done", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <div className="relative min-h-screen ">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      <UnderNav title={"Job Details"}></UnderNav>
      <div className="grid grid-cols-4">
        <div className="col-span-3 left">
          <div className="job_decpt w-[800px] my-3">
            <p className="text-xl font-semibold">Job Description:</p>
            <p>{job_description}</p>
          </div>
          <div className="job_resp w-[800px] my-3">
            <p className="text-xl font-semibold"> Job Responsibility:</p>
            <p>{job_responsibility}</p>
          </div>
          <div className="my-3 job_educ">
            <p className="text-xl font-semibold">Educational Requirements:</p>
            <p>{educational_requirements}</p>
          </div>
          <div className="my-3 job_exp">
            <p className="text-xl font-semibold">Experiences:</p>
            <p>{experiences}</p>
          </div>
        </div>
        <div className=" bg-[#f4f2ff] rounded-xl  col-span-1">
          <div>
            <p className="p-4 text-xl font-semibold border-b-2 right">
              Job Details
            </p>
            <div className="flex items-center justify-start">
              <AiOutlineDollar className="text-2xl"></AiOutlineDollar>
              <p>Job Title : {job_title}</p>
            </div>
            <div className="flex items-center justify-start">
              <AiOutlineDollar className="text-2xl"></AiOutlineDollar>
              <p>Salary : {salary} </p>
            </div>

            <p className="p-4 text-xl font-semibold border-b-2 right">
              Contact Information :
            </p>
            <div className="flex items-center justify-start">
              <AiOutlineDollar className="text-2xl"></AiOutlineDollar>
              <p>Phone :{contact_information.phone}</p>
            </div>
            <div className="flex items-center justify-start">
              <AiOutlineDollar className="text-2xl"></AiOutlineDollar>
              <p>Email : {contact_information.email}</p>
            </div>
            <div className="flex justify-start ">
              <AiOutlineDollar className="text-3xl"></AiOutlineDollar>
              <p>Address :{contact_information.address}</p>
            </div>
          </div>
          <Link
            onClick={() => handleAddItemLocal(id)}
            className="w-full my-6 font-semibold text-white btn bg-gradient-to-r from-blue-500 to-purple-700"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default JobDetails;
