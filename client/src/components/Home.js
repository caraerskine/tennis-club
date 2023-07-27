import React, { useContext } from 'react'
import { UserContext } from '../context/user'
import { ClubsContext } from '../context/clubs'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";


function Home() {

    const { user, id } = useContext(UserContext)
    const { clubs } = useContext(ClubsContext)

if (user) {


    const clubMatchesCount = clubs.reduce((countMap, club) => {
        countMap[club.club_name] = user.matches.filter((match) => match.club_id === club.id).length;
        return countMap;
      }, {});

   
      const clubMatches = Object.entries(clubMatchesCount).map(([clubName, count]) => ({ clubName, count }));
  
      const totalMatches = user.matches.length;

        let greetingMessage = '';
        if (totalMatches >= 5) {
            greetingMessage = 'You really love tennis!';
        } else {
            greetingMessage = 'You should be playing more!';
        }    


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

