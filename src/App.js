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
// import { useState, useEffect, useRef } from 'react'
// import BIRDS from 'vanta/dist/vanta.birds.min'
// import * as THREE from 'three'

function App () {
  // const [vantaEffect, setVantaEffect] = useState(0)
  // const vantaRef = useRef(null)

  // useEffect(() => {
  //   if (!vantaEffect) {
  //     setVantaEffect(
  //       BIRDS({
  //         el: vantaRef.current,
  //         THREE,
  //         mouseControls: true,
  //         touchControls: true,
  //         gyroControls: false,
  //         color1: 0xa259ff,
  //         color2: 0xff0000,
  //         minHeight: 500.0,
  //         minWidth: 600.0,
  //         scale: 1.0,
  //         backgroundColor: 0x242424,
  //         scaleMobile: 1.0,
  //         alignment: 37.00,
  //         cohesion: 85.00,
  //         quantity: 3.50,
  //         birdSize: 0.90,
  //         wingSpan: 16.00
  //       })
  //     )
  //   }
  //   return () => {
  //     if (vantaEffect) vantaEffect.destroy()
  //   }
  // }, [vantaEffect])

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
