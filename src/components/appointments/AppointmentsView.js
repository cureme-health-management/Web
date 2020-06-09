import React, { Component } from "react"
import CurrentAppointmentDetailsView from "./CurrentAppointmentDetailsView"
import AppointmentsListView from "./AppointmentsListView"
import PrescriptionView from './prescription/PrescriptionView'
export default class AppointmentsView extends Component {
  constructor() {
    super()
    this.state = {
      list: [],
      currentAppointment: {}
    }

    this.selectAppointment = (appt) => this.setState({ currentAppointment: appt })
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
        this.setState({ list: response.data, currentAppointment: response.data[0] });
      })
      .catch(err => console.log(err))
  }


  render() {
    return (
      <div className="container-fluid full-width-container" style={{ overflowY: "hidden" }}>
        <div className="row h-100">
          <div className="col-md-3 list-section" style={{ backgroundColor: " #f4f5f7", height: "100%" }}>
            <AppointmentsListView
              updatedList={this.state.list}
              select={this.selectAppointment}
              current={this.state.currentAppointment.id}
            />
          </div>
          <div className="col-md-9">
          <div className="row" style={{height:"75vh"}}>
              <div className="col">
              <PrescriptionView />
              </div>
            </div>
            <div className="row h-25">
              <div className="col" style={{ backgroundColor: " #f4f5f7" }}>
                <CurrentAppointmentDetailsView
                  current={this.state.currentAppointment} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}