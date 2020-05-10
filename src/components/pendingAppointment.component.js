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
              <br />
              Age: {props.item.age}
            </div>
            <div class="p-2 bd-highlight">
              <img className="dp" src={props.item.image} alt="???" />
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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedList = prevState.list.map(abc => {
        if (abc.id === id) {
          abc.completed = !abc.completed;
        }
        return abc;
      });
      return {
        list: updatedList
      };
    });
  }

  render() {
    const updatedLists = this.state.list.map(item => (
      <Items key={item.id} item={item} handleChange={this.handleChange} />
    ));

    return (
      <div>
        <h1 className="text">APPOINTMENTS</h1>
        <br />
        <h5 className="tex">You have following appointments</h5>
        <h5>today</h5>
        <div class="d-flex p-2 bd-highlight">
          <div class="d-flex align-content-start flex-wrap">{updatedLists}</div>
        </div>
      </div>
    );
  }
}
export default PendingAppointment;
