import { Container } from 'react-bootstrap'
import {Routes, Route} from 'react-router-dom'
import About from './pages/About/About'
import Home from './pages/Home/Home'
import Store from './pages/Store/Store'

function App() { 
  return (
    <Container>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Store />} />
      <Route path="/about" element={<About />} />
      </Routes>
    </Container>
  )
}

export default App
