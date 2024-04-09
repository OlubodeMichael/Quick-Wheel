import React from 'react';

export function FooterList({lists}) {
    return (
        <div className='flex flex-col px-10 w-64'>
            <h3 className='text-lg text-white'>Company</h3>
            <div className='text-sm text-white'>
                {lists.map((lists, index) => <p className='py-2' key={index}>
                    
                    {lists}
                </p>)}
            </div>
        </div>
    )
}

