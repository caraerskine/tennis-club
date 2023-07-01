import React from 'react';
import { Route, Routes } from 'react-router-dom'
// import Navigation from './components/Navigation'
import ResponsiveAppBar from './components/ResponsiveAppBar'
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Logout from './components/Logout'
import AllClubs from './components/AllClubs'
import Matches from './components/Matches';
import CompletedMatches from './components/CompletedMatches';
import './App.css';


function App() {
  return (
    <div>
      <ResponsiveAppBar />
      {/* <Navigation /> */}
        <div className="App">
      
            <Routes>
                        
              <Route path="/" element={<Home />} />

              <Route path="/login" element={<Login />} />

              <Route path="/signup" element={<SignUp />} />

              <Route path="/logout" element={<Logout />} />

              <Route path="/clubs" element={<AllClubs />} />

              <Route path="/matches" element={<Matches />} />

              

            </Routes>      
        </div>
    </div>
  );
}

export default App;
