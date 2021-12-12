import React from "react"
import PrescriptionInputRow from "./PrescriptionInputRow"
import styled from "styled-components"
import { useSelector } from "react-redux"
import { dispatch } from "modules/store"
import {
    addRow,
    removeRow,
} from "features/appointments/prescription/prescriptionSlice"
import PrescriptionTableHeading from "features/appointments/prescription/view/PrescriptionTableHeading"
import { Form } from "react-final-form"
import { FieldArray } from "react-final-form-arrays"
import arrayMutators from "final-form-arrays"

// import data from '../../../medicines'

const ScrollableTableBody = styled.tbody`
    max-height: 60vh;
    display: block;
    overflow-y: scroll;
`
export default function PrescriptionView(props) {
    // const handleRowChange = (object) => {
    //     window.addEventListener("beforeunload", onBeforeUnload)
    //     const { rowsData } = initialState
    //     const newState = rowsData.filter((obj) => {
    //         if (obj.id === object.id) {
    //             return Object.assign(obj, object)
    //         }
    //         return obj
    //     })
    //     setState({ rowsData: newState })
    //     localStorage.setItem("current", JSON.stringify(newState))
    // }

    const onBeforeUnload = (e) => {
        e.returnValue = "Are you sure you want to leave this page?"
    }

    // const handleOnSubmit = (e) => {
    //     // e.preventDefault()
    //     setState({ rowsData: [], inputRows: [] })
    // }

    // const componentWillUnmount = () => {
    //     if (initialState.rowsData.length === 0) {
    //         window.removeEventListener("beforeunload", onBeforeUnload)
    //     }
    // }

    // const componentWillReceiveProps = (nextId) => {
    //     if (props.id !== nextId.id) {
    //         if (initialState.rowsData.length === 0) {
    //             setState({ appointmentId: nextId.id })
    //         } else {
    //             alert("DAta not Submitted")
    //             handleOnSubmit()
    //         }
    //     } else {
    //         setState({ appointmentId: nextId.id })
    //     }
    // }

    return (
        <div className="px-2 h-100">
            <Form
                onSubmit={() => {}}
                initialValues={{
                    prescription: [
                        {
                            medicine: "",
                            package: "tablet",
                            brand: 3,
                        },
                    ],
                }}
                mutators={{ ...arrayMutators }}
            >
                {({
                    form: {
                        mutators: { push },
                    },
                    values,
                    handleSubmit,
                    submitting,
                    pristine,
                }) => (
                    <>
                        <table className="table table-borderless">
                            <PrescriptionTableHeading />
                            <ScrollableTableBody>
                                <FieldArray name="prescription">
                                    {({ fields }) =>
                                        fields.map((row) => (
                                            <PrescriptionInputRow
                                                key={row}
                                                id={row}
                                                delRow={(i) =>
                                                    dispatch(removeRow(i))
                                                }
                                                // handleInput={handleRowChange}
                                            />
                                        ))
                                    }
                                </FieldArray>
                            </ScrollableTableBody>
                        </table>
                        <div className="row">
                            <span
                                className="btn btn-sm btn-secondary bg-default"
                                onClick={() => push("prescription", undefined)}
                                style={{ marginLeft: "28px" }}
                            >
                                ADD
                            </span>
                        </div>
                        <div className="row">
                            <button
                                type="button"
                                className="btn btn-success position-absolute"
                                style={{ bottom: "10px", right: "10px" }}
                            >
                                Submit
                            </button>
                        </div>
                    </>
                )}
            </Form>
        </div>
    )
}
