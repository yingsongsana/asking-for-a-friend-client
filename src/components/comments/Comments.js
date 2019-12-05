import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

const pStyle = {
  display: 'inline'
}

const Comments = props => {
  const [comments, setComments] = useState([])

  useEffect(() => {
    axios(`${apiUrl}/posts/${props.match.params.id}/comments`)
      .then(res => setComments(res.data.post.comments))
      .catch()
  }, [])

  console.log(comments)
  const commentsJsx = comments.map(comment => (
    <ul key={comment._id}>
      <p className="text-muted" style={pStyle}>{comment.owner.username} ~ </p><p style={pStyle}>{comment.text}</p>
    </ul>
  )
  )

  return (
    <div>
      {commentsJsx}
    </div>
  )
}

export default withRouter(Comments)
