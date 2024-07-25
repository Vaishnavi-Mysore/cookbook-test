import React, { useState } from 'react';

const CommentSection = ({ comments }) => {
  const [commentList, setCommentList] = useState(comments);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    const updatedComments = [...commentList, { author: "Anonymous", text: newComment }];
    setCommentList(updatedComments);
    setNewComment("");
  };

  return (
    <div>
      <h4>Comments</h4>
      <ul>
        {commentList?.map((comment, index) => (
          <li key={index}><b>{comment.author}:</b> {comment.text}</li>
        ))}
      </ul>
      <input 
        type="text" 
        value={newComment} 
        onChange={(e) => setNewComment(e.target.value)} 
        placeholder="Add a comment"
      />
      <button onClick={handleAddComment}>Add Comment</button>
    </div>
  );
};

export default CommentSection;
