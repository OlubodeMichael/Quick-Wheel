import React from 'react';
import { Card } from "./Card";
import Date from "../Assests/Date.svg";
import Icon from "../Assests/LocationIcon.svg";
import Search from "../Assests/Search.svg";
import AtmCard from "../Assests/Card.svg";


export function Work() {
    return (
        <div className='mt-10'>
            <h2 className='text-2xl sm:text-4xl font-semibold'>How It Works</h2>
            <p className='py-4 text-sm sm:text-lg text-zinc-400'>Effortless Rental, In Four Simple Steps</p>
            <div className=' flex justify-center items-center flex-col sm:flex-row'>
                <Card title="Choose a Location" text="Find out cars available at your location" icon={Icon} />
                <Card title="Pick Up Date" text="select the departure and return date" icon={Date} />
                <Card title="Find Out Cars" text="search a car that fits you and fulfil your needs" icon={Search} />
                <Card title="Payment" text="give half payment in advance for security fees" icon={AtmCard} />
            </div>
        </div>
    );
}
