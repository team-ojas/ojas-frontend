import EventCard from './EventCard'
import './Events.css'

export default function Events () {
  const events = [
    { eventName: 'RoboCarrom0', eventDesc: '1Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, nulla dolores. Fugiat magnam fuga, aspernatur debitis delectus optio minus consectetur qui aut dolore expedita rerum quibusdam rem ab iste. Aliquam', eventImage: 'https://media.istockphoto.com/id/611065352/photo/hills-and-clouds.jpg?s=612x612&w=0&k=20&c=chTA9wiQxovOYfy1AH0ejqfNBaHC5OIuGtxc2pd9LUw=' },
    { eventName: 'RoboCarrom1', eventDesc: '2Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, nulla dolores. Fugiat magnam fuga, aspernatur debitis delectus optio minus consectetur qui aut dolore expedita rerum quibusdam rem ab iste. Aliquam', eventImage: 'https://media.istockphoto.com/id/611065352/photo/hills-and-clouds.jpg?s=612x612&w=0&k=20&c=chTA9wiQxovOYfy1AH0ejqfNBaHC5OIuGtxc2pd9LUw=' },
    { eventName: 'RoboCarrom2', eventDesc: '3Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, nulla dolores. Fugiat magnam fuga, aspernatur debitis delectus optio minus consectetur qui aut dolore expedita rerum quibusdam rem ab iste. Aliquam', eventImage: 'https://media.istockphoto.com/id/611065352/photo/hills-and-clouds.jpg?s=612x612&w=0&k=20&c=chTA9wiQxovOYfy1AH0ejqfNBaHC5OIuGtxc2pd9LUw=' },
    { eventName: 'RoboCarrom3', eventDesc: '4Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, nulla dolores. Fugiat magnam fuga, aspernatur debitis delectus optio minus consectetur qui aut dolore expedita rerum quibusdam rem ab iste. Aliquam', eventImage: 'https://media.istockphoto.com/id/611065352/photo/hills-and-clouds.jpg?s=612x612&w=0&k=20&c=chTA9wiQxovOYfy1AH0ejqfNBaHC5OIuGtxc2pd9LUw=' },
    { eventName: 'RoboCarrom4', eventDesc: '5Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, nulla dolores. Fugiat magnam fuga, aspernatur debitis delectus optio minus consectetur qui aut dolore expedita rerum quibusdam rem ab iste. Aliquam', eventImage: 'https://media.istockphoto.com/id/611065352/photo/hills-and-clouds.jpg?s=612x612&w=0&k=20&c=chTA9wiQxovOYfy1AH0ejqfNBaHC5OIuGtxc2pd9LUw=' },
    { eventName: 'RoboCarrom5', eventDesc: '6Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, nulla dolores. Fugiat magnam fuga, aspernatur debitis delectus optio minus consectetur qui aut dolore expedita rerum quibusdam rem ab iste. Aliquam', eventImage: 'https://media.istockphoto.com/id/611065352/photo/hills-and-clouds.jpg?s=612x612&w=0&k=20&c=chTA9wiQxovOYfy1AH0ejqfNBaHC5OIuGtxc2pd9LUw=' }
  ]

  return (
    <div className='events-page'>
      <div className='content'>
        <h1 style={{ marginBottom: '30px' }}>Events</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam qui libero, nulla quo sequi doloribus dicta, ea similique voluptatum minus voluptates architecto beatae quam eum nam fugiat. Soluta, saepe ipsa?</p>
      </div>

      <div className='events-container'>
        {events.map((event, index) => <EventCard key={index} eventName={event.eventName} eventDesc={event.eventDesc} eventImage={event.eventImage} />)}
      </div>
    </div>
  )
}
