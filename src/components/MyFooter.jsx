import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'

const MyFooter = () => {
  return (
    <div collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Row className="d-flex">
          <Navbar.Brand href="#home">EpiBooks</Navbar.Brand>
          <Nav.Link href="#features">Contacts</Nav.Link>
          <Nav.Link href="#pricing">About Us</Nav.Link>
        </Row>
      </Container>
    </div>
  )
}

export default MyFooter
