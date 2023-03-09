import './App.css'
import Navbar from './components/Navbar'
import Projects from './pages/projects/Projects'
import Home from './pages/home/Home'
import Events from './pages/events/Events'
import Team from './pages/team/Team'
import AboutUs from './pages/aboutUs/AboutUs'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

function App () {
  return (
    <div className='app-class'>
      <div className='animation-container'>
        <div className='bubbles'>
          <span style={{ '--i': '11' }} />
          <span style={{ '--i': '12' }} />
          <span style={{ '--i': '24' }} />
          <span style={{ '--i': '10' }} />
          <span style={{ '--i': '14' }} />
          <span style={{ '--i': '23' }} />
          <span style={{ '--i': '18' }} />
          <span style={{ '--i': '16' }} />
          <span style={{ '--i': '19' }} />
          <span style={{ '--i': '20' }} />
          <span style={{ '--i': '22' }} />
          <span style={{ '--i': '25' }} />
          <span style={{ '--i': '18' }} />
          <span style={{ '--i': '21' }} />
          <span style={{ '--i': '11' }} />
          {/* <span style={{ '--i': '12' }}></span>
        <span style={{ '--i': '18' }}></span>
        <span style={{ '--i': '15' }}></span>
        <span style={{ '--i': '11' }}></span>
        <span style={{ '--i': '12' }}></span>
        <span style={{ '--i': '24' }}></span>
        <span style={{ '--i': '10' }}></span>
        <span style={{ '--i': '14' }}></span>
        <span style={{ '--i': '23' }}></span>
        <span style={{ '--i': '18' }}></span>
        <span style={{ '--i': '16' }}></span>
        <span style={{ '--i': '19' }}></span>
        <span style={{ '--i': '20' }}></span>
        <span style={{ '--i': '22' }}></span>
        <span style={{ '--i': '25' }}></span>
        <span style={{ '--i': '18' }}></span>
        <span style={{ '--i': '21' }}></span>
        <span style={{ '--i': '11' }}></span>
        <span style={{ '--i': '12' }}></span>
        <span style={{ '--i': '18' }}></span>
        <span style={{ '--i': '15' }}></span> */}
        </div>
      </div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/projects' element={<Projects />} />
          <Route exact path='/events' element={<Events />} />
          <Route exact path='/team' element={<Team />} />
          <Route exact path='/aboutUs' element={<AboutUs />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
