import React from 'react';
import { Route, Routes } from 'react-router-dom'
import ResponsiveAppBar from './components/ResponsiveAppBar'
import About from './components/About';
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Logout from './components/Logout'
import AllClubs from './components/AllClubs'
import Matches from './components/Matches';
import NewMatchForm from './components/NewMatchForm';
import EditMatchForm from './components/EditMatchForm';
import './App.css';


function App() {
  return (
    <div>
      <ResponsiveAppBar />
        <div className="App">
            <Routes>
                        
              <Route path="/" element={<Home />} />

              <Route path="/login" element={<Login />} />

              <Route path="/signup" element={<SignUp />} />

              <Route path="/logout" element={<Logout />} />

              <Route path="/clubs" element={<AllClubs />} />

              <Route path="/matches" element={<Matches />} />

              <Route path="/matches/:id" element={<EditMatchForm />} />

              <Route path="/about" element={<About />} />

              <Route path="/clubs/:id/newmatch" element={<NewMatchForm />} />

            </Routes>      
        </div>
    </div>
  );
}

export default App;
