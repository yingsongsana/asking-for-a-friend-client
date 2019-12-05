import React, { useState, useEffect } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import './CommentBox.scss'
// import ReactMarkdown from 'react-markdown'

const Comment = props => {
  const [comment, setComment] = useState(null)
  const userId = props.user ? props.user._id : null

  useEffect(() => {
    axios(`${apiUrl}/posts/${props.match.params.id}/comments/${props.match.params.commentId}`)
      .then(res => setComment(res.data.comment))
      // Remember that users do need actual error messages not just for us
      // in the console
      .catch(console.error)
  }, [])

  const handleUpdateComment = () => {

  }

  const handleDeleteComment = () => {

  }

  return (
    <div className="singleComment">
      <div className="textContent">
        <div className="singleCommentContent">
          <p>{comment.text}</p>
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
