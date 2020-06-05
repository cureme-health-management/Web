import React from "react"

const ListItem = ({ item, select, isSelected }) => {
  return (
    <li
      className={isSelected ?
        "list-group-item list-group-item-action active"
        :
        "list-group-item list-group-item-action"}
      onClick={() => select(item)}
    >
      <div className="">
        <span className="font-weight-bold">{item.name}</span>
        <br />
        {item.problem}
        <span className="float-right font-weight-normal" style={{ marginTop: '-21px' }}>
          {item.gender} {item.age}
          <br />
          12:00
        </span>
      </div>
    </li>
  );
}

const AppointmentsListView = (props) => {
  const selectAppointment = (item) => {
    props.select(item)
  }
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
              isSelected={
                props.current === item.id ? true : false
              }
              select={(item) => selectAppointment(item)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AppointmentsListView
