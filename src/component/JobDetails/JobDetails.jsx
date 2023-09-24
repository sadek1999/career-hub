import { BiHandicap } from "react-icons/bi";
import { useLoaderData, useParams } from "react-router-dom";
import { saveApplication } from "../utility/Appliedjobs";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';

const JobDetails = () => {
    const jobs=useLoaderData()
    const {id}=useParams()
    const idInt=parseInt(id);
    const job =jobs.find(job=>job.id===idInt)
    const{job_description,job_responsibility,experiences,educational_requirements,phone,email,address,salary,job_title}=job;
    // console.log(job)
    const handalApply =()=>{
        saveApplication(id);
        toast("add the job ")
       
        
    }
  
    return (
        <div>
            <h3 className="text-center uppercase">Job Details </h3>
            <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3">
                    <p> <span className="text-xl font-bold">Job Description :</span> {job_description}</p>
                    <p> <span className="text-xl font-bold">Job Responsibility :</span> {job_responsibility}</p>
                </div>
                <div className="border p-3">
                    <div className=" border-b py-3 mb-2">
                    <h3>Job Details</h3>
                    </div>
                    
                    <p>salary :{salary}</p>
                    <p>job Title :{job_title}</p>
                    <div className=" mt-3 border-b">
                       <h3>Contract information</h3>
                    </div>
                    <button onClick={handalApply} className="btn btn-primary my-2 w-full">Apply now</button>

                </div>
            </div>
            
              <ToastContainer></ToastContainer> 
        </div>
    );
};

export default JobDetails;