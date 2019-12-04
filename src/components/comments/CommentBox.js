import React, { useState } from 'react'
import CommentList from './CommentList'
import CommentForm from './CommentForm'

const CommentBox = () => {
  const [comment, setComment] = useState({ text: '' })

  return (
    <div className="container">
      <div iv className="comments">
        <h2>Comments:</h2>
        <CommentList data={comment} />
      </div>
      <div className="form">
        <CommentForm />
      </div>
    </div>
  )
}

export default CommentBox
