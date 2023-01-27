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
          <li><a href='index.html'><i class='fa-solid fa-house' />Home</a></li>
          <li><a href='index.html'><i class='fa-solid fa-diagram-project' />Projects</a></li>
          <li><a href='index.html'><i class='fa-solid fa-people-group' />Team</a></li>
          <li><a href='index.html'><i class='fa-solid fa-circle-info' />About Us</a></li>
          <li><a href='index.html'><i class='fa-sharp fa-solid fa-calendar-days' />Events</a></li>
        </ul>
      </nav>
    </div>
  )
}
