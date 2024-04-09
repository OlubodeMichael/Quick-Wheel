import React from 'react';
import { FooterList } from '../Components/FooterList';

export function Footer() {
    const company = ['About Us', 'Career', 'Support'];
    const resources = ['Webinars', 'Release Notes', 'Downloads', 'Guides', 'Media & Blogs'];
    const support = ['FAQ', 'Register', 'Help Centers', 'Feedback'];
    const contactInfo = ['+1 410-680-4122', 'quickwheel@gmail.com', '133 Prohaska Garden Suite 708, East Jaidaborough, 1daho'];

    return (
        <div>
        <footer className='bg-gray-700 pt-10 sm:pt-40 pb-20'>
            <div className='container mx-auto flex justify-center flex-wrap'>
                <FooterList lists={company} title="Company"/>
                <FooterList lists={resources} title="Resources"/>
                <FooterList lists={support} title="Support"/>
                <FooterList lists={contactInfo} title="Contact Info"/>
            </div>
            <hr className='border-b-2 border-white w-9/12 mx-auto mt-8'/>

        </footer>
        <div className='bg-black px-4 sm:px-40 py-4 flex flex-col sm:flex-row items-center justify-center sm:justify-between'>
            <h3 className='text-white text-xl sm:text-3xl font-serif mb-2 sm:mb-0'>Quickwheel.</h3>
            <p className='text-white text-xs sm:text-sm'>@ 2024 quickwheel - All Rights Reserved.</p>
        </div>

        </div>
    );
}
