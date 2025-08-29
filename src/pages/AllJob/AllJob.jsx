import React from 'react';
import useJobs from '../../hooks/useJobs';
import Skeleton from '../../utils/Skeleton';
import HotJobsCard from '../Home/HotJobs/HotJobsCard';

const AllJob = () => {
    const { jobs, loading } = useJobs();
    if (loading) {
        return <Skeleton />
    }
    return (
        <div>
            <h1 className='text-center text-4xl font-bold text-gray-700'>All Jobs</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
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

export default AllJob;