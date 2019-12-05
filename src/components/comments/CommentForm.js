import React from 'react'
import Form from 'react-bootstrap/Form'

const CommentForm = ({ comment, handleChange, handleSubmit }) => (
  <Form onSubmit={handleSubmit}>
    <input
      name="text"
      value={comment.text}
      onChange={handleChange}
    />
    <button type="submit">Submit</button>
  </Form>
)

export default CommentForm
