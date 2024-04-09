import React from 'react';
import { Navbar } from './Pages/Navbar';
import { Home } from './Pages/Home';
import { Login } from './Pages/Login';
import { CarListing } from './Pages/CarListing';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
 
  return (  
    <Router>
      <div className="scroll-smooth focus:scroll-auto">
        <Navbar />
        <div className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            {/* Add more routes as needed */}
            <Route path="/carListing" element={<CarListing />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
