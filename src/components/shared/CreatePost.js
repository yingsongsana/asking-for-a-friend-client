import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import QuestionForm from './QuestionForm'

const CreatePost = props => {
  const [post, setPost] = useState({ question: '',
    description: '',
    tag: ''
  })

  const handleChange = event => {
    event.persist()
    setPost({ ...post, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/posts`,
      method: 'POST',
      headers: {
        // For Express backend
        'Authorization': `Bearer ${props.user.token}`
        // But for Rails backend instead of `Bearer ${props.user.token}`,
        // use `Token token=${props.user.token}`
      },
      data: { post }
    })
      .then(res => {
        props.alert({ heading: 'Success',
          message: 'You created a post!',
          variant: 'success' })
        props.history.push(`/posts/${res.data.post._id}`)
      })
      .catch(console.error)
  }

  return (
    <QuestionForm
      post={post}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      cancelPath='/'
    />
  )
}

export default withRouter(CreatePost)
