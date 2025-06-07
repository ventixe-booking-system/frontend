import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import EventDetailsCard from '../components/EventDetailsCard'
import PackageItem from '../components/PackageItem'


const EventDetailsPage = () => {
    const {id} = useParams()

        const [event, setEvent] = useState({ packages: [] })
    
        const getEvents = async () => {
            const res = await fetch(`https://ventixe-hvddgje2fmbjakgk.swedencentral-01.azurewebsites.net/api/events/${id}`)
    
            if (res.ok){
                const response = await res.json()
                setEvent(response.result)
            }
        }
    
        useEffect(() => {
            getEvents()
        }, [])

    return (
        <div className="event-details-page">
            <div>
                <EventDetailsCard key={event.id} event={event}/>
                <Link to={`/events/booking/${id}`} state={{ event }}>Book Event</Link>
            </div>
            <div className="packages-list">
                <span className="package-list-title">Packages</span>
                {event.packages
                ?.slice()
                .sort((a, b) => (a.price ?? 0) - (b.price ?? 0))
                .map(pkg => (<PackageItem key={pkg.id} pkg={pkg} />)) }
            </div>

        </div>
    )
}

export default EventDetailsPage