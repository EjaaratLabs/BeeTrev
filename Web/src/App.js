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

function App() {
  return (
    <div className="App" style={{ minHeight: "100%" }}>
      <Router>
        <Routes>
          < Route  path="home/*" element={< Landing />} />
          <Route exact path="/" element={<CustomerWeb />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/tours" element={<Tours />} />
          <Route exact path="/hotels" element={<Hotels />} />
          <Route exact path="/transports" element={<Transports />} />
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
