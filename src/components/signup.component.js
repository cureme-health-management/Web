import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      Email: "",
      Password: ""
    };
    this.change = this.change.bind(this);
  }

  change(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-in"}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-up"}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <form>
          <div className="auth-wrapper">
            <div className="auth-inner">
              <h3>Sign Up</h3>

              <div className="form-group">
                <label>First name</label>
                <input
                  type="text"
                  name="firstName"
                  className="form-control"
                  placeholder="First name"
                  onChange={this.change}
                />
              </div>

              <div className="form-group">
                <label>Last name</label>
                <input
                  type="text"
                  name="lastName"
                  className="form-control"
                  placeholder="Last name"
                  onChange={this.change}
                />
              </div>

              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  name="Email"
                  className="form-control"
                  placeholder="Enter email"
                  onChange={this.change}
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="Password"
                  className="form-control"
                  placeholder="Enter password"
                  onChange={this.change}
                />
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                Sign Up
              </button>
              <p className="forgot-password text-right">
                Already registered <a href="/sign-in">sign in?</a>
              </p>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
