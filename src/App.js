import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome'
import AllTheBooks from './components/AllTheBooks'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

function App() {
  return (
    <div className="App">
      <MyNav />
      <header className="App-header">
        <Welcome />
      </header>
      <main>
        <Container>
          <Row className="g-3">
            <AllTheBooks />
          </Row>
        </Container>
      </main>

      <MyFooter />
    </div>
  )
}

export default App
