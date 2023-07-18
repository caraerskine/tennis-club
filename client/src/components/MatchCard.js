import React, {useContext, useState, useEffect} from "react";
import { Card, CardContent, CardMedia, CardActions } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import CommentSection from './CommentSection';
import { UserContext } from '../context/user'

function MatchCard( {avatar, skill_level, id, club, datetime, phone, status, comments} ) {
  
  // console.log("datetime", new Date(datetime).toDateString());
  const {user} = useContext(UserContext)
  const [receiverData, setReceiverData] = useState(null);

  const handleSaveComment = (comment) => {
    // Logic to save the comment to the backend or update the match's comment field.
    console.log('Comment:', comment);
  };

      // useEffect(() => {
      //   const receiverComment = comments && comments.find((comment) => comment.user.id !== user.id);
      //   const receiverInfo = receiverComment ? receiverComment.user : null;
      //   setReceiverData(receiverInfo);
      // }, [comments, user.id]);


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
    statusColors: {
      completed: "purple",
      rejected: "red",
      pending: "#efcc00",
      accepted: "green",
    },
  };

  const getStatusColor = (status) => {
    return styles.statusColors[status] || "black"; // Default to black for unknown statuses
  };


  return (
        <div className= "match-card" style={styles.container}>
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
                  {new Date(datetime).toLocaleTimeString()}
                </Typography>
                <Typography>
                  {new Date(datetime).toDateString()}
                </Typography>
                <Typography>
                  {skill_level ? "intermediate" : "beginner"}
                </Typography>
                <Typography>
                  {/* {phone} */}
                  {/* {receiverData ? receiverData.phone : "Opponent phone not available"} */}
                  {/* {receiverData && receiverData.phone} */}
                </Typography>
                <Typography style={{ color: getStatusColor(status) }}>
                  {status}
                </Typography>
              
                <>
                    {status === 'completed' && (               
                      <CommentSection matchId={id} comments={comments} onSaveComment={handleSaveComment} />
                    )}
                </>
              
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

//can we show opponent phone on matchcard (you know your own phone #)
//can we show opponent name and/or avatar on matchcard

//comments used to be a prop coming in ad passed down