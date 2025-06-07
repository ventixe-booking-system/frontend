import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin } from 'phosphor-react'

const EventItem = ({item}) => {
  return (
    <Link className="event-card-container" to={`/events/${item.id}`}>    
        <div className='event-card'>
            <div className="event-card-image">
                <img src="" alt="" />
            </div>
            <div className='event-card-details'>
                <span className="event-card-date">{item.eventDate}</span>
                <span className="event-card-title">{item.title}</span>
                <div className="event-card-location">
                    <MapPin size={14}/>
                    <span>{item.location}</span>                    
                </div>

            </div>
            
        </div>
    </Link>
  )
}

export default EventItem