import React, { Fragment, useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CommentBox from '../comments/CommentBox'

const Post = props => {
  const [post, setPost] = useState(null)
  const user = props.user
  const userId = user ? user._id : null
  // console.log(userId)

  useEffect(() => {
    axios(`${apiUrl}/posts/${props.match.params.id}`)
      .then(res => setPost(res.data.post))
      .catch(() => {
        props.alert({ heading: 'Hmmm...',
          message: 'Something went wrong.',
          variant: 'danger' })
      })
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
        props.alert({ heading: 'Hmmm...',
          message: 'Something went wrong',
          variant: 'danger' })
      })
  }

  return (
    <Fragment>
      <Card style={{ width: '80vw', margin: '20px' }}>
        <Card.Header as="h3">{post && post.question}</Card.Header>
        <Card.Body>
          <p>{post && post.description}</p>
          {post && (userId === post.owner) && <Link to={`/posts/${props.match.params.id}/edit-post`}><Button variant={'info'}>Update Post</Button></Link>}
          {post && (userId === post.owner) && <Button onClick={handleDelete} variant={'danger'}>Delete</Button>}
          <footer className="blockquote-footer">{post && post.owner.username}</footer>
        </Card.Body>
      </Card>
      <CommentBox user={user} />
    </Fragment>

  )
}

export default withRouter(Post)
