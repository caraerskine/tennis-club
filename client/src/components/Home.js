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
    const clubMatchesCount = clubs.reduce((countMap, club) => {
        countMap[club.club_name] = user.matches.filter((match) => match.club_id === club.id).length;
        return countMap;
      }, {});
  
      // Convert the count object to an array of objects for easier mapping
      const clubMatches = Object.entries(clubMatchesCount).map(([clubName, count]) => ({ clubName, count }));
  
      const totalMatches = user.matches.length;

    // Define the greeting message based on the number of matches
        let greetingMessage = '';
        if (totalMatches >= 5) {
            greetingMessage = 'You really love tennis!';
        } else {
            greetingMessage = 'You should be playing more!';
        }
    // const renderMatchesByStatus = (status) => {
    //     console.log('Status:', status);
    //     console.log('All Matches:', user.matches);

    // const numMatches = user.matches.filter((match) => match.status === 'pending').length;
    // console.log('Filtered Matches:', numMatches);

    // const clubNames = user.clubs.map((club) => club.club_name)
    // console.log('Filtered Clubs:', clubNames);

    //     if (filteredMatches.length === 0) {
    //       return <Typography>No {status} matches found.</Typography>;
    //     }
       
            // <div key = {compositeKey} >
            //     <Typography variant="h6">{status} matches:</Typography>
            //     {filteredMatches.map((match) => (
            //         <div key={match.created_at}>
            //             {match.receiver && (
            //                 <Avatar alt="Receiver Avatar" src={match.receiver.avatar_url} />
            //             )}
            //      <Typography>opponent phone: {match.phone}</Typography>
            //       </div>
            // ))}
            // </div>
    

     const compositeKey = `${user.avatar_url}-${user.username}`
     //can't make a unique key says I have two of the same (?) but how?

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
                    <ol  style={{ listStyle: 'none', padding: 0 }} >
                           {clubMatches.map(({ clubName, count }) => (
                            <li key={clubName}>
                                {count} matches @ {clubName}
                             </li>
                     ))}
                    </ol>
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


