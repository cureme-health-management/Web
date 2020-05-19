import React from "react";

const  PatientDetails = ({current}) => {
  return (
    <div>
      <div class="d-flex ab bd-highlight">
        <div class="p-2 flex-grow-1 bd-highlight">
          <label>Name: {current.name}</label>
          <label className="age">Age: {current.age}</label>
          <label className="gender"> Gender: {current.gender}</label>
          <br />
          <label>Contact: {current.contact}</label>
          <br />
          <label>Issue: {current.problem}</label>
          <br />
          <label>Previous Issues: {current.previous}</label>
        </div>
        <div class="p-2 ba bd-highlight">
          <img className="dp" src={current.image} alt="???" />
        </div>
      </div>
    </div>
  );
}

export default PatientDetails

