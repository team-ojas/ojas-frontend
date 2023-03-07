import './EventCard.css'
import Popup from './EventPopup'
import { useState } from 'react'

export default function EventCard (props) {
  const [buttonPopup, setButtonPopup] = useState(false)

  return (

    <div className='event-card'>
      <div style={{ position: 'relative' }}>
        <img className='event-image' src={props.eventImage} onClick={() => setButtonPopup(true)} alt='' />
        <div className='event-overlay'>
          <button className='more-btn' onClick={() => setButtonPopup(true)}><i className='fa-solid fa-plus fa-2xl' /></button>
        </div>
      </div>

      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <img className='popup-image' src={props.eventImage} alt='' />
        <div className='popup-content'>
          <p className='event-date'>11/01/2003</p>
          <h4 className='popup-title'>{props.eventName}</h4>
          <p className='popup-desc'>{props.eventDesc}</p>
        </div>
      </Popup>
    </div>

  )
}
