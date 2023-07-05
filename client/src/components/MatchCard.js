import { React, useContext } from "react";
// import { ClubsContext } from '../context/clubs';
import { UserContext } from "../context/user";
import { Card, CardContent, CardMedia, CardActions } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";

function MatchCard() {
  // const { clubs } = useContext(ClubsContext)
  const { user } = useContext(UserContext);

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
    <>
      {user.matches.map((match) => (
        <div key={match.id} style={styles.container}>
          <Card style={styles.card}>
            <CardMedia
              component="div"
              sx={{ height: 350 }}
            //   image={club_img}
            //   title="club"
            //should this have avatars of both users to id this match?
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {match.club.name}
              </Typography>
              <Typography>
                {match.date}, {match.time}
              </Typography>
              <Typography>
                {match.skill_level ? "beginner" : "intermediate"}
              </Typography>
              <Typography>
                {match.contact_info}
              </Typography>
              <Typography variant="body2" color="text.secondary"></Typography>
            </CardContent>
            <CardActions>
              <NavLink to={`/matches/${match.id}`}>
                <Button>Edit this match</Button>
              </NavLink>
            </CardActions>
          </Card>
        </div>
      ))}
    </>
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
                        <b>Contact info:</b> {match.contact_info} <br />
                        <Link to={`/matches/${match.id}`}>
                       <button>Edit this Match</button>
                      </Link>
        
          </ol> */
  }