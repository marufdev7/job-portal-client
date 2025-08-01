import React from 'react';

const CategoryCard = ({ categoryItem }) => {
    const { category, jobs_available, img } = categoryItem;
    return (
        <div className="bg-slate-100 hover:bg-slate-50 rounded-xl shadow-md hover:shadow-lg p-3 mt-4 flex items-center gap-2">
            <img className='w-12 h-12' src={img} alt="" />
            <div>
                <h3 className="font-semibold hover:text-blue-500 cursor-pointer">{category}</h3>
                <p className="text-sm text-gray-500 mt-1">{jobs_available} Jobs Available</p>

            </div>
        </div>

    );
};

export default CategoryCard;