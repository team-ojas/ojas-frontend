import './AboutUs.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/black-and-white.css'
import placeholderImg from '../../components/image.jpg'

export default function AboutUs () {
  return (
    <div>
      <div className='about-us-content'>
        <h1 style={{ paddingTop: '2rem', textAlign: 'center' }}>About Us</h1>
        <LazyLoadImage
          src='https://i.imgur.com/vzdEUcE.jpg'
          placeholderSrc={placeholderImg}
          effect='black-and-white'
          className='team-img'
          alt='Ojas-team'
        />
        <p className='ojas-about'>Team OJAS is the Electrical Engineering department's club at the National Institute of Technology in Hamirpur. The club's motto is "Fueled by creativity, driven by determination," and its members work hard to come up with innovative and feasible answers to the world's pressing issues. We host both technical and non-technical activities all year round with the goals of increasing students' enthusiasm for electrical engineering and creating a welcoming space where everyone feels comfortable sharing their ideas and having a go at making them a reality. We also took home the top honour for "Best Event Execution" at the NIMBUS 2021 conference. </p>
      </div>
    </div>
  )
}
