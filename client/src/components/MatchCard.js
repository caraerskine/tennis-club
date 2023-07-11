import React from "react";
import { Card, CardContent, CardMedia, CardActions } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";

function MatchCard( {avatar, opponent, skill_level, id, club, datetime, phone, status} ) {

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "85vh",
    },
    card: {
      maxWidth: 600,
    },
  };

  return (
        <div style={styles.container}>
          <Card style={styles.card}>
            <CardMedia
              component="div"
              sx={{ height: 350 }}
              image={avatar}
              title="user avatar"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {club}
              </Typography>
              <Typography>
                {datetime}
              </Typography>
              <Typography>
                {skill_level ? "beginner" : "intermediate"}
              </Typography>
              <Typography>
                {phone}
              </Typography>
              <Typography>
                {opponent}
              </Typography>
              <Typography>
                {status}
              </Typography>
              <Typography variant="body2" color="text.secondary"></Typography>
            </CardContent>
            <CardActions>
              <NavLink to={`/matches/${id}`}>
                <Button>Edit this match</Button>
              </NavLink>
            </CardActions>
          </Card>
        </div>
  );
}

export default MatchCard;

//have logic show a "leave a comment shows up" when the match is in completed status