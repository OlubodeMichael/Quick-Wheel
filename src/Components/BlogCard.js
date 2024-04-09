import React from 'react';

export function BlogCard({ image, text, date }) {
    return (
        <div className="text-left w-72 m-4 border rounded-xl overflow-hidden">
            <img src={image} alt="Blog pic" className="w-full h-40 object-cover" />
            <div className="p-4">
                <p className="font-semibold text-sm mb-2">{text}</p>
                <span className="text-gray-600 text-xs">{date}</span>
            </div>
        </div>
    );
}
