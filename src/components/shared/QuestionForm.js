import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const QuestionForm = props => (
  <Form>
    <Form.Group controlId="questionForm.ControlInput1">
      <Form.Label>Question</Form.Label>
      <Form.Control type="question" placeholder="What is the meaning of life?" />
    </Form.Group>
    <Form.Group controlId="questionForm.ControlTextarea1">
      <Form.Label>Description</Form.Label>
      <Form.Control as="textarea" rows="3" placeholder="Question as old as time." />
    </Form.Group>
    <Button type="submit">Submit</Button>
  </Form>
)

export default QuestionForm
