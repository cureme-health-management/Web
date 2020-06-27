import React from "react"
import { AppointmentConsumer } from '../../providers/AppointmentProvider'

const ListItem = ({ item }) => {
  return (
    <AppointmentConsumer>
      {({ data, select }) => {
        let isSelected = data.currentAppointment.id === item.id ? true : false
        return (
          <li
            className={isSelected ?
              "list-group-item list-group-item-action active"
              :
              "list-group-item list-group-item-action"}
            onClick={() => select(item)}
          >
            <div className="">
              <span className="font-weight-bold">{item.firstName} {item.lastName}</span>
              <br />
              {item.problem}
              <span className="float-right font-weight-normal" style={{ marginTop: '-23px' }}>
                {item.gender}
                <br />
                <strong>{item.age}</strong>
              </span>
            </div>
          </li>
        )
      }}
    </AppointmentConsumer>

  );
}

const AppointmentsListView = (props) => {
  return (
    <AppointmentConsumer>
      {({ data }) => {
        return (
          <div className="pt-2">
            <h5 className="">Today's appointments</h5>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Search" />
              <div className="input-group-append">
                <button className="btn btn-success" type="submit">
                  Go
                </button>
              </div>
            </div>
            <div className="">
              <ul className="list-group scrollable">
                {props.updatedList.map(item => (
                  <ListItem
                    key={item.id}
                    item={item}
                  />
                ))}
              </ul>
            </div>
          </div>
        )
      }}
    </AppointmentConsumer>

  );
}

export default AppointmentsListView