import React from 'react'
import Card from 'react-bootstrap/Card'

const homeStyle = {
  borderColor: '#17a2b8',
  margin: '30px'
}

const Home = () => (
  <Card body style={homeStyle}>
    <h3 style={{ textAlign: 'center' }}>Hi there!</h3>
    <p>Have you ever needed an answer to something but not sure who to ask? Or how to ask it? Or IF you should even bother? The internet may be an anonymouse place. But not everyone looks out for your well-being. Unfortunately, people can be unkind.</p>

    <p>This is a safe space where you can ask those questions about life, relationships, etiquette, and everything in between! We hope this community can offer up sound advice to those who need it. Please remember to use thoughtful words and be kind to each other.</p>
    <footer>Feel free to browse on here, but you do need to make an account to ask questions or make any comments. Take Care.</footer>
  </Card>
)

export default Home
