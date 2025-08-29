import React, { useState } from 'react';
import useJobs from '../../hooks/useJobs';
import Skeleton from '../../utils/Skeleton';
import HotJobsCard from '../Home/HotJobs/HotJobsCard';
import { Search } from 'lucide-react';

const AllJob = () => {
    const [sort, setSort] = useState(false);
    const [search, setSearch] = useState("");
    const { jobs, loading } = useJobs(sort, search);

    if (loading) {
        return <Skeleton />
    }
    return (
        <div className='bg-slate-200'>
            <h1 className='text-center text-4xl font-bold text-gray-700 py-4'>All Jobs</h1>
            <div className='w-11/12 mx-auto py-5 p-3 flex items-center justify-between'>
                <button
                    onClick={() => setSort(!sort)}
                    className={`btn btn-neutral ${sort && "btn-info"}`}
                >
                    {sort ? "Sorted by Salary" : " Sort by Salary"}
                </button>
                <div className='flex items-center gap-2'>
                    <Search color="#4f4f4f" />
                    <input
                        type="text"
                        className='input w-full max-w-2xl'
                        placeholder='Search Jobs by Location'
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
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
        </div>
    );
};

export default AllJob;