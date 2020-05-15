import React, { Component } from "react";
import PendingAppointment from "./PendingAppointments";
import HistoryDoctor from "./DoctorHistory";
import Pdetail from "./PatientDetails";
import Setting from "./Settings";

class Doctor extends Component {
  constructor() {
    super();
  }


  render() {
    return (
        <div className="container-fluid pt-2" style={{overflowY: 'hidden'}}>
          <div className="row">
            <div className="col-md-3">
              <PendingAppointment />
            </div>
            <div className="col-md-9">
              <div className="row h-75">
                <div className="col">
                  <h3 className="text">Prescription</h3>
                </div>
              </div>
              <div className="row h-25">
                <div className="col">
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
