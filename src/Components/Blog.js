import React from 'react';
import { BlogCard } from './BlogCard';
import LandRover from "../Assests/LandRover.avif"
import Passenger from '../Assests/Passenger.jpg'
import Bmw from "../Assests/bmw.jpg"
import { Button } from "../Components/Button"

export function Blog() {
    return (
        <div className='mt-10 flex flex-col cursor-pointer'>
            <h2 className='text-2xl sm:text-4xl font-semibold'>Discover Our Blogs</h2>
            <p className='py-4 text-sm sm:text-lg text-zinc-400'>Your Guide To Adventures On Wheels</p>
            <div className='flex justify-center items-center flex-col sm:flex-row mb-4'>
                <BlogCard text="Revving Up Innovation: Exploring the Latest In Automotive Technology" date="Jan 09, 2023" image={LandRover}/>
                <BlogCard text="Behind the Wheel Chronicles: Stories and Anecdotes from Car Enthusiasts " date="Aug 23, 2023" image={Passenger}/>
                <BlogCard text="Masterinf the Road: Essential Tips for a Smooth and Safe Drive." date="Sep 10, 2023" image={Bmw}/>
            </div>
            <Button text="View More" />
        </div>
    )
}