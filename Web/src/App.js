import React from 'react';

import { Login } from './views/Authentication/Login';
import { Signup } from './views/Authentication/Signup';

import { Landing } from './views/Landing';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, } from "react-router-dom";
import { CustomerWeb } from './views/CustomerWeb';
import { Tours } from './views/CustomerWeb/Tours';
import { Hotels } from './views/CustomerWeb/Hotels';
import { Transports } from './views/CustomerWeb/Transports';
import { Landing1 } from './views/Landing1';
import { TourLanding } from './views/TourLanding';
import { TourDetails } from './views/TourDetails';
import { TourBooking } from './views/TourBooking';
import { HotelLanding } from './views/HotelLanding';
import { HotelDetails } from './views/HotelDetails';
import { HotelBooking } from './views/HotelBooking';

function App() {
  return (
    <div className="App" style={{ minHeight: "100%" }}>
      <Router>
        <Routes>
          < Route  path="home/*" element={< Landing />} />
          < Route  path="/" element={< Landing1 />} />
          < Route  path="/tour" element={< TourLanding />} />
          < Route  path="/tour/:tourCategory" element={< TourLanding />} />
          <Route exact path="/landing" element={<CustomerWeb />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/tours" element={<Tours />} />
          <Route exact path="/hotels" element={<Hotels />} />
          <Route exact path="/transports" element={<Transports />} />
          <Route path="details/:tourId" element={<TourDetails />} />
          <Route path="booking/:tourId" element={<TourBooking />} />
          <Route path="/hotel" element={<HotelLanding />} />
          <Route path="/hotel/details/:hotelId" element={<HotelDetails />} />
          <Route path="/hotel/booking/:hotelId" element={<HotelBooking />} />
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
