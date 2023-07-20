import React, { useContext, useState } from 'react'
import { UserContext } from '../context/user'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from "@mui/material/Typography";

function CommentBar( {match, comment} ) {

    const { user } = useContext(UserContext)

    let completedMatches

//map over users matches
//can i get comments from matches I think I can b/c model 
//matches have many comments
//users have matches
//user.comments works 

      const commentMatches = user.matches.map((match) => match.comment === comment);
        console.log('Mapped Matches:', commentMatches);

        if (commentMatches.length === 0) {
            return <Typography>No {comment} found.</Typography>;
          }  
          
          return (
                <div>
                     {/* status = completed &&  */}

                  {completedMatches.map((match) => (
                    <div key={match.id}>
                      <p>{match.id}</p>
                      <p>{match.status}</p>
                      <ul>
                        {match.comments.map((comment) => (
                          <li key={comment.id}>{comment.content} - {comment.name}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              );
              
}



export default CommentBar;

//I need to map over the users matches
//serialize comments to each match
//are comments aavailable to each match?

//provide that match to each match card
//so does this need to be a child of MatchCard ?

//and then that can map over the comments which are then proivded to the comments section

//user has matche