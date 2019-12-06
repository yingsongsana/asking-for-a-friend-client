import React from 'react'
import Comments from './Comments'
import CreateComment from './CreateComment'
import './CommentBox.scss'

const CommentBox = ({ user, comment, handleChange, handleSubmit }) => {
  return (
    <div className="comment-container">
      <div className="comments">
        <h4>Comments:</h4>
        <Comments />
        { user && <CreateComment user={user} />}
      </div>
    </div>
  )
}

export default CommentBox
