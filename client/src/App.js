import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Logout from './components/Logout';
import './App.css';

function App() {
  return (
    <div>
      <Navigation />
        <div className="App">
          <NavBar />
          <Routes>
            
            <Route path="/" element={<Home />} />

            <Route path="/login" element={<Login />} />

            <Route path="/signup" element={<SignUp />} />

            <Route path="/logout" element={<Logout />} />

          </Routes>      
        </div>
    </div>
  );
}

export default App;
