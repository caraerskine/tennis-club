import React from 'react';
import { NavLink } from 'react-router-dom';


//make styling

const link = {
        left: '0px',
        width: '100px',
        padding: '12px',
        margin: '0 6px 6px',
        textDecoration: 'none',
        color: 'black',
        background: 'yellow'
}

function Navigation () {
    return (
        <div>
            <NavLink
                to="/"
                style={link}
                activestyle={{background: '#dfff4f'}}                
            >Home</NavLink>
            
          <NavLink
                to="/matches/pending"
                style={link}
                activestyle={{background: '#dfff4f'}}
            >Pending Matches⏳</NavLink>

           <NavLink
                to="/matches/accepted"
                style={link}
                activestyle={{background: '#dfff4f'}}
            >Accepted Matches 🎾</NavLink> 

            <NavLink
                to="/clubs"
                style={link}
                activestyle={{background: '#dfff4f'}}
            >Tennis Clubs</NavLink> 

            <NavLink
                to="/login"
                style={link}
                activestyle={{background: '#dfff4f'}}
            >Login</NavLink> 
             
            <NavLink
                to="/signup"
                style={link}
                activestyle={{background: '#dfff4f'}}
            >Signup</NavLink> 
            
            <NavLink
                to="/logout"
                style={link}
                activestyle={{background: '#dfff4f'}}
            >Logout</NavLink> 

        </div>
    )
}

export default Navigation;

//#dbe341