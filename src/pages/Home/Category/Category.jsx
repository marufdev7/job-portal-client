import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';

const Category = () => {

    const [categorys, setCategory] = useState([]);

    useEffect(() => {
        fetch('/category.json')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])
    return (
        <div className='pt-8 pb-8'>
            <div className='text-center'>
                <h1 className='text-4xl font-bold py-3'>Browse by category</h1>
                <p className='text-slate-600 text-lg'>Find the job that's perfect for you. About 800+ new jobs everyday.</p>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-5 gap-4 p-3'>
                {
                    categorys.map(category => (
                        <CategoryCard
                            key={category.id}
                            categoryItem={category}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Category;