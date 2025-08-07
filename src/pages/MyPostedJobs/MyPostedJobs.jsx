import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyPostedJobs = () => {

    const [postedJobs, setPostedJobs] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch(`http://localhost:3000/jobs?email=${user.email}`)
            .then(res => res.json())
            .then(data => setPostedJobs(data))
    }, [user.email])

    return (
        <div>
            <h1>My posted Jobs{postedJobs.length}</h1>
        </div>
    );
};

export default MyPostedJobs;