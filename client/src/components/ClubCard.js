import React from 'react'
import { Card, CardContent, CardMedia, CardActions } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ClubsContext } from '../context/clubs';
import { useContext } from 'react';

function ClubCard( club_img, club_name, street, description  ) {
//pass addmatch fn
//comments should be on the card too but only appear after the match is completed?
//logic for that
    // const displayClubs = {displayClubs}

    // const { clubs } = useContext(ClubsContext)

  return (
    <Card sx={{ maxWidth: 500}}>
        <CardMedia
            component="div"
            sx={{ height:500 }}
            club_img={club_img}
            club_name={club_name}
        />
        <CardContent>
            <Typography gutterBottom variant="h6" component="div">
                  {street}
                </Typography>
                <Typography>
                {description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {} {}
            </Typography>
        </CardContent>
        <CardActions>
            <Button>Add a tennis match to this club</Button>
        </CardActions>
    </Card>
  )
}

export default ClubCard