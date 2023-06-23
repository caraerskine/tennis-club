import React from 'react';
import { NavLink } from 'react-router-dom';


//make styling

const link = {
        width: '100px',
        padding: '12px',
        margin: '0 6px 6px',
        textDecoration: 'none',
        color: 'white',
        background: 'yellow'
}

function Navigation () {
    return (
        <div>
            <NavLink
                to="/"
                style={link}
                activestyle={{background: 'fuchsia'}}                
            >Home</NavLink>
            
          <NavLink
                to="/matches/pending"
                style={link}
                activestyle={{background: 'fuchsia'}}
            >Pending Matches</NavLink>

           <NavLink
                to="/matches/accepted"
                style={link}
                activestyle={{background: 'fuchsia'}}
            >🎾Accepted Matches🎾</NavLink> 

            <NavLink
                to="/clubs"
                style={link}
                activestyle={{background: 'fuchsia'}}
            >Tennis Clubs</NavLink> 

            <NavLink
                to="/login"
                style={link}
                activestyle={{background: 'fuchsia'}}
            >Login</NavLink> 
             
            <NavLink
                to="/signup"
                style={link}
                activestyle={{background: 'fuchsia'}}
            >Signup</NavLink> 

        </div>
    )
}

export default Navigation;
