import React from 'react'
import { NavLink } from 'react-router-dom'
import dashboardIcon from '../images/icons/dashboard-icon.svg'
import navLogo from '../images/layout/Logo.svg'
import { Ticket } from 'phosphor-react'

const Nav = () => {
  return (
    <nav>
      <img className="nav-logo" src={navLogo} alt="Website Logo" />

      <NavLink className="nav-link" to="/">
        <Ticket className="nav-icon" size={24}/>
        <p>Events</p>
      </NavLink>
    </nav>
  )
}

export default Nav