import React, { Component } from "react";
import patientsList from "./patientsList";

function Items(props) {
  return (
    <div>
      <div className="auth-wrap">
        <div className="auth-inn">
          <div class="d-flex bd-highlight">
            <div class="p-2 flex-grow-1 bd-highlight">
              <h6>{props.item.name}</h6>
              {props.item.problem}
            </div>
            <div class="p-2 bd-highlight">
              {props.item.gender} {props.item.age}
              <br />
              12:00
            </div>
          </div>
        </div>
      </div>
    </div>
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
      <div>
        <h5 className="tex">You have following appointments today</h5>
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Search" />
          <div class="input-group-append">
            <button class="btn btn-success" type="submit">
              Go
            </button>
          </div>
        </div>
        <div class="d-flex p-2 bd-highlight">
          <div class="d-flex align-content-start flex-wrap">{updatedLists}</div>
        </div>
      </div>
    );
  }
}
export default PendingAppointment;
