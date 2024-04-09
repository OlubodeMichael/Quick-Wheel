import React from 'react';

export function Card({ icon, title, text}) {
    return (
      <div className="bg-white shadow-md rounded p-6 text-center hover:shadow-lg transition-transform transform hover:scale-105 w-44 h-40 m-4 sm:m-12">
        <img className="w-8 h-8 mx-auto mb-4 rounded-full " src={icon} alt={icon} />
        <h3 className="text-sm font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-xs">{text}</p>
      </div>
    );
  }
  
