import React, { Component } from "react"
import CurrentAppointmentDetailsView from "./CurrentAppointmentDetailsView"
import AppointmentsListView from "./AppointmentsListView"
import PrescriptionView from "./prescription/PrescriptionView"
import styled from "styled-components"
import { AppointmentConsumer } from "../../providers/AppointmentProvider"

const NoAppointmentsContainer = styled.div`
    max-height: calc(100vh - 100px);
    text-align: center;
    margin-top: calc(50vh - 100px);
`

export default class AppointmentsView extends Component {
    render() {
        return (
            <AppointmentConsumer>
                {({ data }) =>
                    data.loading ? (
                        <div>Loading...</div>
                    ) : data.list.length > 0 ? (
                        <div
                            className="container-fluid full-width-container"
                            style={{ overflowY: "hidden" }}
                        >
                            <div className="row h-100">
                                <div
                                    className="col-md-3 list-section"
                                    style={{
                                        backgroundColor: " #f4f5f7",
                                        height: "100%",
                                    }}
                                >
                                    <AppointmentsListView
                                        updatedList={data.list}
                                        current={data.currentAppointment.id}
                                    />
                                </div>
                                <div className="col-md-9">
                                    <div
                                        className="row"
                                        style={{ height: "75vh" }}
                                    >
                                        <div className="col">
                                            <PrescriptionView
                                                id={data.currentAppointment.id}
                                            />
                                        </div>
                                    </div>
                                    <div className="row h-25">
                                        <div
                                            className="col"
                                            style={{
                                                backgroundColor: " #f4f5f7",
                                            }}
                                        >
                                            <CurrentAppointmentDetailsView
                                                current={
                                                    data.currentAppointment
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <NoAppointmentsContainer className="container">
                            <h5>
                                No appointments today{" "}
                                <span role="img" aria-label="emoji">
                                    😅
                                </span>
                            </h5>
                        </NoAppointmentsContainer>
                    )
                }
            </AppointmentConsumer>
        )
    }
}
