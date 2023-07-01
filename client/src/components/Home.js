import React, { useContext } from 'react'
import { UserContext } from '../context/user'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

function Home() {

   
    
    const { user } = useContext(UserContext)

    if (user) {
        return(
            <div>
                <h3>{user.name}'s Profile</h3>
                <Stack direction="row" spacing={3}>
                    <Avatar 
                        alt="your avatar" 
                        src={user.avatar_url}
                        sx={{ width: 200, height: 200, margin: "auto" }} 
                    />
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


// return(
   //<div>
    //<h3>🎾{user.name}'s Home Page🎾</h3>
    //<div>
      //  <img src={user.avatar_url} alt="your avatar" style={{width:"200px"}}/>
    //</div>
//</div>
//)