import { configureStore } from "@reduxjs/toolkit"
import historyReducer from "features/history/historySlice"
import appointmentsReducer from "features/appointments/appointmentSlice"
import prescriptionReducer from "features/appointments/prescription/prescriptionSlice"

export const store = configureStore({
    reducer: {
        history: historyReducer,
        appointments: appointmentsReducer,
        prescription: prescriptionReducer,
    },
})

export const dispatch = store.dispatch
