import React from "react";

const  CurrentAppointmentDetailsView = ({current}) => {
  return (
    <div className="row pt-2">
      <div className="col">
          <h6>Suraj s chavan</h6>
          <h6>Age: {current.age}</h6>
          <h6> Gender: {current.gender}</h6>
      </div>
      <div className="col">
            <h6>Contact: {current.contact}</h6>
            <h6>Issue: {current.problem}</h6>
            <h6>Previous Issues: {current.previous}</h6>
      </div>
      <div className="col">
        <div className="ba bd-highlight float-right">
          <img className="dp" src={current.image} alt="???" style={{height:"80px"}}/>
        </div>
      </div>
      {/* <div className="d-flex ab bd-highlight">
        <div className="p-2 flex-grow-1 bd-highlight">
        </div>
      </div> */}
    </div>
  );
}

export default CurrentAppointmentDetailsView

