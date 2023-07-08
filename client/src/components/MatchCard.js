import { React, useContext } from "react";
// import { ClubsContext } from '../context/clubs';
import { UserContext } from "../context/user";
import { Card, CardContent, CardMedia, CardActions } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";

function MatchCard( {avatar, id, club, datetime, phone, status} ) {
  // const { clubs } = useContext(ClubsContext)
  // const { user } = useContext(UserContext);

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
                {/* {skill_level ? "beginner" : "intermediate"} */}
              </Typography>
              <Typography>
                {phone}
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

//this is to view a match a user already has made
//the button allows the user to edit the match


{
    /* <ol>
               <b>Club:</b> {match.club.name} <br />
                         <b>Date:</b> {match.date} <br />
                         <b>Time:</b> {match.time} <br />
                        <b>Skill Level:</b> {match.skill_level ? "beginner" : "intermediate"}
                         <br />
                        <b>Phone:</b> {match.phone} <br />
                        <Link to={`/matches/${match.id}`}>
                       <button>Edit this Match</button>
                      </Link>
        
          </ol> */
  }

  //skill_level needs to be a boolean