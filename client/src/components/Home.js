import React, { useContext } from 'react'
import { UserContext } from '../context/user'
import { ClubsContext } from '../context/clubs'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";

function Home() {

    const { user, id } = useContext(UserContext)
    const { clubs } = useContext(ClubsContext)

    console.log("id value:", id);  
    console.log("user for the new:", user);  

if (user) {

    // Count the number of matches at each club 

    const clubMatchesCount = clubs.reduce((countMap, club) => {
        countMap[club.club_name] = user.matches.filter((match) => match.club_id === club.id).length;
        return countMap;
      }, {});

    //   console.log("user", user)
  
      // make the count object an array of objects for easier mapping
   
      const clubMatches = Object.entries(clubMatchesCount).map(([clubName, count]) => ({ clubName, count }));
  
      const totalMatches = user.matches.length;

    // greeting message based on the number of matches
        let greetingMessage = '';
        if (totalMatches >= 5) {
            greetingMessage = 'You really love tennis!';
        } else {
            greetingMessage = 'You should be playing more!';
        }    

        //I need to have a button that says "edit profile" and that will take the user
        //to a form where they can edit their 'sign-up' info

     const compositeKey = `${user.avatar_url}-${user.username}`

        return(
            <div>
                <h3>{user.name}'s Profile</h3>
                <Stack direction="row" spacing={3}>
                    <Avatar 
                        alt="your avatar" 
                        src={user.avatar_url}
                        sx={{ width: 150, height: 150, margin: "auto" }} 
                    />                    
                </Stack>
                <Stack>
                    <h4>
                        <br></br>
                       
                         Hi {user.name}, you have {totalMatches} total matches.<br></br>
                         {greetingMessage}
                    </h4>
                    <ol  style={{ listStyle: 'none', padding: 0 }} >
                           {clubMatches.map(({ clubName, count }) => (
                            <li key={clubName}>
                                {count} matches @ {clubName}
                             </li>
                     ))}
                     <br></br>
                     </ol>
                     <NavLink to={`/${user.id}`}>
                        <Button>Edit your Profile</Button>
                     </NavLink>
                </Stack>
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

//this on line 73 seems right because it goes to pre-filled form
//I cannot however get the changes to persist even tho i get a dialog box that says it was saved
