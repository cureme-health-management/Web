import React from "react"
import { Link } from "react-router-dom"
import { API_VERSION } from "../mock/routes"

export default function Login({ history }) {
  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch(`${API_VERSION}/auth`, {
      method: "POST",
      headers: {},
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          localStorage.setItem("token", data.token)
          data.token && history.push("/doctor")
        }
      })
      .catch((err) => console.log(err))
  }

  return (
    <div
      className="container-fluid full-width-container bg"
      style={{ paddingTop: "10px" }}
    >
      <form onSubmit={handleSubmit}>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <h3>Sign In</h3>
            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                name="Email"
                className="form-control"
                placeholder="email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="Password"
                className="form-control"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Submit
            </button>
            <p className="forgot-password text-right">
              Forgot <a href="#">password?</a>
              <p className="forgot-password text-right">
                <Link to="sign-up">sign up</Link>
              </p>
            </p>
          </div>
        </div>
      </form>
    </div>
  )
}
