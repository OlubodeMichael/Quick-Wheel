import React from 'react';

export function TestimonialCard({ image, title, text, name }) {
    return (
        <div className='text-center max-w-xs sm:max-w-sm md:max-w-sm lg:max-w-md xl:max-w-lg w-80 bg-white px-6 rounded-xl flex flex-col mx-auto my-10'>
            <img src={image} alt="people" className='w-24 h-24 mx-auto rounded-full mb-4 -mt-14'/>
            <h3 className='text-md font-semibold py-2'>{title}</h3>
            <p className='text-sm text-gray-600 py-2'>{`"${text}"`}</p>
            <span className='block border-b-2 border-gray-500 w-24 mx-auto py-1'></span>
            <h3 className='text-lg font-semibold py-2'>{name}</h3>
        </div>
    );
}
