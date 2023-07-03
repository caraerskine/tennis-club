import React from 'react'
import { Card, CardContent, CardMedia, CardActions } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ClubsContext } from '../context/clubs';
import { UserContext } from '../context/user';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom'

function ClubCard( {club_img, club_name, street, description}  ) {
//pass addmatch fn
//comments should be on the card too but only appear after the match is completed?
//logic for that

const { clubs } = useContext(ClubsContext)

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '85vh',
  },
  card: {
    maxWidth: 600,
  },
};

console.log(typeof(clubs))
    
  return (
    <>
    {clubs.map(club => (
        <div key={club.id} style={styles.container}>
    <Card style={styles.card} >
        <CardMedia
            component="div"
            sx={{ height:350 }}
            image={club_img}
            title="club"
        />
        <CardContent>
            <Typography gutterBottom variant="h6" component="div">
                {club_name} 
              </Typography>
              <Typography>
                {street}, {description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
            </Typography>
        </CardContent>
        <CardActions>
          <NavLink to={`/clubs/${club.id}/newmatch`}>
            <Button>Add a tennis match to {club.club_name}</Button>
          </NavLink>
        </CardActions>
    </Card>
    </div>
  ))}
  </>
  )
}

export default ClubCard

