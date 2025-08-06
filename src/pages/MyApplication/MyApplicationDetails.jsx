import { BriefcaseBusiness, MapPin, Mail, Phone, Trash2 } from "lucide-react";

const MyApplicationDetails = ({ job, onDelete }) => {
    const {
        _id,
        title,
        company,
        company_logo,
        location,
        applicant_name,
        applicant_email,
        applicant_number,
        linkedin,
        resume,
    } = job;


    return (
        <div className="p-4 rounded-xl">
            <div className="bg-slate-100 hover:bg-slate-50 p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row items-start md:items-center gap-6">
                {/* Company Logo */}
                <img
                    src={company_logo}
                    alt={company}
                    className="w-20 h-20 object-contain border border-slate-300 rounded-lg"
                />

                {/* Job + Applicant Info */}
                <div className="flex-1 space-y-1">
                    <h2 className="text-xl font-bold text-blue-500">{title}</h2>
                    <p className="text-gray-800 font-semibold flex items-center gap-2">
                        <BriefcaseBusiness size={18} /> {company}
                    </p>
                    <p className="text-gray-600 flex items-center gap-2 text-sm">
                        <MapPin size={16} /> {location}
                    </p>

                    <div className="pt-3 space-y-1">
                        <h3 className="font-semibold text-gray-700">Applicant Info:</h3>
                        <p className="text-sm">
                            <span className="font-medium">Name:</span> {applicant_name}
                        </p>
                        <p className="flex items-center gap-2 text-sm text-gray-600">
                            <Mail size={16} /> {applicant_email}
                        </p>
                        <p className="flex items-center gap-2 text-sm text-gray-600">
                            <Phone size={16} /> {applicant_number}
                        </p>
                        <a
                            href={linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 underline text-sm"
                        >
                            LinkedIn Profile
                        </a>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3 w-full md:w-auto">
                    <a
                        href={resume}
                        download
                        className="block text-center bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md"
                    >
                        View Resume
                    </a>
                    <button
                        onClick={() => onDelete(_id)}
                        className="w-full text-center bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-md flex items-center justify-center gap-2"
                    >
                        <Trash2 size={16} /> Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MyApplicationDetails;