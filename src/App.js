import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/navbar';
import LandingPage from './components/landingPage/landingPage';
import CreatePassword from './components/createPassword/createPassword';

import './App.css';

// Axios for api fetching
// Montserrat Portico

function App() {
  return (
    <>
      <Router>
        <div id="relative root-container" style={{ width: "100vw", height: "auto" }}>
          <div className="sticky" style={{ top: "1rem", paddingInline: "8vw", zIndex: 100 }}>
            <Navbar />
          </div>

          <div className="absolute w-screen root-content" style={{ top:0, left: 0 }}>
            <Routes>
              <Route exact path='/' element={<LandingPage />} />
            </Routes>
            <Routes>
              <Route exact path='/get-started' element={<CreatePassword />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
