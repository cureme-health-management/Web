import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
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
              <h3>Sign In</h3>
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
              <div className="form-group">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customCheck1"
                  >
                    Remember me
                  </label>
                </div>
              </div>
              {this.state.Email === "harshal@gmail.com" &&
              this.state.Password === "gore" ? (
                <Link to={"/doctor"}>
                  <button type="submit" className="btn btn-primary btn-block">
                    Submit
                  </button>
                </Link>
              ) : (
                <button type="submit" className="btn btn-primary btn-block">
                  Submit
                </button>
              )}
              <p className="forgot-password text-right">
                Forgot <a href="#">password?</a>
              </p>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
