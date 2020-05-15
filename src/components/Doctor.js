import React, { Component } from "react";
import PendingAppointment from "./PendingAppointments";
import HistoryDoctor from "./DoctorHistory";
import Pdetail from "./PatientDetails";
import Setting from "./Settings";
import { Link } from "react-router-dom";

class Doctor extends Component {
  constructor() {
    super();
    this.state = {
      show: "1"
    };
  }

  render() {
    return (
      <div className="container-fluid pt-1" style={{ overflowY: "hidden" }}>
        <div className="row">
          <div className="col-md-3" style={{ backgroundColor: " #e9e3e3" }}>
            <PendingAppointment />
          </div>
          <div className="col-md-9">
            <div className="row h-75">
              <div className="col">
                <h3 className="text">Prescription</h3>
              </div>
            </div>
            <div className="row h-25">
              <div className="col" style={{ backgroundColor: " #e9e3e3" }}>
                <Pdetail />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Doctor;
