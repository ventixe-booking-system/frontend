import { Route, Routes } from 'react-router-dom'
import './App.css'
import PortalLayout from './assets/layouts/PortalLayout'
import Events from './assets/pages/Events'

function App() {

  return (
  <>    
      <Routes>
        <Route path="/" element={<PortalLayout />}>
          <Route index element={<Events />} />
        </Route>
      </Routes>
  </>

  )
}

export default App
