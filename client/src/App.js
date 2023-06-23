import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation'
import './App.css';

function App() {
  return (
    <div>
      <Navigation />
        <div className="App">
          <NavBar />
          <Routes>

          </Routes>      
        </div>
    </div>
  );
}

export default App;
