import { fetchAppointments } from "features/appointments/actions"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import AppointmentsListView from "./AppointmentsListView"
import CurrentAppointmentDetailsView from "./CurrentAppointmentDetailsView"
import PrescriptionView from "../prescription/view/PrescriptionView"

const NoAppointmentsContainer = styled.div`
    max-height: calc(100vh - 100px);
    text-align: center;
    margin-top: calc(50vh - 100px);
`

export default function AppointmentsView(props) {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAppointments())
    }, [])

    const { list, loading, currentAppointment } = useSelector(
        (state) => state.appointments
    )
    return loading ? (
        <div>Loading...</div>
    ) : list.length > 0 ? (
        <div
            className="container-fluid full-width-container"
            style={{ overflowY: "hidden" }}
        >
            <div className="row h-100">
                <div
                    className="col-md-2 list-section"
                    style={{
                        backgroundColor: " #f4f5f7",
                        height: "100%",
                    }}
                >
                    <AppointmentsListView
                        updatedList={list}
                        current={currentAppointment.id}
                    />
                </div>
                <div className="col-md-10">
                    <div className="row" style={{ height: "75vh" }}>
                        <div className="col">
                            <PrescriptionView id={currentAppointment.id} />
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
                                current={currentAppointment}
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
