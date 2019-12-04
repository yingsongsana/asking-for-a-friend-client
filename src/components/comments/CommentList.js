import React, { useState } from 'react'
import Comment from './Comment'

const CommentList = props => {
  const [comments, setComments] = useState(null)
  const commentJsx = comments.map(comment => (
    <Comment key={comment._id} owner={comment.owner} id={comment._id}>
      { comment.text }
    </Comment>
  )
  )

  return (
    <div>
      { commentJsx }
    </div>
  )
}

export default CommentList
