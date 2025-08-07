import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyPostedJobs = () => {

    const [postedJobs, setPostedJobs] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch(`http://localhost:3000/jobs?email=${user.email}`)
            .then(res => res.json())
            .then(data => setPostedJobs(data))
    }, [user.email])

    const handleDelete = (id) => {
        console.log(id);
    }

    return (
        <div className="min-h-screen bg-slate-100 p-4">
            <h2 className="text-3xl font-bold text-center mb-6 text-slate-700">
                My Posted Jobs
            </h2>

            <div className="overflow-x-auto bg-white p-4 rounded-xl shadow-lg">
                <table className="table table-zebra w-full">
                    <thead className="bg-slate-200 itemc text-slate-800">
                        <tr>
                            <th>Logo</th>
                            <th>Title</th>
                            <th>Company</th>
                            <th>Location</th>
                            <th>Type</th>
                            <th>Salary</th>
                            <th>Deadline</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {postedJobs.map(job => (
                            <tr key={job._id}>
                                <td>
                                    <div className="avatar">
                                        <div className="w-12 rounded">
                                            <img src={job.company_logo} alt="Logo" />
                                        </div>
                                    </div>
                                </td>
                                <td>{job.title}</td>
                                <td>{job.company}</td>
                                <td>{job.location}</td>
                                <td>{job.jobType}</td>
                                <td>
                                    {job.salaryRange?.currency} {job.salaryRange?.min} - {job.salaryRange?.max}
                                </td>
                                <td>{job.applicationDeadline}</td>
                                <td>
                                    <div  className="flex items-center gap-2">
                                        <button
                                            onClick={() => handleDelete(job._id)}
                                            className="btn btn-xs bg-red-500 text-white hover:bg-red-600"
                                        >
                                            Delete
                                        </button>
                                        <button
                                            className="btn btn-xs bg-blue-500 text-white hover:bg-blue-600"
                                        >
                                            Update
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {postedJobs.length === 0 && (
                            <tr>
                                <td colSpan="8" className="text-center text-gray-500 py-4">
                                    No jobs posted yet.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPostedJobs;