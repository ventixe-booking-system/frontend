import { Route, Routes } from 'react-router-dom'
import './App.css'
import PortalLayout from './assets/layouts/PortalLayout'
import Events from './assets/pages/Events'
import EventDetailsPage from './assets/pages/EventDetailsPage'
import BookingEvent from './assets/pages/BookingEvent'

function App() {

  return (
  <>    
      <Routes>
        <Route path="/" element={<PortalLayout />}>
          <Route index element={<Events />} />
          <Route path="/events/:id" element={<EventDetailsPage />}/>
          <Route path="/events/booking/:id" element={<BookingEvent />}/>
        </Route>
      </Routes>
  </>

  )
}

export default App
