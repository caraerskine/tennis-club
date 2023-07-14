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
import RejectedMatches from './components/RejectedMatches'
import CompletedMatches from './components/CompletedMatches'
import PendingMatches from './components/PendingMatches'
import AcceptedMatches from './components/AcceptedMatches'
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

              <Route path="/matches/accepted" element={<AcceptedMatches />} />  

              <Route path="/matches/pending" element={<PendingMatches />} />  

              <Route path="/matches/rejected" element={<RejectedMatches />} />  

              <Route path="/matches/completed" element={<CompletedMatches />} />            

              <Route path="/about" element={<About />} />

              <Route path="/clubs/:id/newmatch" element={<NewMatchForm />} />

            </Routes>      
        </div>
    </div>
  );
}

export default App;
