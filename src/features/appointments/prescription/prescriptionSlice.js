import { createSlice } from "@reduxjs/toolkit"
import { DEFAULT_ROW_DATA } from "features/appointments/prescription/consts"

export const prescriptionSlice = createSlice({
    name: "prescription",
    initialState: {
        inputRows: [],
    },
    reducers: {
        addRow: (state, { payload }) => {
            state.inputRows.push({
                ...DEFAULT_ROW_DATA,
                id: state.inputRows.length,
            })
        },
        removeRow: (state, { payload }) => {
            state.inputRows.sort((a, b) => b.id - a.id).splice(payload, 1)
        },
    },
})

export default prescriptionSlice.reducer

export const { addRow, removeRow } = prescriptionSlice.actions
