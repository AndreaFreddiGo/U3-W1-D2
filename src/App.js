import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

function App() {
  return (
    <body>
      <header>
        <MyNav />
        <Welcome />
      </header>
      <main className="bg-dark p-3">
        <Container>
          <Row className="g-3"></Row>
        </Container>
      </main>
      <footer>
        <MyFooter />
      </footer>
    </body>
  )
}

export default App
