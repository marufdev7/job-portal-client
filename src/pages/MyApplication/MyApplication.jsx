import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import MyApplicationDetails from './MyApplicationDetails';

const MyApplication = () => {

    const { user } = useAuth();
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/job-applications?email=${user.email}`)
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [user.email])

    return (
        <div>
            <h1 className='text-center font-semibold text-2xl text-gray-700 m-5'>My applications</h1>
            <div className='space-y-6 px-4 pt-4 bg-slate-200'>
                {
                    jobs.map(job => <MyApplicationDetails
                        key={job._id}
                        job={job}
                    />)
                }
            </div>
        </div>
    );
};

export default MyApplication;