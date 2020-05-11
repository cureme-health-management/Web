import React, { Component } from "react";
import patientsList from "./patientsList";

function Items(props) {
  return (
    <li class="list-group-item">
      <div class="">
        <span className="font-weight-bold">{props.item.name}</span>
        <br/>
        {props.item.problem}
        <span class="float-right font-weight-normal" style={{marginTop: '-21px'}}>
          {props.item.gender} {props.item.age}
          <br />
          12:00
        </span>
      </div>
    </li>
  );
}

class PendingAppointment extends Component {
  constructor() {
    super();
    this.state = {
      list: patientsList
    };
  }

  render() {
    const updatedLists = this.state.list.map(item => (
      <Items key={item.id} item={item} />
    ));

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
        <div className="card">
          <ul className="list-group scrollable">{updatedLists}</ul>
        </div>
      </div>
    );
  }
}
export default PendingAppointment;
