import React from 'react'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const QuestionForm = ({ post, handleChange, handleSubmit, cancelPath }) => (
  <Form onSubmit={handleSubmit}>
    <Form.Group controlId="questionForm.ControlInput1">
      <Form.Label>Question</Form.Label>
      <Form.Control
        placeholder="Ex: What is the meaning of life?"
        name="question"
        value={post.question}
        onChange={handleChange}
      />
    </Form.Group>
    <Form.Group controlId="questionForm.ControlTextarea1">
      <Form.Label>Description</Form.Label>
      <Form.Control as="textarea" rows="5"
        placeholder="Ex: Question as old as time."
        name="description"
        value={post.descripton}
        onChange={handleChange}
      />
    </Form.Group>
    <Form.Group controlId="questionForm.ControlInput2">
      <Form.Label>Tag</Form.Label>
      <Form.Control
        placeholder="Ex: #life #universe"
        name="tag"
        value={post.tag}
        onChange={handleChange}
      />
    </Form.Group>
    <Button type="submit">Submit</Button>
    <Link to={cancelPath}>
      <Button variant="secondary">Cancel</Button>
    </Link>
  </Form>
)

export default QuestionForm
