import { createSlice } from "@reduxjs/toolkit"
import { startLoading, stopLoading } from "shared/store"

export const appointmentSlice = createSlice({
    name: "appointments",
    initialState: {
        message: "hi",
        list: [],
        currentAppointment: {},
        loading: false,
    },
    reducers: {
        startLoadingAppointments: startLoading,
        stopLoadingAppointments: stopLoading,
        selectAppointment: (state, { payload }) => {
            state.currentAppointment = payload
        },
        setAppointments: (state, { payload }) => {
            state.list = payload
        },
    },
})

export default appointmentSlice.reducer

export const {
    selectAppointment,
    startLoadingAppointments,
    stopLoadingAppointments,
    setAppointments,
} = appointmentSlice.actions
