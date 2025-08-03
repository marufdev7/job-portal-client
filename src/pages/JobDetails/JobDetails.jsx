import { BriefcaseBusiness, CircleDollarSign, ClockAlert, Factory, MapPin, SquareUserIcon } from 'lucide-react';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {

    const { description, location, title, applicationDeadline, salaryRange, company, requirements, responsibilities, jobType, category, company_logo, hr_name, hr_email } = useLoaderData();

    const jobInfo = [
        { icon: <BriefcaseBusiness color="#5C7CFA" className="w-5 h-5" />, label: "Job Category", text: category },
        { icon: <Factory color="#5C7CFA" className="w-5 h-5" />, label: "Company", text: company },
        { icon: <CircleDollarSign color="#5C7CFA" className="w-5 h-5" />, label: "Salary", text: `${salaryRange.min}-${salaryRange.max} ${salaryRange.currency}` },
        { icon: <ClockAlert color="#5C7CFA" className="w-5 h-5" />, label: "Deadline", text: applicationDeadline },
        { icon: <SquareUserIcon color="#5C7CFA" className="w-5 h-5" />, label: "Job type", text: jobType },
        { icon: <MapPin color="#5C7CFA" className="w-5 h-5" />, label: "Location", text: location },
    ];

    return (
        <div>
            {/* <h1>Apply for {title} to become success in your life.</h1> */}
            <div className='flex justify-between mt-4'>
                <h1 className='text-center font-semibold text-2xl text-gray-700'>Job details for {title}.</h1>
                <button className="btn bg-blue-500 text-slate-50 hover:text-slate-100 hover:bg-gradient-to-r from-blue-500 to-purple-500">Apply Now</button>
            </div>
            <div className='md:flex gap-3'>
                <div className='w-2/3 border rounded-md mt-5 mb-5 p-5 text-gray-600'>
                    <h2 className='text-xl font-semibold'>Employment Information</h2>
                    <div className="divider"></div>
                    <div className="grid grid-cols-2 gap-4">
                        {jobInfo.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                                {item.icon}
                                <p><span className="font-medium">{item.label}:</span> {item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-1/3 border mt-5 rounded-md p-4">
                    <div className="rounded w-[65px] h-[65px] bg-blue-100 ">
                        <img src={company_logo} alt={company} className='w-16 h-16' />
                    </div>
                    <div className='mt-3'>
                        <h2 className="text-xl font-semibold">{company}</h2>
                        <p className="text-xs text-gray-400 flex items-center gap-1">
                            <MapPin className="w-5 h-5 text-gray-500" />
                            {location}
                        </p>
                    </div>

                    <div className='text-gray-600 mt-4'>
                        <h3 className='font-semibold'>Contact to HR</h3>
                        <p>Name: {hr_name}</p>
                        <p>Email: {hr_email}</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default JobDetails;