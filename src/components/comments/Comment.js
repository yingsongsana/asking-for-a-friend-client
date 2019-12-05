import React, { useState, useEffect } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import './Comment.scss'

const Comment = props => {
  const [comment, setComment] = useState(null)
  const userId = props.user ? props.user._id : null

  useEffect(() => {
    axios(`${apiUrl}/posts/${props.match.params.id}/comments/${props.match.params.commentId}`)
      .then(res => setComment(res.data.comment))
      .catch(() => {
        props.alert({ heading: 'Hmmm...',
          message: 'Something went wrong',
          variant: 'danger' })
      })
  }, [])

  // To be implemented
  const handleUpdateComment = () => {

  }

  const handleDeleteComment = () => {

  }

  return (
    <div className="singleComment">
      <div className="textContent">
        <div className="singleCommentContent">
          <p>{comment.owner}says{comment.text}</p>
          {/* <ReactMarkdown source={props.children} /> */}
        </div>
        <div className="singleCommentButtons">
          { comment && (userId === comment.owner) && <a onClick={handleUpdateComment}>update</a> }
          { comment && (userId === comment.owner) && <a onClick={handleDeleteComment}>delete</a> }
        </div>
      </div>
    </div>
  )
}

export default Comment
