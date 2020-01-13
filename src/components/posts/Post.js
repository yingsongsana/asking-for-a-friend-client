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
  const userId = props.user ? props.user._id : null
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

  // console.log(props)
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
  // console.log(post)
  return (
    <Fragment>
      <Card style={{ width: '80vw', margin: '20px' }}>
        <Card.Header as="h3">{post && post.question}</Card.Header>
        <Card.Body>
          <p>{post && post.description}</p>
          {post && (userId === post.owner._id) && <Link to={`/posts/${props.match.params.id}/edit-post`}><Button variant={'outline-info'} size="sm" style={{ margin: '2px' }}>Update Post</Button></Link>}
          {post && (userId === post.owner._id) && <Button onClick={handleDelete} variant={'outline-danger'} size="sm" style={{ margin: '2px' }}>Delete</Button>}
          <footer className="blockquote-footer">{post && post.owner.username}</footer>
        </Card.Body>
      </Card>
      <CommentBox user={user} />
    </Fragment>

  )
}

export default withRouter(Post)
