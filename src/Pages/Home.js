import React, { useReducer} from 'react';
import {HomeCarSection } from '../Components/HomeCarSection';
import { About } from './About';
import { Footer } from './Footer';


function reducer(state, action) {
  switch (action.type) {
    case 'pickUpDate':
      return {
        ...state,
        pickUpDate: action.pickUpDate
      }
  }
}

const initialState = {
  pickUpDate: null,
  returnDate: null,
};

export function Home() {
  // convert useState to useReducer
    const [state, dispatch] = useReducer(reducer, initialState)

    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); 
    const day = currentDate.getDate().toString().padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}`;


  return (
    <div>
      <div className='flex flex-col  mt-4 sm:mt-24 mx-4 sm:mx-40'>
          <HomeCarSection />
          <div className='flex justify-center sm:justify-end '>
          </div>
      </div>
      <About />
      <Footer />
    </div>
  );
}
