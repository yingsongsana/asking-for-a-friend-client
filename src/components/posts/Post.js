import React, { Fragment, useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import Button from 'react-bootstrap/Button'

const Post = props => {
  const [post, setPost] = useState(null)
  const userId = props.user ? props.user._id : null
  // console.log(userId)

  useEffect(() => {
    axios(`${apiUrl}/posts/${props.match.params.id}`)
      .then(res => setPost(res.data.post))
      .then(() => props.alert({ heading: 'Success',
        message: 'Here\' a big question',
        variant: 'success' }))
      // Remember that users do need actual error messages not just for us
      // in the console
      .catch(console.error)
  }, [])

  const handleDelete = event => {
    axios({
      url: `${apiUrl}/posts/${props.match.params.id}`,
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${props.user.token}`
      }
    })
      .then(() => {
        props.alert({ heading: 'Success',
          message: 'You deleted your question',
          variant: 'warning' })
        props.history.push('/posts')
      })
      .catch(() => {
        props.alert({ heading: 'ATTN',
          message: 'Something went wrong',
          variant: 'danger' })
      })
  }

  return (
    <Fragment>
      <h3>{post && post.question}</h3>
      <p>{post && post.description}</p>
      {post && (userId === post.owner) && <Link to={`/posts/${props.match.params.id}/edit-post`}><Button variant={'info'}>Update Post</Button></Link>}
      {post && (userId === post.owner) && <Button onClick={handleDelete} variant={'danger'}>Delete</Button>}
    </Fragment>
  )
}

export default withRouter(Post)
