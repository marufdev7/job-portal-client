import React from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const AddJob = () => {
    const navigate = useNavigate();

    const handleAddJob = (e) => {
        e.preventDefault();
        const form = e.target;

        const formData = new FormData(form);
        const initialData = Object.fromEntries(formData.entries());
        const { salaryMin, salaryMax, currency, ...newJob } = initialData;
        newJob.salaryRange = {
            min: Number(salaryMin),
            max: Number(salaryMax),
            currency
        };

        console.log(newJob);

        // const jobData = {
        //     title: form.title.value,
        //     company: form.company.value,
        //     location: form.location.value,
        //     jobType: form.jobType.value,
        //     category: form.jobCategory.value,
        //     salaryRange: {
        //         min: Number(form.salaryMin.value),
        //         max: Number(form.salaryMax.value),
        //     },
        //     // salary_min: form.salaryMin.value,
        //     // salary_max: form.salaryMax.value,
        //     applicationDeadline: form.deadline.value,
        //     hr_name: form.hr_name.value,
        //     hr_email: form.hr_email.value,
        //     company_logo: form.logo.value,
        // };

        // console.log(jobData);

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
        <div className="min-h-screen flex justify-center items-center bg-slate-200 p-8">
            <div className="bg-slate-50 p-8 rounded-lg shadow-lg w-full max-w-2xl">
                <div className="text-center mb-6">
                    <div className="badge bg-slate-200 font-semibold text-blue-500 badge-outline">Add Job</div>
                    <h2 className="text-4xl font-bold text-gray-700 py-3">Post a New Job</h2>
                    <p className="text-sm text-gray-500">Fill out the form to add a new job listing.</p>
                </div>

                <form onSubmit={handleAddJob} className="space-y-4">
                    {/* job title */}
                    <div>
                        <label className="label-text"> Job title</label>
                        <input type="text" name="title" placeholder="Title" required className="input input-bordered w-full" />
                    </div>

                    {/* job-company */}
                    <div>
                        <label className="label-text">Company</label>
                        <input type="text" name="company" placeholder="Company Name" required className="input input-bordered w-full" />
                    </div>

                    {/* job-location */}
                    <div>
                        <label className="label-text">Job Location</label>
                        <input type="text" name="location" placeholder="Location" required className="input input-bordered w-full" />
                    </div>

                    {/* job-type */}
                    <select name="jobType" required className="select select-bordered w-full" defaultValue="">
                        <option value="" disabled>Select Job Type</option>
                        <option>Full-time</option>
                        <option>Part-time</option>
                        <option>Internship</option>
                        <option>Remote</option>
                    </select>

                    {/* job-category */}
                    <select name="jobCategory" required className="select select-bordered w-full" defaultValue="">
                        <option value="" disabled>Select Job Category</option>
                        <option>Teaching</option>
                        <option>Engineering</option>
                        <option>Design</option>
                        <option>Management</option>
                        <option>Marketing</option>
                        <option>Data Science</option>
                        <option>Development</option>
                        <option>Finance</option>
                    </select>

                    {/* job-salary */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 items-end">
                        <div>
                            <label>Salary</label>
                            <input type="number" name="salaryMin" placeholder="Salary Min" required className="input input-bordered w-full" />
                        </div>
                        <input type="number" name="salaryMax" placeholder="Salary Max" required className="input input-bordered w-full" />
                        <select name="currency" required className="select select-bordered w-full" defaultValue="">
                            <option value="" disabled>Select currency</option>
                            <option>bdt</option>
                            <option>usd</option>
                            <option>inr</option>
                        </select>
                    </div>

                    {/* job-deadline */}
                    <div>
                        <label className='label-text'>Deadline</label>
                        <input type="date" name="deadline" required className="input input-bordered w-full" />
                    </div>

                    {/* job-description */}
                    <div>
                        <label className='label-text'>Description</label>
                        <textarea placeholder="Description" name='description' required className="textarea textarea-bordered w-full" />
                    </div>

                    {/* job-requirement */}
                    <div>
                        <label className="label-text">Job Requirements</label>
                        <textarea name="requirement" required placeholder='Each requirement in a new Line' className="textarea textarea-bordered w-full"></textarea>
                    </div>

                    {/* job-responsibility */}
                    <div>
                        <label className="label-text">Responsibilities</label>
                        <textarea
                            name="responsibility"
                            required
                            placeholder="Each responsibility in a new line"
                            className="textarea textarea-bordered w-full"
                        ></textarea>
                    </div>

                    {/* job-hr */}
                    <div>
                        <label className="label-text">HR Name</label>
                        <input type="text" name="hr_name" placeholder="Name" required className="input input-bordered w-full" />
                    </div>
                    <div>
                        <label className="label-text">HR Email</label>
                        <input type="email" name="hr_email" placeholder="Email" required className="input input-bordered w-full" />
                    </div>

                    {/* company-logo */}
                    <div>
                        <label className="label-text">Company Logo</label>
                        <input type="url" name="logo" placeholder="Logo URL" required className="input input-bordered w-full" />
                    </div>
                    <button type="submit" className="btn bg-blue-500 text-white hover:bg-blue-600 hover:shadow-md w-full">Post Job</button>
                </form>
            </div>
        </div>
    );
};

export default AddJob;