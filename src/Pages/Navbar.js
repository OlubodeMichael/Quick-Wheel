import React, { useState } from 'react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="p-4 flex justify-between items-center mx-0 sm:mx-20">
      <div className="container mx-auto">
        <div className="text-black text-lg font-bold">
          <a href="/">Quickwheel</a>
        </div>
      </div>

      <div className="hidden sm:flex space-x-10">
        <a href="/" className="text-black hover:text-gray-300">
          Home
        </a>
        <a href="/carListing" className="text-black hover:text-gray-300">
          Listing
        </a>
        <a href="/login" className="text-black hover:text-gray-300 border px-4">
          Login
        </a>
      </div>

      <div className="block sm:hidden">
        <button onClick={toggleMenu} className="text-black focus:outline-none">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden absolute inset-x-0 top-16 bg-white z-10 transition-all duration-300 ease-in-out">
          <div className="container mx-auto">
            <a href="/" className="block py-2 text-black hover:text-gray-300">
              Home
            </a>
            <a href="/carListing" className="block py-2 text-black hover:text-gray-300">
              Listing
            </a>
            <a href="/login" className="block py-2 text-black hover:text-gray-300 border-b border-gray-300">
              Login
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}




/*
- Navbar
  - Home
  - Car Listings
    - Car Details
      - Booking Confirmation
  - Search Results
  - User Account
    - Booking History
  - Contact Us
  - About Us
  - Terms and Conditions
  - 404 Error Page

*/
