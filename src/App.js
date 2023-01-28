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
