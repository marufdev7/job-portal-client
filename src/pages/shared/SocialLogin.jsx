import React, { useContext } from 'react';
import google from '../../assets/job-icon/google.png'
import AuthContext from '../../context/AuthContext/AuthContext';

const SocialLogin = () => {
    const { signInWithGoogle } = useContext(AuthContext);

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className='mt-6 mb-6'>
            <div className="divider">OR</div>
            <div className="flex items-center justify-center">
                <button
                    onClick={handleGoogleLogin}
                    className="flex items-center gap-2 px-6 py-3 rounded-md border border-gray-300 shadow-sm hover:shadow-md hover:bg-gray-100 transition"
                >
                    <img src={google} alt="Google" className="w-5 h-5" />
                    <span className="text-sm font-medium text-gray-700">Continue with Google</span>
                </button>
            </div>

        </div>
    );
};

export default SocialLogin;