import React from 'react';
import { TestimonialCard  } from "./TestimonialCard"
import person1 from "../Assests/person1.jpg"

export function Testimonial() {
    return (
        <div className='mt-10 bg-slate-800 py-10 sm:py-28 '>
            <h2 className='text-2xl sm:text-4xl font-semibold text-white'>Testimonial</h2>
            <p className='py-4 text-sm sm:text-lg text-zinc-400'>What People Say About Us</p>
            <div className='flex justify-center mt-16 flex-col sm:flex-row'>
                <TestimonialCard 
                    title="Reliable And Affordable - My Go-To Choice!" 
                    text="i've been a frequent customer of ---- for years, and they never disppoint . the staff is always friendly and
                    accommodating. whether it's quick business trip or a family vacation, quick wheels is my go-tp choice for relaible and affordable car rentals"
                    name="william"
                    image={person1}
                />
                <TestimonialCard 
                    title="Reliable And Affordable - My Go-To Choice!" 
                    text="i've been a frequent customer of ---- for years, and they never disppoint . the staff is always friendly and
                    accommodating. whether it's quick business trip or a family vacation, quick wheels is my go-tp choice for relaible and affordable car rentals"
                    name="william"
                    image={person1}
                />
                <TestimonialCard 
                    title="Reliable And Affordable - My Go-To Choice!" 
                    text="i've been a frequent customer of ---- for years, and they never disppoint . the staff is always friendly and
                    accommodating. whether it's quick business trip or a family vacation, quick wheels is my go-tp choice for relaible and affordable car rentals"
                    name="william"
                    image={person1}
                />
            </div>

        </div>
    )
}