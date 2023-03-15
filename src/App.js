import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/navbar';
import LandingPage from './components/landingPage/landingPage';

import styles from './components/styles';
import './App.css';

// Axios for api fetching
// Montserrat Portico

function App() {
  return (
    <>
      <Router>
        <div id="relative root-container">
          <div className="sticky" style={{ top: "1rem", paddingInline: "8vw" }}>
            <Navbar />
          </div>

          <div className="root-content">
            <Routes>
              <Route exact path='/' element={<LandingPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
