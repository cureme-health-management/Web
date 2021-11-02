import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const medicines = ["paracetamol", "abracoir"]

const historyInitialState = {
    history: [
        {
            id: 1,
            medicines,
        },
        {
            id: 2,
            medicines,
        },
    ],
}

const historySlice = createSlice({
    name: "history",
    initialState: historyInitialState,
    reducers: {
        setHistory: (state, { payload }) => {
            state.history = payload
        },
    },
})

export default historySlice.reducer

export const { setHistory } = historySlice.actions

export const fetchHistory = () => async (dispatch) => {
    const {
        data: { histories },
    } = await axios.get("/v1.0/history")
    dispatch(setHistory(histories))
}
