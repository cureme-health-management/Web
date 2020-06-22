import React from 'react'
import { Link, Redirect } from 'react-router-dom'

export default function NavigationBar() {
  return (
    <div>
      {!localStorage.token && <Redirect from="*" to="/login"/>}
      <nav className="navbar navbar-expand-lg navbar-light bg-light nav-container">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav">
              <li className="nav-item navbar-brand">
                <Link to='/'>
                  <h5>LOGO</h5>
                </Link>
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
                <Link className="nav-link" to="/login">
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
