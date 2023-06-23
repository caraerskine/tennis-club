import React, { useContext } from 'react'
import { UserContext } from '../context/user';
import { NavLink, useNavigate } from 'react-router-dom'


function NavBar() {
    const {user, logout} = useContext(UserContext)
    const navigate = useNavigate()

    const logoutUser = () => {
        fetch ('/logout', {
            method: 'DELETE',
            headers: { 'Content-Type' : 'application/json' }
        })
        .then(() => {
            logout()
            navigate('/')
        })
    }

    if (user) {
        return (
            <div>
                <h2>Hello {user.username} </h2>
                <h4>Click "Logout" to logout</h4>
                <p></p>
                <br/>
                <button onClick={logoutUser}>Logout</button>
                <NavLink to='/matches/accepted'>
                    <button>Matches</button>
                </NavLink>
                <NavLink to='/clubs'>
                    <button>Clubs</button>
                </NavLink>
            </div>
        )          
    } else {
        return (
            <div>
                <h3>Welcome to the NYC Tennis Match Booking App🎾</h3>
                <NavLink to='/login'>
                    <button>Login</button>
                </NavLink>
                <NavLink to='/signup'>
                    <button>Signup</button>
                </NavLink>
            </div>
        )
    }
}

export default NavBar

//user and logout are in UserContext and that is where they come from
//.then arrow function is empty becasue it is not sending anything back

//games button takes you to games which loads the game form
//allcourts does take you to courts

//Games component is also rendering on this page below the NavBar
