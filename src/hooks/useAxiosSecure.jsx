import axios from 'axios';
import { useEffect } from 'react';
import useAuth from './useAuth';
import { useNavigate } from 'react-router-dom';

const axiosInstance = axios.create({
    baseURL: 'https://job-portal-server-ten-pi.vercel.app',
    withCredentials: true
})

const useAxiosSecure = () => {

    const { logOut } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        axiosInstance.interceptors.response.use(response => {
            return response;
        },
            error => {
                // console.log('error caught in interceptor', error.status);
                if (error.status === 401 || error.status === 403) {
                    // console.log('need to logout the user');
                    logOut()
                        .then(result => {
                            console.log('Sign Out Successfully');
                            // redirect to the login page
                            navigate('/signin');
                        })
                        .catch(err => {
                            console.error(err);
                        })
                }
                return Promise.reject(error)
            })
    }, [])
    return axiosInstance;
};

export default useAxiosSecure;