import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../context/user';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from "@mui/material/Typography";


function CommentSection({ matchId, comments }) {
    const { user, setUser } = useContext(UserContext);
    const [newComment, setNewComment] = useState('');

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const maxCommentCount = 6;

  //hits the comment controller between a match and a user
  //when you update state you are updating the user's matches comments when you update that comment
  const handleAddComment = (e) => {
    e.preventDefault();
    const newCommentData = {
        content: newComment,
        match_id: matchId,
        user_id: user.id, 
      };
    
    fetch(`/comments`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newCommentData),
       })
        .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            console.log('API Response:', data); 
            const updatedMatches = user.matches.map((match) => {
              if (match.id === matchId){
                return {...match, comments:[...match.comments, data]}
              } else return match
        }) 
            const updatedUser = {...user, matches: updatedMatches}; 
            setUser(updatedUser);           
            alert ("comment added!");
            setNewComment('');
            console.log('New Comment:', data); 
        })
        .catch((error) => console.error('Error adding comment:', error));  
    }

    console.log("user", user)

  return (
    <div className="comment-section">
            {Array.isArray(comments) && 
                comments.slice(-maxCommentCount).map((comment) => (
            <div key={comment.id} className="comment">    
               <strong>{comment.name}</strong> says "{comment.content}"
            </div>
    ))}

        {user &&  (
            <div className="add-comment">
                <input
                    type="text"
                    value={newComment}
                    onChange={handleCommentChange}
                    placeholder="Leave a comment..."
                />
                <button onClick={handleAddComment}>Submit</button>
            </div>
        )}
    </div>
    );    
  }

export default CommentSection;