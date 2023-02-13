import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar () {
  return (
    <div>
      <nav>
        <input type='checkbox' id='check' />
        <label htmlFor='check' className='checkbtn'>
          <i className='fas fa-bars' />
        </label>
        <label className='logo'>Team OJAS</label>
        <ul>
          <li><Link className='nav-options' to='/'><i class='fa-solid fa-house' />Home</Link></li>
          <li><Link className='nav-options' to='projects'><i class='fa-solid fa-diagram-project' />Projects</Link></li>
          <li><Link className='nav-options' to='/team'><i class='fa-solid fa-people-group' />Team</Link></li>
          <li><Link className='nav-options' to='/aboutUs'><i class='fa-solid fa-circle-info' />About Us</Link></li>
          <li><Link className='nav-options' to='/events'><i class='fa-sharp fa-solid fa-calendar-days' />Events</Link></li>
        </ul>
      </nav>
    </div>
  )
}
