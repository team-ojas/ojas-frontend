import EventCard from '../../components/EventCard'
import './Events.css'

export default function Events () {
  const events = [
    {
      eventName: 'WIRED UP',
      eventDesc: 'The name itself suggests that this fascinating game is all set in the vicinity of integrated circuits. This electrifying game will help you unravel the many secrets and have fun with circuits.',
      eventImage: 'https://i.imgur.com/BSLmZ4R.jpeg',
      eventDate: 'TBA'
    },
    {
      eventName: 'Guest Lecture',
      eventDesc: 'Chandan Jha sir is an Ex.ISRO Scientist, senior consultant of GATE/ESE at Physics Wallah, qualified GATE 6 times with AIR 23, & 26.',
      eventImage: 'https://i.imgur.com/H1W9C29.png',
      eventDate: '24/03/2023'
    },
    {
      eventName: 'Robo Carrom',
      eventDesc: ' Robo Carrom is an event wherein the two teams will compete with each other, having two bot cars each. Students will get exposure to using Arduino as the main controller. The winning team will be awarded prize money.',
      eventImage: 'https://i.imgur.com/WAZC5Pg.jpg',
      eventDate: 'TBA'
    },
    {
      eventName: 'Crime Time: True Detective',
      eventDesc: ' A situation-based event about a crime or an accident involving the use of all technical and general knowledge of students to solve it It will be in two stages. The winning team will receive prize money.',
      eventDate: '24/03/2023',
      eventImage: 'https://i.imgur.com/QdMjKfU.png'
    },
    {
      eventName: 'Design Detective',
      eventDesc: ' Unveiling of the new logo of team Ojas was inaugurated by the event. Each team participating in treasure hunt was given a puzzle through a QR code,the quickest team was declared winner.Details of the event: Maximum students per team: 3 Total students participating: 93 ,Prize: A Netflix subscription',
      eventImage: 'https://i.imgur.com/tAi8KTH.png',
      eventDate: '4/02/2003'
    }
  ]

  return (
    <div className='events-page'>
      <div className='content'>
        <h1 style={{ marginBottom: '30px' }}>Events</h1>
        <p>Keeping the enthusiasm of everyone high, we bring forth a plethora of fun filled events that push our imagination to a whole new level.</p>
      </div>

      <div className='events-container'>
        {events.map((event, index) => <EventCard key={index} eventName={event.eventName} eventDesc={event.eventDesc} eventImage={event.eventImage} eventDate={event.eventDate} />)}
      </div>
    </div>
  )
}
