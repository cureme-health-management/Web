import { configureStore } from "@reduxjs/toolkit"
import historyReducer from "../../features/history/historySlice"
import appointmentsReducer from "../../features/appointments/appointmentSlice"

export const store = configureStore({
    reducer: {
        history: historyReducer,
        appointments: appointmentsReducer,
    },
})

export const dispatch = store.dispatch
