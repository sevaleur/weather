import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  return (
    <nav>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/weather">Weather</NavLink></li>
            <li><NavLink to="/weather2">WeatherDAWA</NavLink></li>
            <li><NavLink to="/weather3">WeatherDAWAMap</NavLink></li>
        </ul>
    </nav>
  )
}

export default Navbar