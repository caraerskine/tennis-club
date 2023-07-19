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

  const handleAddComment = () => {
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
            setLocalComments((prevComments) => [...prevComments, data]);
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
                {comment && comment.content}
                {comment.user && comment.user?.username}
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



//line 50 used to be comments.senderId

// previois part of 49 
//(user.id === senderId || user.id === receiverId) &&

// key={comment.match_id} className="comment"
//used to be in div line 55