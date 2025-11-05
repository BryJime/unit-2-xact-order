
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Shortcuts from './components/Shortcuts'
import About from './components/About'
import Header from './components/Header'
import ExamsDisplay from './components/ExamsDisplay'


function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shortcuts.jsx" element={<Shortcuts />} />
          <Route path="/About.jsx" element={<About />} />
          <Route path="/ExamsDisplay.jsx" element={<ExamsDisplay />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
