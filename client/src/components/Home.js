import React, { useContext } from 'react'
import { UserContext } from '../context/user'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from "@mui/material/Typography";

function Home() {

    const { user } = useContext(UserContext)


    const renderMatchesByStatus = (status) => {
        console.log('Status:', status);
        console.log('All Matches:', user.matches);
            const filteredMatches = user.matches.filter((match) => match.status === status);
        console.log('Filtered Matches:', filteredMatches);

        if (filteredMatches.length === 0) {
          return <Typography>No {status} matches found.</Typography>;
        }
       
    return (
            <div key = {compositeKey} >
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

     const compositeKey = `${user.avatar_url}-${user.username}`
     //can't make a unique key says I have two of the same (?) but how?

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
                    {/* <ol>
                        {{renderMatchesByStatus('completed')}
                        {renderMatchesByStatus('pending')}
                        {renderMatchesByStatus('accepted')}}
                    </ol> */}
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


//if I can see all matches by status in Matches
//Home should show me my profile, and I can edit it? Button for that?
//Home could list matches by type and provide count?
//Home could show date joined, and total matches?

//