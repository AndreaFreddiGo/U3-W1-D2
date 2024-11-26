import { Component } from 'react'
import horror from '../data/horror.json'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class AllTheBooks extends Component {
  render() {
    return horror.map((book) => {
      return (
        <Col xs={12} md={4} lg={3} key={book.asin}>
          <Card className="h-100 border-2 border-dark p-2">
            <Card.Img variant="top" src={book.img} />
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
              <Card.Text>Price: {book.price}</Card.Text>
              <Button variant="primary">COMPRA</Button>
            </Card.Body>
          </Card>
        </Col>
      )
    })
  }
}

export default AllTheBooks
