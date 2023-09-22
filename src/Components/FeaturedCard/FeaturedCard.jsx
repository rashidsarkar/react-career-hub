import { HiOutlineLocationMarker } from "react-icons/Hi";
import { AiOutlineDollar } from "react-icons/Ai";
import { Link } from "react-router-dom";
function FeaturedCard({ featuredData }) {
  const {
    logo,
    job_title,
    location,
    company_name,
    remote_or_onsite,
    job_type,
    salary,
  } = featuredData;
  console.log(job_title);
  return (
    <div className="w-[648px]">
      <div>
        <img src={logo} alt="" />
      </div>
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
      <Link className="font-semibold text-white btn bg-gradient-to-r from-blue-500 to-purple-700">
        View Details
      </Link>
    </div>
  );
}

export default FeaturedCard;
