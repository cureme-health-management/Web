import React, { Component } from "react";
import PendingAppointment from "./PendingAppointments";
import Pdetail from "./PatientDetails";

class Doctor extends Component {
  constructor() {
    super();
  }
  

  render() {
    return (
      <div className="container-fluid doc-container pt-0" style={{ overflowY: "hidden" }}>
        <div className="row h-100">
          <div className="col-md-3 list-section" style={{ backgroundColor: " #f4f5f7", height: "100%" }}>
            <PendingAppointment />
          </div>
          <div className="col-md-9">
            <div className="row h-75">
              <div className="col">
                <h3 className="text">Prescription</h3>
              </div>
            </div>
            <div className="row h-25">
              <div className="col" style={{ backgroundColor: " #f4f5f7" }}>
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
