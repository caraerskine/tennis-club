import React from 'react'
import { Card, CardContent, CardMedia, CardActions } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom'

function ClubCard( {club_img, id, club_name, street, description}  ) {

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

    
  return (
    <>
        <div key={id} style={styles.container}>
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
          <NavLink to={`/clubs/${id}/newmatch`}>
            <Button>Add a match to {club_name}</Button>
          </NavLink>
        </CardActions>
    </Card>
    </div>
  </>
  )
}

export default ClubCard




