import React, { useEffect, useState } from 'react';
import HotJobsCard from './HotJobsCard';


const HotJobs = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/jobs')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div>
            <h1>Hot jobs of the day</h1>
            <h4>Search and connect with the right candidates faster.</h4>
            <div>
                {
                    jobs.map(job => <HotJobsCard
                        key={job._id}
                        job={job}
                    />
                    )
                }
            </div>
        </div>
    );
};

export default HotJobs;