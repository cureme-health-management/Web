import { selectAppointment } from "features/appointments/appointmentSlice"
import { getAppointmentsState } from "features/appointments/selectors"
import { dispatch } from "modules/store"
import React from "react"
import { useSelector } from "react-redux"
import { ListItem } from "./AppointmemtListItem"

const AppointmentsListView = ({ updatedList }) => {
    const data = useSelector(getAppointmentsState)
    return (
        <div className="pt-2">
            <h6 className="">Today's appointments</h6>
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control form-control-sm"
                    placeholder="Search"
                />
                <div className="input-group-append">
                    <button className="btn btn-success btn-sm" type="submit">
                        Go
                    </button>
                </div>
            </div>
            <div className="">
                <ul className="list-group scrollable">
                    {updatedList.map((item) => (
                        <ListItem
                            key={item.id}
                            item={item}
                            data={data}
                            select={(app) => dispatch(selectAppointment(app))}
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default AppointmentsListView
