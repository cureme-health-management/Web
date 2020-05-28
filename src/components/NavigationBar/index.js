import React from 'react'
import { Link } from 'react-router-dom'

export default function NavigationBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light nav-container">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav">
              <li className="nav-item1">
                <h2>LOGO</h2>
              </li>
              <li className="nav-item2">
                <Link to='/doctor'>APPOINTMENTS</Link>
              </li>
              <li className="nav-item3">
                <Link to='/history'>HISTORY</Link>
              </li>
              <li className="nav-item4">
                <Link to='/settings'>SETTING</Link>
              </li>
              <li className="nav-item5">
                <Link to="/sign-in">
                  Logout
                  </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
