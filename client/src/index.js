import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { UserProvider } from './context/user';
import { ClubsProvider } from './context/clubs';
import { BrowserRouter as Router } from 'react-router-dom'

function Wrap() {

    return (
        <Router>
            <UserProvider>
                <ClubsProvider>
                    <App />
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
