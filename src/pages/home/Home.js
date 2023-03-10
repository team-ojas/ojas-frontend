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
        <p className='ojas-desc'>The Departmental Team Of Electrical Engineering Department, NIT Hamirpur</p>
        <div class='blockquote-wrapper'>
          <div class='blockquote'>
            <h1>
              Fueled by <span style={{ color: '#db0087' }}>Innovation</span> Driven by <span style={{ color: '#db0087' }}>Determination</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}
