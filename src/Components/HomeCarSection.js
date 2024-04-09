import React from 'react';
import Car from "../Assests/Car.svg";
import { Button } from '../Components/Button';
import { SecondaryButton } from '../Components/Button';

export function HomeCarSection() {
  return (
    <div className='flex items-center justify-between p-8 mt-14 text-center sm:text-left flex-col-reverse sm:flex-row mb-24'>
      <div className=''>
        <h2 className='text-4xl font-light text-gray-800 mb-4 '>YOUR PREMIER CAR</h2>
        
        <h1 className='text-3xl sm:text-5xl font-bold text-blue-600 mb-4 tracking-wider '>RENTAL SERVICE</h1>
        <p className='text-gray-600 mt-4 mb-4 text-sm sm:text-lg w-80 sm:w-[500px] '>
        A top-tier car rental company in the USA, serving corporate executives, employees, travel agents, tour operators, and event management companies.
        </p>
        <div className='flex '>
            <Button text="Get Started" className="mr-3"/>
            <SecondaryButton text="Rent Now" />
        </div>
        
      </div>
      <div className='drop-shadow-2xl pl-10 mb-10 sm:mb-0'>
        <img src={Car} alt="home-car" className='w-full md:w-[600px] lg:w-[600px] h-auto drop-shadow-lg ' />
      </div>
    </div>
  );
};


