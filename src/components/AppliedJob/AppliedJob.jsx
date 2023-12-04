import React from "react";
import { AiOutlineDollar } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

const AppliedJob = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    location,
    salary,
  } = job;

  return (
    <>
      <div className="card card-compact dark:border dark:bg-gray-800 dark:border-gray-700 bg-base-100 shadow-xl p-5 my-10">
        <div className="flex flex-wrap align-center justify-center content-center">
          <div className="p-10 w-56 h-48 text-center flex content-center">
            <img src={logo} alt="Shoes" />
          </div>
          <div className="card-body">
            <h2 className="card-title">{job_title}</h2>
            <h3 className="text-gray-500 font-semibold text-xl">{company_name}</h3>
            <div>
              <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">
                {remote_or_onsite}
              </button>
              <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">
                {job_type}
              </button>
            </div>
            <div className="mt-4 flex">
              <h2 className="flex mr-4">
                <MdLocationOn className="text-2xl mr-2"></MdLocationOn>{" "}
                {location}
              </h2>
              <h2 className="flex">
                {" "}
                <AiOutlineDollar className="text-2xl"></AiOutlineDollar>{" "}
                {salary}
              </h2>
            </div>
          </div>
          <div className="card-actions flex content-center">
            <div>
            <Link to={`/job/${id}`}>
              <button className="btn btn-primary">View Details</button>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppliedJob;
