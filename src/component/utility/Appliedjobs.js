

const getStordApplideJobs=()=>{
    const getAppliedJobs=localStorage.getItem('job-Applycations')
    if(getAppliedJobs){
        return JSON.parse(getAppliedJobs);
    }
    return []
}


const saveApplication =id=>{
    const StordjobApplytions=getStordApplideJobs();
    const exists =StordjobApplytions.find(jobId=>jobId===id)
  if(!exists){
    StordjobApplytions.push(id);
    localStorage.setItem('job-Applycaions',JSON .stringify(StordjobApplytions))

  }
}
export{getStordApplideJobs,saveApplication}