import React, { useContext } from 'react'
import { UserContext } from '../context/user';
import { NavLink } from 'react-router-dom'
import Home from './Home';


function NavBar() {
    const {user} = useContext(UserContext)
    // const navigate = useNavigate()

    //should I show the profile here?
    //if user, show profile card
    //if no user, show welcome message line

    //if user, show a <UserProfileCard />

    console.log(user)

    if (!user) {
        return (
            <div>
                <h3>🎾Welcome to the NYC Tennis Match Booking App🎾</h3>
            </div>    
        )
    }
        return (
            <ul>
                <h4>Not Sure</h4>
            </ul>
        )
}

export default NavBar

//user and logout are in UserContext and that is where they come from
//.then arrow function is empty becasue it is not sending anything back

//games button takes you to games which loads the game form
//allcourts does take you to courts

//Games component is also rendering on this page below the NavBar

//If user...return something that lets them know they are "in"
//pic of their avatar?

