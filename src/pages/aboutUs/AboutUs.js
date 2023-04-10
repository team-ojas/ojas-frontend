import './AboutUs.css'

export default function AboutUs () {
  return (
    <div>
      <div className='about-us-content'>
        <h1 style={{ paddingTop: '2rem', textAlign: 'center' }}>About Us</h1>
        <img className='team-img' src='https://i.imgur.com/vzdEUcE.jpg' alt='' />
        <p className='ojas-about'>Team OJAS is the Electrical Engineering department's club at the National Institute of Technology in Hamirpur for NIMBUS. The club's motto is "Fueled by Innovation, driven by Determination," and its members work hard to come up with innovative and feasible answers to the world's pressing issues. <br /><br />We host both technical and non-technical activities with the goals of increasing students' enthusiasm for electrical engineering and creating a welcoming space where everyone feels comfortable sharing their ideas and having a go at making them a reality. We also won "Best Event Execution" team at the NIMBUS 2021. </p>
      </div>
    </div>
  )
}
