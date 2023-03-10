import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar () {
  const componentDidMount = () => {
    document.querySelector('#check').checked = false
  }

  return (
    <div>
      <nav>
        <input type='checkbox' id='check' />
        <label htmlFor='check' className='checkbtn'>
          <i className='fas fa-bars' />
        </label>
        <label className='logo'><Link to='/'>OJAS</Link></label>
        <ul>
          <li><Link className='nav-options' to='/' onClick={componentDidMount}><i className='fa-solid fa-house' />Home</Link></li>
          <li><Link className='nav-options' to='projects' onClick={componentDidMount}><i className='fa-solid fa-diagram-project' />Projects</Link></li>
          <li><Link className='nav-options' to='/team' onClick={componentDidMount}><i className='fa-solid fa-people-group' />Team</Link></li>
          <li><Link className='nav-options' to='/aboutUs' onClick={componentDidMount}><i className='fa-solid fa-circle-info' />About Us</Link></li>
          <li><Link className='nav-options' to='/events' onClick={componentDidMount}><i className='fa-sharp fa-solid fa-calendar-days' />Events</Link></li>
        </ul>
      </nav>
    </div>
  )
}
