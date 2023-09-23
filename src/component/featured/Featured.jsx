import { useEffect } from "react";
import { useState } from "react";
import Job from "../job/Job";


const Featured = () => {
    const [jobs,setJobs]=useState([]);
    const[datalength,setdatalength]=useState([4])
    useEffect(()=>{
        fetch('jobs.json')
        .then(res=>res.json())
        .then(data=>setJobs(data))
    },[])
    return (
        <div >
            <div className="text-center">
            <h1 className="text-3xl uppercase">Featured Jobs :{jobs.length}</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            
            </div>
            <div className="grid grid-cols-2 gap-2">
                {
                    jobs.slice(0,datalength). map(job=><Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={datalength===jobs.length && 'hidden'}>
                <button onClick={()=>setdatalength(6)} className="btn btn-primary">Show all</button>
            </div>
        </div>
    );
};

export default Featured;