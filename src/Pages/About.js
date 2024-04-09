import React from 'react';
import { Work } from '../Components/Work';
import { Service } from '../Components/Service';
import { Blog } from '../Components/Blog';
import { Testimonial } from '../Components/Testimonials';

export function About() {
    return (
        <div className='flex flex-col text-center mt-20 '>
            <Work />
            <Service />
            <Blog />
            <Testimonial />
        </div>
    );
}

