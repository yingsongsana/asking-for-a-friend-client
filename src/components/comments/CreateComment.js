import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import CommentForm from './CommentForm'

const CreateComment = props => {
  const [comment, setComment] = useState({ text: '' })

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
      .then(res => {
        console.log(res.data)
        console.log(props)
        props.history.push(`/posts/${props.match.params.id}`)
      })
      .catch(console.error)
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
