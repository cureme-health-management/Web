import React from 'react'
import { Link } from 'react-router-dom'

export default function NavigationBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light nav-container">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav">
              <li className="nav-item navbar-brand">
                <h2>LOGO</h2>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to='/doctor'>Appointments</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/history'>History</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/settings'>Settings</Link>
              </li>
              <li className="nav-item ml-5">
                <Link className="nav-link" to="/sign-in">
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
