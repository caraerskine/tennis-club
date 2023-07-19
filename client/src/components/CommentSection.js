import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../context/user';


function CommentSection({ matchId, comments }) {
    const { user } = useContext(UserContext);
    const [localComments, setLocalComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    useEffect(() => {
       const id = matchId
        fetch(`/matches/${id}/comments`)
        .then((response) => {
            if (!response.ok) {
            throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            console.log("data", data)
            setLocalComments(data.comments.slice(-maxCommentCount));           
        })
        .catch((error) => console.error('Error fetching comments:', error));
    }, [matchId]);

   
  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
    // console.log('handleAddcomment')
  };

  const maxCommentCount = 6;

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

//I don't understand what this is for 




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