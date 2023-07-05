import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { UserProvider } from './context/user';
import { ClubsProvider } from './context/clubs';
import { MatchesProvider } from './context/matches';
import { BrowserRouter as Router } from 'react-router-dom'

function Wrap() {

    return (
        <Router>
            <UserProvider>
                <ClubsProvider>
                    <MatchesProvider>
                        <App />
                    </MatchesProvider>
                </ClubsProvider>
            </UserProvider>
        </Router>
    )
}

const root = document.getElementById('root');
ReactDOM.render(
    <Wrap />, 
    root
)

//added MatchesProvider because I added a matches.js file for Match Concerns