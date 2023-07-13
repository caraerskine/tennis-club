import React, { useContext } from 'react'
import { UserContext } from '../context/user'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from "@mui/material/Typography";
// import { MatchesContext } from '../context/matches';
// import { format } from 'date-fns';

function Home() {

    //get matches from matches.js, right?

    const { user } = useContext(UserContext)
    // const { matches } = useContext(MatchesContext)


    //map over matches to get completed matches, pending matches and accepted matches
console.log("user.matches", user.matches)


    const renderMatchesByStatus = (status) => {
        console.log('Status:', status);
  console.log('All Matches:', user.matches);
        const filteredMatches = user.matches.filter((match) => match.status === status);
        console.log('Filtered Matches:', filteredMatches);

        if (filteredMatches.length === 0) {
          return <Typography>No {status} matches found.</Typography>;
        }
       
        

    return (
            <div key={user.created_at} >
                <Typography variant="h6">{status} matches:</Typography>
                {filteredMatches.map((match) => (
                    <div key={match.created_at}>
                        {match.receiver && (
                            <Avatar alt="Receiver Avatar" src={match.receiver.avatar_url} />
                        )}
                 <Typography>opponent phone: {match.phone}</Typography>
                  </div>
            ))}
            </div>
        )
    } 

    if (user) {
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
                <br></br>
                    <ol>
                        {renderMatchesByStatus('completed')}
                        {renderMatchesByStatus('pending')}
                        {renderMatchesByStatus('accepted')}
                    </ol>
            </div>

    )    
  }



            return null;
}
        
    // return (
    //     <ul>
    //         <h4>Please login to see your matches!</h4>
    //     </ul>
    // )

export default Home


// return(
   //<div>
    //<h3>🎾{user.name}'s Home Page🎾</h3>
    //<div>
      //  <img src={user.avatar_url} alt="your avatar" style={{width:"200px"}}/>
    //</div>
//</div>
//)

//user.matches.length

{/* <Typography align="center">
All Matches: {user.matches.length}
</Typography>
<Typography>
Completed Matches: {user.matches.completed}
</Typography>
<Typography>
Clubs: {user.clubs.length}
</Typography> */}