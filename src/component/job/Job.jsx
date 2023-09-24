
import {  MdLocationOn } from "react-icons/md";
import {  BiDollar } from "react-icons/bi";
import { Link } from "react-router-dom";
const Job = ({job}) => {
    const {logo,job_title,company_name,remote_or_onsite,job_type,salary,location,id}=job;
    return (
        <div>
            <div className="card card-compact  bg-base-100 shadow-xl">
  <figure><img src={logo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{job_title}</h2>
    <p>{company_name}</p>
    <div>
        <button className="px-2 py-1 border border-cyan-500 rounded text-blue-500 mr-4">{remote_or_onsite}</button>
        <button className="px-2 py-1 border border-cyan-500 rounded text-blue-500 ">{job_type}</button>
    </div>
    <div className="flex gap-2">
        <h2 className="flex text-xl gap-1"><MdLocationOn className="text-2xl"></MdLocationOn> {location}
        </h2>
        <h3  className="flex gap-1 text-xl"><BiDollar className="text-2xl"></BiDollar>{salary}</h3>
    </div>
    <div className="card-actions ">
      <Link to={`/jobs/${id}`}>
      <button className="btn btn-primary ">Buy Now</button>
      </Link>
     
    </div>
  </div>
</div>
        </div>
    );
};

export default Job;