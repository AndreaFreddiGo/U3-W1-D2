import logo from './logo.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome'

function App() {
  return (
    <div className="App">
      <MyNav />
      <header className="App-header">
        <Welcome />
      </header>
      <MyFooter />
    </div>
  )
}

export default App
