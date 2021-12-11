import axios from "axios"
import {
    selectAppointment,
    setAppointments,
    startLoadingAppointments,
    stopLoadingAppointments,
} from "features/appointments/appointmentSlice"
import { API_VERSION } from "mock/routes"
import { getAgeFromDate } from "utils/date"

export const fetchAppointments = () => async (dispatch) => {
    try {
        dispatch(startLoadingAppointments())
        const {
            data: { appointments },
        } = await axios.get("/v1.0/appointments", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        })
        if (appointments.length > 0) {
            const formattedAppointmets = appointments.map((a) => {
                const { date_of_birth, first_name, last_name } = a
                const y = date_of_birth.split("-")[0]
                const m = date_of_birth.split("-")[1]
                const d = date_of_birth.split("-")[2]
                return {
                    ...a,
                    firstName: first_name,
                    lastName: last_name,
                    age: getAgeFromDate(new Date(y, m, d)),
                }
            })
            dispatch(setAppointments(formattedAppointmets))
            dispatch(selectAppointment(formattedAppointmets[0]))
        }
        dispatch(stopLoadingAppointments())
    } catch (error) {
        dispatch(stopLoadingAppointments())
    }
}
