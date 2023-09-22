import { HiOutlineLocationMarker } from "react-icons/Hi";
import { AiOutlineDollar } from "react-icons/Ai";
import { Link } from "react-router-dom";
function DisplayApply({ applyJob }) {
  const {
    logo,
    company_name,
    job_title,
    remote_or_onsite,
    job_type,
    location,
    salary,
    id,
  } = applyJob;
  return (
    <div className="flex justify-between">
      {/* <div className="my-3 flex  justify-start items-center"> */}
      <div className="flex">
        <div className="w-40  flex-shrink-0 flex justify-center items-center h-full rounded-xl mr-4 bg-[#F4F4F4]">
          <img src={logo} alt="" />
        </div>
        <div>
          {/* name  */}
          <div>
            <h2 className="text-[#474747] text-xl font-bold">{job_title}</h2>
            <p>{company_name}</p>
          </div>
          {/* remote  */}
          <div className="flex gap-3">
            <button className="btn btn-outline btn-primary">
              {remote_or_onsite}
            </button>
            <button className="btn btn-outline btn-primary">{job_type}</button>
          </div>
          <div className="flex gap-4 my-4">
            {/* loaction  */}
            <div className="flex items-center justify-center">
              <HiOutlineLocationMarker className="text-2xl"></HiOutlineLocationMarker>
              <p>{location}</p>
            </div>
            <div className="flex items-center justify-center">
              <AiOutlineDollar className="text-2xl"></AiOutlineDollar>
              <p>{salary}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <Link
          to={`/job-details/${id}`}
          className="font-semibold text-white btn bg-gradient-to-r from-blue-500 to-purple-700"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default DisplayApply;
