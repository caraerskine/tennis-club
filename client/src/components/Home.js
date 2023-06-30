import React, { useContext } from 'react'
import { UserContext } from '../context/user'

function Home() {

    //do i want buttons that are like...
    //create a new match
    //click on the menu above to see 
    //do i want to show user's matches
    
    const { user } = useContext(UserContext)

    if (user) {
        return(
            <div>
                <h3>🎾{user.name}'s Home Page🎾</h3>
                <div>
                    <img src={user.avatar_url} alt="your avatar" style={{width:"200px"}}/>
                </div>
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
