import React from "react"
import { fetchAppointments } from "features/appointments/actions"
import AppointmentsView from "features/appointments/AppointmentsView"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

export default function ConfigureAppointmentsView(props) {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAppointments())
    }, [])

    return <AppointmentsView {...props} />
}
