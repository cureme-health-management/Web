import React, { Component } from "react";
import patientsList from "./patientsList";

function Items(props) {
  return (
    <div>
      <div class="d-flex ab bd-highlight">
        <div class="p-2 flex-grow-1 bd-highlight">
          <label>Name: {props.item.name}</label>
          <label className="age">Age: {props.item.age}</label>
          <label className="gender"> Gender: {props.item.gender}</label>
          <br />
          <label>Contact: {props.item.contact}</label>
          <br />
          <label>Issue: {props.item.problem}</label>
          <br />
          <label>Previous Issues: {props.item.previous}</label>
        </div>
        <div class="p-2 ba bd-highlight">
          <img className="dp" src={props.item.image} alt="???" />
        </div>
      </div>
    </div>
  );
}

export default class PatientDetails extends Component {
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
    return <div>{updatedLists[2]}</div>;
  }
}

