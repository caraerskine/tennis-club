import React, {useContext, useState, useEffect} from "react";
import { Card, CardContent, CardMedia, CardActions } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import CommentSection from './CommentSection';
import { UserContext } from '../context/user'
import { MatchesContext } from "../context/matches";

function MatchCard( {avatar, request, skill_level, id, club, datetime, phone, opponentPic, status, comments} ) {
  

  const {user} = useContext(UserContext)
  const { onEditMatch } = useContext(MatchesContext)
  const [choice, setChoice] = useState(false)

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
    return styles.statusColors[status] || "black"; 
  };


  function onAddChoice(e) {
    e.preventDefault()
    onEditMatch({
      id: id,
      status: choice,
    })
  }


  return (
        <div className= "match-card" style={styles.container}>
          <Card style={styles.card}>
            <CardMedia
              component="div"
              sx={{ height: 350 }}
              image={opponentPic}
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
                  {skill_level}
                </Typography>
                <Typography style={{ color: getStatusColor(status) }}>
                  {status}
                </Typography>
              
                <>
                    {status && status.toLowerCase() === 'completed' && comments && (               
                      <CommentSection matchId={id} comments={comments}  />
                    )}
                </> 
                    
                <>
                      {status && status.toLowerCase() === 'pending' && request && (
                        <div>
                          <label>Choice:</label>
                            <select
                                value={choice}
                                onChange={(e) => setChoice(e.target.value)}
                            >              
                                <option value={""}>select a choice:</option>
                                <option value={"accepted"}>accept</option>
                                <option value={"rejected"}>reject</option>
                            </select>
                                <button onClick={onAddChoice}>Submit</button>
                        </div>
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

