import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../../context/AuthContext/AuthContext';
import jobIcon from '../../assets/job-icon/job-application-1.png'

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log('Sign Out Successfully');
            })
            .catch(err => {
                console.error(err);
            })
    }

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li className='px-3'><NavLink to='/my-application'>My Application</NavLink></li>
        <li><NavLink to='/add-job'>Add Job</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to='/' className='flex items-center gap-0'>
                    <img className='w-9 h-9' src={jobIcon} alt="" />
                    <h1 className='text-xl font-bold text-zinc-700'>Jop Portal</h1>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.email ?
                        <>
                            <button onClick={handleLogOut}>Sign Out</button>
                        </>
                        :
                        <>
                            <Link to="/register">Register</Link>
                            <Link to='/signin' className="btn">Sign In</Link>
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;