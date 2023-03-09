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
import { useState, useEffect, useRef } from 'react'
import BIRDS from 'vanta/dist/vanta.birds.min'
import * as THREE from 'three'

function App () {
  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: '#app-class',
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          backgroundColor: '#242424',
          color1: '#a259ff',
          color2: '#df00ff',
          wingSpan: 21.00,
          separation: 63.00,
          alignment: 65.00,
          cohesion: 72.00,
          quantity: 3.00
        })
      )
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <div>
      <Router>
        <div ref={myRef} className='app-class' id='app-class'>
          <div className='nav-div'>
            <Navbar />
          </div>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/projects' element={<Projects />} />
            <Route exact path='/events' element={<Events />} />
            <Route exact path='/team' element={<Team />} />
            <Route exact path='/aboutUs' element={<AboutUs />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
