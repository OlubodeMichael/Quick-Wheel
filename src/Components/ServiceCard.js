import React from 'react';

export function ServiceCard({ icon, title, text }) {
    return (
        <div className='flex items-center w-80 sm:w-96 my-6'>
            <img src={icon} alt="service-icon" className="w-6 h-6 mr-2 rounded-full" />
            <div className='flex flex-col text-left px-4'>
                <h3 className="text-md font-semibold">{title}</h3>
                <p className="text-gray-600 text-sm">{text}</p>
            </div>
        </div>
    );
}
