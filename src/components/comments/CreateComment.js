import React, { useState, useEffect } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import CommentForm from './CommentForm'

const CreateComment = props => {
  const [comment, setComment] = useState({ text: '' })
  const [created, setCreated] = useState(false)

  useEffect(() => {
    axios(`${apiUrl}/posts/${props.match.params.id}/comments`)
      .then(res => {
        setComment(res.data.post.comments)
      })
      .catch(() => {
        props.alert({ heading: 'Hmmm...',
          message: 'Something went wrong',
          variant: 'danger' })
      })
  }, [])

  const handleChange = event => {
    event.persist()
    setComment({ ...comment, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/posts/${props.match.params.id}/comments`,
      method: 'POST',
      headers: {
        // For Express backend
        'Authorization': `Bearer ${props.user.token}`
        // But for Rails backend instead of `Bearer ${props.user.token}`,
        // use `Token token=${props.user.token}`
      },
      data: { comment }
    })
      .then(() => setCreated(true))
      .catch(console.error)
  }

  if (created) {
    return <Redirect to={`/posts/${props.match.params.id}`} />
  }

  return (
    <div className="form">
      <CommentForm
        comment={comment}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  )
}

export default withRouter(CreateComment)
