import React from 'react'
import './EventPopup.css'

export default function EventPopup (props) {
  return (props.trigger)
    ? (
      <div className='popup'>
        <div className='popup-inner'>
          <button className='close-btn' onClick={() => props.setTrigger(false)}><i className='fa-solid fa-xmark fa-xl' /></button>
          {props.children}
        </div>
      </div>
      )
    : ''
}
