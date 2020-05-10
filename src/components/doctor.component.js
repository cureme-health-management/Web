import React, { Component } from "react";
import PendingAppointment from "./pendingAppointment.component";
import HistoryDoctor from "./historyDoctor.component";
import Setting from "./setting.component";
import { Link } from "react-router-dom";

class Doctor extends Component {
  constructor() {
    super();
    this.state = {
      show: "1"
    };
  }

  toggle = () => {
    const { show } = this.state;
    this.setState({ show: "2" });
  };

  tog = () => {
    const { show } = this.state;
    this.setState({ show: "1" });
  };

  togg = () => {
    const { show } = this.state;
    this.setState({ show: "3" });
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav">
                <li className="nav-item1">
                  <h2>LOGO</h2>
                </li>
                <li className="nav-item2">
                  <label onClick={this.tog}>APPOINTMENTS</label>
                </li>
                <li className="nav-item3">
                  <label onClick={this.toggle}>HISTORY</label>
                </li>
                <li className="nav-item4">
                  <label onClick={this.toggle}>SETTING</label>
                </li>
                <li className="nav-item5">
                  <Link className="" to={"/sign-in"}>
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container">
          <div className="left">
            <PendingAppointment />
          </div>
          <div className="mb-5">
            <div className="flex-column">
              <div className="right1">
                {this.state.show === "1" ? (
                  <h1 className="text">MEDICATION</h1>
                ) : this.state.show === "2" ? (
                  <HistoryDoctor />
                ) : (
                  <Setting />
                )}
              </div>
              <div className="right2">PAtients info</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Doctor;
