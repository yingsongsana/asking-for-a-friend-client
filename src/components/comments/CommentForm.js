import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const commentFormStyle = {
  display: 'flex'
}

const CommentForm = ({ comment, handleChange, handleSubmit }) => (
  <Form style={commentFormStyle} className="form" onSubmit={handleSubmit}>
    <Form.Control
      name="text"
      value={comment.text}
      onChange={handleChange}
    />
    <Button variant="outline-secondary" type="submit">Comment</Button>
  </Form>
)

export default CommentForm
