import React from 'react';
import { ServiceCard } from "./ServiceCard";
import Phone from "../Assests/Phone.svg";
import Car from "../Assests/Car.svg";
import Wallet from "../Assests/Wallet.svg";
import Tag from "../Assests/Tag.svg";
import Reg from "../Assests/Reg.svg"


export function Service() {
    return (
        <div className='flex flex-col-reverse sm:flex-row justify-around items-center mt-10 '>
            <img alt="about-car" src={Car} className='w-full md:w-[600px] lg:w-[600px] h-auto drop-shadow-lg ' />
            <div className='text-center sm:text-left w-80'> 
                <h2 className='text-2xl sm:text-4xl font-semibold '>Our Services</h2>
                <p className='py-2 text-sm sm:text-lg text-zinc-400'>Get The Best Experience From Our Rental Services</p>
                <ServiceCard title="Support 24/7" text="lorem ipsum dolor sit amet consectetur. facilisis habitant viverra tempus cursus." icon={Phone} />
                <ServiceCard title="Money Back Gurantee" text="lorem ipsum dolor sit amet consectetur. facilisis habitant viverra tempus cursus." icon={Wallet} />
                <ServiceCard title="Most Affordable Deals" text="lorem ipsum dolor sit amet consectetur. facilisis habitant viverra tempus cursus." icon={Tag} />
                <ServiceCard title="Registered Vehicles" text="lorem ipsum dolor sit amet consectetur. facilisis habitant viverra tempus cursus." icon={Reg} />

            </div>
        </div>
    );
}
