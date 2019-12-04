import React, { useState, useEffect } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import ListGroup from 'react-bootstrap/ListGroup'

const Posts = props => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios(`${apiUrl}/posts`)
      .then(res => setPosts(res.data.posts))
      .then(() => props.alert({ heading: 'Success',
        message: 'Happy browsing!',
        variant: 'success' }))
      .catch(console.error)
  }, [])

  const postsJsx = posts.map(post => (
    // `_id` because we're using MongoDb here
    <ListGroup.Item action variant="light" key={post._id} as={'a'} href={`#posts/${post._id}`}>
      <h3><ul>{post.question}</ul></h3>
      <ul>{post.description}</ul>
    </ListGroup.Item>
  ))

  return (
    <div>
      <ListGroup>{postsJsx}</ListGroup>
    </div>
  )
}

export default Posts
