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
        <div id="root-container">
          <div className="relative">
            <Navbar />
          </div>

          <Routes>
            <Route exact path='/' element={<LandingPage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
