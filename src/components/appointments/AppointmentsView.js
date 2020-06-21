import React, { Component } from "react"
import CurrentAppointmentDetailsView from "./CurrentAppointmentDetailsView"
import AppointmentsListView from "./AppointmentsListView"
import PrescriptionView from './prescription/PrescriptionView'
import styled from 'styled-components'

const NoAppointmentsContainer = styled.div`
  max-height: calc(100vh - 100px);
  text-align: center;
  margin-top: calc(50vh - 100px);
`

export default class AppointmentsView extends Component {
  constructor() {
    super()
    this.state = {
      list: [],
      currentAppointment: {}
    }

    this.selectAppointment = (appt) => {
      const prescriptionInLocalStorage = JSON.parse(localStorage.getItem('current'))
      if (prescriptionInLocalStorage && prescriptionInLocalStorage.length !== 0) {
        //TODO * show a modal saying "There are unsaved changes"
      }
      this.setState({ currentAppointment: appt }, () => localStorage.removeItem('current'))
    }
  }

  componentDidMount() {
    this.setState({ loading: true })
    fetch('/v1.0/appointments', {
      method: "GET",
      mode: "cors",
      headers: {
        "Authorization": `Bearer ${localStorage.token}`
      }
    })
      .then(response => response.json())
      .then(response => {
        this.setState({ list: response.data, currentAppointment: response.data[0], loading: false });
      })
      .catch(err => {
        this.setState({ loading: false })
        console.log(err)
      })
  }


  render() {
    return this.state.loading ? <div>Loading...</div>
      :
      this.state.list.length > 0 ?
        (
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
                <div className="row" style={{ height: "75vh" }}>
                  <div className="col">
                    <PrescriptionView id={this.state.currentAppointment.id} />
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
        )
        :
        <NoAppointmentsContainer className="container">
          <h5>No appointments today <span role="img" aria-label="emoji">😅</span></h5>
        </NoAppointmentsContainer>
  }
}