import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation'
import NavBar from './components/NavBar'
import Home from './components/Home'
import './App.css';

function App() {
  return (
    <div>
      <Navigation />
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />

          </Routes>      
        </div>
    </div>
  );
}

export default App;
