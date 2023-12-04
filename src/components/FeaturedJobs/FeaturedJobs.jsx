import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    // this is not the best way to load show all data 
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, [])


    return (
        <>
            <div className="text-center mt-10">
                <h2 className="text-5xl text-center font-semibold">Featured Jobs</h2>
                <p className="text-center my-5">Explore thousands of job opportunities with all the information you need. Its your future</p>
                <strong>Available Jobs: {jobs.length}</strong>
            </div>
            <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-6 mx-2">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={dataLength === jobs.length ? 'hidden' : ''}>
                <button
                    onClick={() => setDataLength(jobs.length)}
                    className="btn btn-primary mb-10">Show All Jobs</button>
            </div>
        </>
    );
};

export default FeaturedJobs;