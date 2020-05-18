import React, { Component } from "react"

const ListItem = ({ item }) => {
  return (
    <li class="list-group-item">
      <div class="">
        <span className="font-weight-bold">{item.name}</span>
        <br />
        {item.problem}
        <span class="float-right font-weight-normal" style={{ marginTop: '-21px' }}>
          {item.gender} {item.age}
          <br />
          12:00
        </span>
      </div>
    </li>
  );
}

export default class PendingAppointment extends Component {
  render() {
    return (
      <div className="pt-2">
        <h6 className="">You have following appointments today</h6>
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
            {this.props.updatedList.map(item => (
              <ListItem key={item.id} item={item} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export { PendingAppointment }
