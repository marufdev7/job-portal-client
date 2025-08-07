import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const ViewApplications = () => {
    const applications = useLoaderData();
    // console.log(applications);

    const handleStatusUpdate = (e, id) => {
        // console.log(e.target.value, id);
        const data = {
            status: e.target.value,
        }

        fetch(`http://localhost:3000/job-applications/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Updated!',
                        text: `Status changed to "${e.target.value}".`,
                        timer: 1500,
                        showConfirmButton: false
                    });
                }
            })
    }

    return (
        <div className="p-4 md:p-8 bg-slate-100 min-h-screen">
            <h2 className="text-2xl font-bold mb-4 text-gray-700 text-center">View Applicant jobs</h2>

            <div className="overflow-x-auto">
                <table className="table w-full bg-white shadow-md rounded-md">
                    <thead className="bg-slate-200 text-slate-600">
                        <tr>
                            <th>No.</th>
                            <th>Applicant Name</th>
                            <th>Email</th>
                            <th>Number</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {applications.length > 0 ? (
                            applications.map((app, index) => (
                                <tr key={app._id}>
                                    <td>{index + 1}</td>
                                    <td>{app.applicant_name}</td>
                                    <td>{app.applicant_email}</td>
                                    <td>{app.applicant_number}</td>
                                    <td>
                                        <select
                                            className="select select-bordered select-xs w-full max-w-xs"
                                            onChange={(e) => handleStatusUpdate(e, app._id)}
                                            defaultValue={app.status || 'Change Status'}
                                        >
                                            <option disabled >Change Status</option>
                                            <option>Under Review</option>
                                            <option>Set Interview</option>
                                            <option>Hired</option>
                                            <option>Rejected</option>
                                        </select>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-center text-slate-400 py-6">
                                    No applicants found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewApplications;