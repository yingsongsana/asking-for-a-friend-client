import React from 'react'
import Comments from './Comments'
import CreateComment from './CreateComment'
import './CommentBox.scss'

const CommentBox = ({ user, comment, handleChange, handleSubmit }) => {
  return (
    <div className="comment-container">
      <div iv className="comments">
        <h2>Comments:</h2>
        <Comments />
        { user && <CreateComment user={user} />}
      </div>
    </div>
  )
}

export default CommentBox
