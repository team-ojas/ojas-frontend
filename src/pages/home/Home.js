import './Home.css'

export default function Home () {
  return (
    <div className='home-container'>
      <div className='home-content'>
        <h1 className='ojas-title'>
          <span style={{ '--i': '1' }}>T</span>
          <span style={{ '--i': '2' }}>e</span>
          <span style={{ '--i': '3' }}>a</span>
          <span style={{ '--i': '4' }}>m</span>
          <span style={{ marginLeft: '10px', '--i': '5' }}>O</span>
          <span style={{ '--i': '6' }}>J</span>
          <span style={{ '--i': '7' }}>A</span>
          <span style={{ '--i': '8' }}>S</span>
        </h1>
        <p className='ojas-desc'>The Departmental Team Of Electrical Engineering</p>
        <div className='blockquote-wrapper'>
          <div className='blockquote'>
            <h1>
              Fueled by <span style={{ color: '#db0087' }}>Innovation</span> Driven by <span style={{ color: '#db0087' }}>Determination</span>
            </h1>
          </div>
        </div>
        <a className='ojas-socials' href='https://www.instagram.com/team_ojas_nith/?hl=en'><i className='fa-brands fa-instagram fa-2xl' /></a>
        <a className='ojas-socials' href='https://www.linkedin.com/company/ojasnith/mycompany/'><i className='fa-brands fa-linkedin fa-2xl' /></a>
        <a className='ojas-socials' href='https://github.com/team-ojas'><i className='fa-brands fa-github fa-2xl' /></a>
      </div>
    </div>
  )
}
