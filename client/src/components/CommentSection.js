import React, { useState, useContext } from 'react';
import { UserContext } from '../context/user';


function CommentSection({ matchId, comments }) {
    const { user } = useContext(UserContext);
    const [localComments, setLocalComments] = useState([]);
    const [newComment, setNewComment] = useState('');

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
    console.log('handleAddcomment')
  };

  const maxCommentCount = 6;

  const handleAddComment = (e) => {
    e.preventDefault();
    const newCommentData = {
        content: newComment,
        match_id: matchId,
        user_id: user.id, 
      };

      console.log('new comment data', newCommentData);
      console.log("matchId is:", matchId)

    

    fetch(`/matches/${matchId}/comments`, {
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
            const updatedComments = [...localComments, { ...data, user: user }].slice(-maxCommentCount);
            setLocalComments((prevComments) => [...prevComments, { ...data, user: user }]); 
            setLocalComments(updatedComments);           
            alert ("comment added!");
            setNewComment('');
            console.log('New Comment:', data); 
      })
        .catch((error) => console.error('Error adding comment:', error));
        setLocalComments([]); 
  };



  console.log('Props - matchId:', matchId);
  console.log('Props - comments:', comments);
  console.log('Local Comments:', localComments);
  console.log('User:', user);

  return (

    <div className="comment-section">
            {Array.isArray(localComments) && 
                localComments.map((comment) => (
            <div key={comment.match_id} className="comment">    
               <strong>{comment.user && comment.user?.username}</strong> says "{comment && comment.content}"
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