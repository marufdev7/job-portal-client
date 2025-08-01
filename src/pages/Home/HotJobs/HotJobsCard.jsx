import React from 'react';

const HotJobsCard = ({ job }) => {

    const { company, company_logo, title, description, jobType, requirements, salaryRange, location } = job;

    return (
        <div className="card bg-slate-100 hover:bg-slate-50 shadow-md hover:shadow-lg">
            <div className="card-body">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded bg-blue-100 flex items-center justify-center">
                            <img src={company_logo} alt={company} className="w-6 h-6" />
                        </div>
                        <div>
                            <h2 className="font-semibold">{company}</h2>
                            <p className="text-xs text-gray-400 flex items-center gap-1">
                                {location}
                            </p>
                        </div>
                    </div>
                    {/* <div className="text-green-500 text-lg">
                        <i className="fa-solid fa-bolt"></i>
                    </div> */}
                </div>

                <h3 className="hover:text-blue-500 cursor-pointer font-bold">{title}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span>{jobType}</span>
                </div>

                <p className="text-gray-600"> {description} </p>

                <div className="flex gap-2 items-center">
                    {
                        requirements.map(r => <p key={r} className='text-sm p-1 rounded-md text-center bg-slate-200 '>
                            {r}
                        </p>)
                    }
                </div>

                <div className="flex items-center justify-between pt-2">
                    <p className="text-lg text-primary font-semibold">{salaryRange.min}-{ salaryRange.max}
                        <span className="text-sm font-medium text-gray-400">/Mon</span>
                    </p>
                    <button className="btn btn-sm btn-primary">Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default HotJobsCard;