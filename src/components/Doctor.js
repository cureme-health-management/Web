import React, { Component } from "react";
import PatientDetails from "./PatientDetails";
import PendingAppointment from "./PendingAppointments"

class Doctor extends Component {
  constructor() {
    super()
    this.state = {
      list: [],
    }
  }

  componentDidMount() {
    fetch('/v1.0/appointments', {
      method: "GET",
      mode: "cors",
      headers: {
        "Authorization": `Bearer ${localStorage.token}`
      }
    })
      .then(response => response.json())
      .then(response => {
        this.setState({ list: response.data });
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="container-fluid doc-container pt-0" style={{ overflowY: "hidden" }}>
        <div className="row h-100">
          <div className="col-md-3 list-section" style={{ backgroundColor: " #f4f5f7", height: "100%" }}>
            <PendingAppointment updatedList={this.state.list} />
          </div>
          <div className="col-md-9">
            <div className="row h-75">
              <div className="col">
                <h3 className="text">Prescription</h3>
              </div>
            </div>
            <div className="row h-25">
              <div className="col" style={{ backgroundColor: " #f4f5f7" }}>
                <PatientDetails />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Doctor