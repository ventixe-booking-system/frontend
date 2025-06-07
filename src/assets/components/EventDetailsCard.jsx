import React from 'react'
import { MapPin, CalendarBlank } from 'phosphor-react'

const EventDetailsCard = ({event}) => {
  return (
    <div className="details-card-container">
        <div className="event-details-card">

            <div className="event-details-image">
                <img src="" alt="" />
            </div>

            <div className="event-details-info">
                <h4>{event.title}</h4>
                <div className="event-details-date">
                    <CalendarBlank size={14}/>
                    <span>{event.eventDate}</span>
                </div>
                <div className="event-details-location">
                    <MapPin size={14}/>
                    <span>{event.location}</span>               
                </div>
            </div>
        </div>

        <div className="or-line"></div>

        <div className="details-card-footer">
            <span>About Event</span>
            <p>{event.description}</p>
        </div>
    </div>
  )
}

export default EventDetailsCard