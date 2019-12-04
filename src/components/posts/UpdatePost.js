import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import QuestionForm from './QuestionForm'

const UpdatePost = props => {
  const [post, setPost] = useState({ question: '',
    description: '',
    tag: '' })

  useEffect(() => {
    axios(`${apiUrl}/posts/${props.match.params.id}`)
      .then(res => setPost(res.data.post))
      .catch(console.error)
  }, [])

  const handleChange = event => {
    event.persist()

    setPost(post => ({ ...post, [event.target.name]: event.target.value }))
  }

  const handleSubmit = () => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/posts/${props.match.params.id}`,
      method: 'PATCH',
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
          message: 'You updated your question.',
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
      cancelPath={`/posts/${props.match.params.id}`}
    />
  )
}

export default withRouter(UpdatePost)
