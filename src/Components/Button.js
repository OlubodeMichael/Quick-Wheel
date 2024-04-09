import React from 'react';

export function Button({text, OnClick, className}) {
    return (
        <div>
            <button className={`bg-blue-700 text-white px-6 py-3 hover:bg-white hover:text-blue-500 hover:border border-blue-500 rounded shadow-md w-36 sm:w-40 font-sm ${className} cursor-pointer`}  onClick={OnClick}>
                {text}
            </button>
        </div>
    )
}

export function SecondaryButton({ text, onClick, className }) {
    return (
      <div>
        <button className={`bg-white border border-blue-500 text-blue-500 px-6 py-3 hover:bg-blue-700 hover:text-white rounded shadow-md w-40 sm:w-36 font-sm ${className} cursor-pointer`} onClick={onClick}>
          {text}
        </button>
      </div>
    );
  }
  