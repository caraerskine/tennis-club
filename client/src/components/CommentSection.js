import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../context/user';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from "@mui/material/Typography";


function CommentSection({ matchId, comments }) {
    const { user } = useContext(UserContext);
    const [localComments, setLocalComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    // useEffect(() => {
    //    const id = matchId
    //     fetch(`/matches/${id}/comments`)
    //     .then((response) => {
    //         if (!response.ok) {
    //         throw new Error("Network response was not ok");
    //         }
    //         return response.json();
    //     })
    //     .then((data) => {
    //         console.log("data", data)
    //         setLocalComments(data.comments.slice(-maxCommentCount));           
    //     })
    //     .catch((error) => console.error('Error fetching comments:', error));
    // }, [matchId]);

   
  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
    // console.log('handleAddcomment')
  };

//to max out the comments so the card does not look funny
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

    //   console.log('new comment data', newCommentData);
    //   console.log("matchId is:", matchId)

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
            // console.log('API Response:', data); 
            const updatedComments = [...localComments, data].slice(-maxCommentCount);
            setLocalComments(updatedComments);           
            alert ("comment added!");
            setNewComment('');
            // console.log('New Comment:', data); 
        })
        .catch((error) => console.error('Error adding comment:', error));
        setLocalComments([]); 
  }

//   console.log('Props - matchId:', matchId);
//   console.log('Props - comments:', comments);
//   console.log('Local Comments:', localComments);
//   console.log('User:', user);

  return (

    <div className="comment-section">
            {Array.isArray(localComments) && 
                localComments.map((comment) => (
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