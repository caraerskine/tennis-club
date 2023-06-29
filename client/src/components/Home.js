import React, { useContext } from 'react'
import { UserContext } from '../context/user'

function Home() {
    
    const { user } = useContext(UserContext)

    if (user) {
        return(
            <div>
                <h3>🎾{user.username}'s Home Page🎾</h3>
                <div>
                    <h3>{user.avatar_url}</h3>
                </div>
                <h3>Welcome to the NYC Tennis Match Booking App!</h3>
            </div>
        )
    } 
        
    return (
        <ul>
            <h4>Please login to see your matches!</h4>
        </ul>
    )
    
}

export default Home
