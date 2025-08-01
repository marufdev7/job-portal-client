import React from 'react';
import Banner from './Banner';
import Category from './Category/Category';
import HotJobs from './HotJobs/HotJobs';


const Home = () => {
    return (
        <div className='bg-slate-200 rounded-md'>
            <Banner />
            <Category />
            <HotJobs/>
        </div>
    );
};

export default Home;