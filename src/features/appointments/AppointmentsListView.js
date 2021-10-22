import React from "react"
import { AppointmentConsumer } from "../../providers/AppointmentProvider"
import { ListItem } from "./AppointmemtListItem"

const AppointmentsListView = (props) => {
    return (
        <AppointmentConsumer>
            {({ data, select }) => {
                return (
                    <div className="pt-2">
                        <h5 className="">Today's appointments</h5>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search"
                            />
                            <div className="input-group-append">
                                <button
                                    className="btn btn-success"
                                    type="submit"
                                >
                                    Go
                                </button>
                            </div>
                        </div>
                        <div className="">
                            <ul className="list-group scrollable">
                                {props.updatedList.map((item) => (
                                    <ListItem
                                        key={item.id}
                                        item={item}
                                        data={data}
                                        select={select}
                                    />
                                ))}
                            </ul>
                        </div>
                    </div>
                )
            }}
        </AppointmentConsumer>
    )
}

export default AppointmentsListView
