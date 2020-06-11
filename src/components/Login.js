import React, { Component } from "react";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      Email: "",
      Password: ""
    };
    this.change = this.change.bind(this);

    this.handleSubmit = (e) => {
      e.preventDefault()
      let body = {
        auth: "bearer",
        userid: this.state.Email,
        password: this.state.Password
      }

      let formBody = []
      for (const property in body) {
        const encodedKey = encodeURIComponent(property)
        const encodedValue = encodeURIComponent(body[property])
        formBody.push(`${encodedKey}=${encodedValue}`)
      }
      formBody = formBody.join('&')
      fetch('/',{
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: formBody
      }).then(res=> res.json()).then(data=> {
        localStorage.setItem('token', data.token)
        this.props.history.push('/doctor')
      }).catch(err=> console.log(err))
    }
  }

  change(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="container-fluid full-width-container bg">
        <form onSubmit={this.handleSubmit}>
          <div className="auth-wrapper">
            <div className="auth-inner">
              <h3>Sign In</h3>
              <div className="form-group">
                <label>Email address</label>
                <input
                  type="text"
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
                <button type="submit" className="btn btn-primary btn-block">
                  Submit
                </button>
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
