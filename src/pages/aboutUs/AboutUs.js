import './AboutUs.css'

export default function AboutUs() {
  return (
    <div>

      <div className='about-text'>
        <h1 className='about-us'>About Us</h1>
        <p>
          Team OJAS, the departmental team of Electrical Engineering at National Institute of Technology, Hamirpur is a club driven by the motto “Fuelled by innovation,
          driven by determination” that strives to innovate viable and smart solutions for the many problems of our lives.
          We conduct various technical as well as non-technical events throughout the year aimed at accelerating students interest
          towards electrical engineering and nurturing a learning yet enjoyable atmosphere where everyone can exhibit their ideas and
          get a chance to turn their dreams into reality. We have also won the prize in “Best Event Execution” category in NIMBUS 2021.
        </p>

      </div>

      <h2 className='cc-title'>Club Co-ordiantors of Team OJAS</h2>
      <div className='about-us-cards'>
        <div className='profile-box'>
          <div className='profile-pic' />

          <h3 className='cc-name'>Gaurav
            <div className='socials'>
              <a href='google.com' className='fa-brands fa-instagram' />
              <a href='google.com' className='fa-brands fa-linkedin' />
            </div>
          </h3>
        </div>
        <div className='profile-box'>
          <div className='profile-pic' />
          <h3 className='cc-name'>Gopanshu
            <div className='socials'>
              <a href='google.com' className='fa-brands fa-instagram' />
              <a href='google.com' className='fa-brands fa-linkedin' />
            </div>
          </h3>

        </div>

      </div>
      <div />
    </div>
  )
}