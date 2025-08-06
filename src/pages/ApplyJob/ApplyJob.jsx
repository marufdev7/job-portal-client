import React from 'react';
import Swal from 'sweetalert2';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const ApplyJob = () => {

    const { id } = useParams();
    const { user } = useAuth();
    const navigate = useNavigate();
    // console.log(id, user);

    const handleSubmitApplyJob = (e) => {
        e.preventDefault();
        const form = e.target;

        const candidateData = {
            job_id: id,
            applicant_name: form.name.value,
            applicant_email: form.email.value,
            applicant_number: form.number.value,
            linkedin: form.linkedin.value,
            description: form.description.value,
            resume: form.resume.value
        }
        // console.log(candidateData);

        fetch('http://localhost:3000/job-applications', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(candidateData)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success!',
                        text: 'Application submitted successfully!'
                    });
                    form.reset();
                    navigate('/my-application');
                }
            })
    }

    return (
        <>
            <div className="min-h-screen flex justify-center items-center bg-slate-200 p-8">
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
                    <div className="text-center mb-6">
                        <div className="badge bg-slate-200 font-semibold text-blue-500 badge-outline">Job Application</div>
                        <h2 className="text-4xl font-bold text-gray-700 py-3">Start Your Career Today</h2>
                        <p className="text-sm text-gray-500">Please fill in your information and send it to the employer.</p>
                    </div>

                    <form onSubmit={handleSubmitApplyJob} className="space-y-4">
                        <div>
                            <span>Name *</span>
                            <input type="text" placeholder="Full Name" name='name' required className="input input-bordered w-full mt-1" />
                        </div>
                        <div>
                            <label className='label-text'>Email *</label>
                            <input type="email" placeholder="Email" name='email' defaultValue={user?.email} required className="input input-bordered w-full" />
                        </div>
                        <div>
                            <label className='label-text'>Number *</label>
                            <input type="text" placeholder="Contact Number" name='number' required className="input input-bordered w-full" />
                        </div>
                        <div>
                            <label className='label-text'>LinkedIn *</label>
                            <input type="url" placeholder="LinkedIn Url" name='linkedin' required className="input input-bordered w-full" />
                        </div>
                        <div>
                            <label className='label-text'>Description</label>
                            <textarea placeholder="Description" name='description' className="textarea textarea-bordered w-full" />
                        </div>
                        <div>
                            <label className='label-text'>Upload Resume *</label>
                            <input type="file" required name='resume' className="file-input file-input-bordered w-full" />
                        </div>

                        <div className="flex items-center gap-2">
                            <input type="checkbox" className="checkbox checkbox-sm" />
                            <span className="text-sm">Agree our <a href="#" className="link">terms and policy</a></span>
                        </div>

                        <button className="btn bg-blue-500 text-white hover:bg-blue-600 hover:shadow-md w-full">Apply Job</button>
                    </form>

                    <p className="text-center text-sm mt-4">
                        Do you need support? <a href="#" className="link link-primary">Contact Us</a>
                    </p>
                </div>
            </div>
        </>
    );
};

export default ApplyJob;