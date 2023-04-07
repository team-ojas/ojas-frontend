import './EventCard.css'
import Popup from './EventPopup'
import { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/black-and-white.css'
import placeholderImg from './image.jpg'

export default function EventCard (props) {
  const [buttonPopup, setButtonPopup] = useState(false)

  return (

    <div className='event-card'>
      <div style={{ position: 'relative' }}>
        <LazyLoadImage
          src={props.eventImage}
          placeholderSrc={placeholderImg}
          effect='black-and-white'
          className='event-image'
          alt='Event Image'
          onClick={() => setButtonPopup(true)}
        />
        <div className='event-overlay'>
          <button className='more-btn' onClick={() => setButtonPopup(true)}><i className='fa-solid fa-plus fa-2xl' /></button>
        </div>
      </div>

      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <img className='popup-image' src={props.eventImage} alt='' />
        <div className='popup-content'>
          <p className='event-date'>{props.eventDate}</p>
          <h4 className='popup-title'>{props.eventName}</h4>
          <p className='popup-desc'>{props.eventDesc}</p>
        </div>
      </Popup>
    </div>

  )
}
