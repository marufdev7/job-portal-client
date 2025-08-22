import React, { useEffect, useState } from 'react';
import HotJobsCard from './HotJobsCard';


const HotJobs = () => {

    const [jobs, setJobs] = useState([]);
    // console.log(jobs.length);

    useEffect(() => {
        fetch('https://job-portal-server-ten-pi.vercel.app/jobs')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <>
            <div className='text-center'>
                <h1 className='text-4xl text-slate-700 font-bold py-3'>Hot jobs of the day</h1>
                <h4 className='text-slate-600 text-xl'>Search and connect with the right candidates faster.</h4>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
                {
                    jobs.map(job => <HotJobsCard
                        key={job._id}
                        job={job}
                    />
                    )
                }
            </div>
        </>
    );
};

export default HotJobs;