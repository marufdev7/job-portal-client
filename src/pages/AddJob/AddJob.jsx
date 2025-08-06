import React from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const AddJob = () => {
    const navigate = useNavigate();

    const handleAddJob = (e) => {
        e.preventDefault();
        const form = e.target;

        const jobData = {
            title: form.title.value,
            company: form.company.value,
            location: form.location.value,
            jobType: form.type.value,
            category: form.category.value,
            salaryRange: {
                min: Number(form.salaryMin.value),
                max: Number(form.salaryMax.value),
            },
            // salary_min: form.salaryMin.value,
            // salary_max: form.salaryMax.value,
            applicationDeadline: form.deadline.value,
            hr_name: form.hr_name.value,
            hr_email: form.hr_email.value,
            company_logo: form.logo.value,
        };

        console.log(jobData);

        // fetch('http://localhost:3000/jobs', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(jobData)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data.insertedId) {
        //             Swal.fire({
        //                 icon: 'success',
        //                 title: 'Success!',
        //                 text: 'Job posted successfully!'
        //             });
        //             form.reset();
        //             navigate('/');
        //         }
        //     });
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-slate-100 p-8">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
                <div className="text-center mb-6">
                    <div className="badge bg-slate-200 font-semibold text-blue-500 badge-outline">Add Job</div>
                    <h2 className="text-4xl font-bold text-gray-700 py-3">Post a New Job</h2>
                    <p className="text-sm text-gray-500">Fill out the form to add a new job listing.</p>
                </div>

                <form onSubmit={handleAddJob} className="space-y-4">
                    <input type="text" name="title" placeholder="Job Title" required className="input input-bordered w-full" />
                    <input type="text" name="company" placeholder="Company Name" required className="input input-bordered w-full" />
                    <input type="text" name="location" placeholder="Job Location" required className="input input-bordered w-full" />
                    <select name="type" required className="select select-bordered w-full" defaultValue="">
                        <option value="" disabled>Select Job Type</option>
                        <option>Full-time</option>
                        <option>Part-time</option>
                        <option>Internship</option>
                        <option>Remote</option>
                    </select>
                    <input type="text" name="category" placeholder="Category" required className="input input-bordered w-full" />
                    <div className="flex gap-4">
                        <input type="number" name="salaryMin" placeholder="Salary Min" required className="input input-bordered w-full" />
                        <input type="number" name="salaryMax" placeholder="Salary Max" required className="input input-bordered w-full" />
                    </div>
                    <p>
                        <span>Deadline</span>
                        <input type="date" name="deadline" required className="input input-bordered w-full" />
                    </p>
                    <input type="text" name="hr_name" placeholder="HR Name" required className="input input-bordered w-full" />
                    <input type="email" name="hr_email" placeholder="HR Email" required className="input input-bordered w-full" />
                    <input type="url" name="logo" placeholder="Company Logo URL" required className="input input-bordered w-full" />
                    <button type="submit" className="btn bg-blue-500 text-white hover:bg-blue-600 hover:shadow-md w-full">Post Job</button>
                </form>
            </div>
        </div>
    );
};

export default AddJob;