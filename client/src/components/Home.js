import React, { useContext } from 'react'
import { UserContext } from '../context/user'
import { ClubsContext } from '../context/clubs'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
// import Typography from "@mui/material/Typography";

function Home() {

    const { user } = useContext(UserContext)
    const { clubs } = useContext(ClubsContext)

if (user) {

    // Count the number of matches at each club 
    //was reading club_id as null so I commented out

    // const clubMatchesCount = clubs.reduce((countMap, club) => {
    //     countMap[club.club_name] = user.matches.filter((match) => match.club_id === club.id).length;
    //     return countMap;
    //   }, {});

      console.log("user", user)
  
      // Convert the count object to an array of objects for easier mapping
      //null
    //   const clubMatches = Object.entries(clubMatchesCount).map(([clubName, count]) => ({ clubName, count }));
  
      const totalMatches = user.matches.length;

    // Define the greeting message based on the number of matches
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
                        {/* Hi {user.name}, you have {user.matches.length} total <br></br>
                        matches at the following clubs: */}
                         Hi {user.name}, you have {totalMatches} total matches.<br></br>
                         {greetingMessage}
                    </h4>
                    {/* <ol  style={{ listStyle: 'none', padding: 0 }} >
                           {clubMatches.map(({ clubName, count }) => (
                            <li key={clubName}>
                                {count} matches @ {clubName}
                             </li>
                     ))}
                    </ol> */}
                            {/* Hi {user.name}, you have {numMatches} <br></br>
                            matches at {clubNames.join(',')}. */}
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


