import './EventCard.css'

export default function EventCard (props) {
  return (
    <div className='event-card'>
      <img className='event-image' src={props.eventImage} alt='' />
      <h3 className='event-heading'>{props.eventName}</h3>
      <p className='event-desc'>{props.eventDesc}</p>
    </div>
  )
}
