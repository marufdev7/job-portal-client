import React from 'react';

const ApplyJob = () => {



    const handleSubmit = () => {

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

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <p>
                            <span>Name *</span>
                            <input type="text" placeholder="Full Name" required className="input input-bordered w-full mt-1" />
                        </p>
                        <p>
                            <span>Email *</span>
                            <input type="email" placeholder="Email" required className="input input-bordered w-full" />
                        </p>
                        <p>
                            <span>Number *</span>
                            <input type="text" placeholder="Contact Number" required className="input input-bordered w-full" />
                        </p>
                        <p>
                            <span>Description *</span>
                            <textarea placeholder="Description" className="textarea textarea-bordered w-full" />
                        </p>
                        <input type="file" required className="file-input file-input-bordered w-full" />

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