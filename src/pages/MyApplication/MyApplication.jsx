import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import MyApplicationDetails from './MyApplicationDetails';
import Swal from 'sweetalert2';
import axios from 'axios';

const MyApplication = () => {

    const { user } = useAuth();
    const [jobs, setJobs] = useState([]);

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3B82F6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(result => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/job-applications/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            setJobs(jobs.filter(job => job._id !== id));
                            Swal.fire(
                                'Deleted!',
                                'Your application has been deleted.',
                                'success'
                            );
                        }
                    });
            }
        });
    };

    useEffect(() => {
        // fetch(`http://localhost:3000/job-applications?email=${user.email}`)
        //     .then(res => res.json())
        //     .then(data => setJobs(data))

        //with axios

        axios.get(`http://localhost:3000/job-applications?email=${user.email}`, { withCredentials: true })
            .then(res => setJobs(res.data))

    }, [user.email])

    return (
        <div>
            <h1 className='text-center font-semibold text-2xl text-gray-700 m-5'>My applications</h1>
            <div className='space-y-6 px-4 pt-4 bg-slate-200'>
                {
                    jobs.map(job => <MyApplicationDetails
                        key={job._id}
                        job={job}
                        onDelete={handleDelete}
                    />)
                }
            </div>
        </div>
    );
};

export default MyApplication;