import React, { useContext } from 'react';
import Lottie from 'lottie-react';
import loginLottieAnim from '../../assets/lottie/Login.json';
import AuthContext from '../../context/AuthContext/AuthContext';
import SocialLogin from '../shared/SocialLogin';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const SignIn = () => {

    const { singInUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state?.from?.pathname || "/";

    const handleSignIN = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(email, password);

        singInUser(email, password)
            .then(result => {
                // console.log('sign in', result.user);

                form.reset();
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center w-[400px] lg:text-left">
                    <Lottie animationData={loginLottieAnim} />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className=" mt-4 ml-8 text-5xl font-bold">Sign In</h1>
                    <form onSubmit={handleSignIN} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign In</button>
                        </div>
                    </form>
                    <p className='text-center'>
                        New to Job Portal?
                        <Link
                            className='underline font-semibold'
                            to='/register'
                            state={{ from: location.state?.from || { pathname: "/" } }}>
                            Register
                        </Link>
                    </p>
                    <SocialLogin />
                </div>
            </div>
        </div>
    );
};

export default SignIn;