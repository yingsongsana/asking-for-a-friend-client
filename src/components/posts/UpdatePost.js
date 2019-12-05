import React, { useState, useEffect } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import QuestionForm from './QuestionForm'

const UpdatePost = props => {
  const [post, setPost] = useState({ question: '',
    description: '',
    tag: '' })
  const [updated, setUpdated] = useState(false)

  useEffect(() => {
    axios(`${apiUrl}/posts/${props.match.params.id}`)
      .then(res => setPost(res.data.post))
      .catch(() => {
        props.alert({ heading: 'Hmmm...',
          message: 'Something went wrong',
          variant: 'danger' })
      })
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
        console.log(res.config.data)
        props.alert({ heading: 'Success',
          message: 'You updated your question.',
          variant: 'success' })
        setUpdated(true)
      })
      .catch(() => {
        props.alert({ heading: 'Hmmm...',
          message: 'Something went wrong',
          variant: 'danger' })
      })
  }

  if (updated) {
    return <Redirect to={`/posts/${props.match.params.id}`} />
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
