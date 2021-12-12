import React from "react"

const CurrentAppointmentDetailsView = ({ current }) => {
    const {
        firstName,
        lastName,
        age,
        gender,
        contact,
        problem,
        previous,
        image,
    } = current

    return (
        <div className="row pt-2">
            <div className="col">
                <h6>
                    {firstName} {lastName}
                </h6>
                <h6>Age: {age}</h6>
                <h6> Gender: {gender}</h6>
            </div>
            <div className="col">
                <h6>Contact: {contact}</h6>
                <h6>Issue: {problem}</h6>
                <h6>Previous Issues: {previous}</h6>
            </div>
            <div className="col">
                <div className="ba bd-highlight float-right">
                    <img
                        className="dp"
                        src={image}
                        alt="???"
                        style={{ height: "80px" }}
                    />
                </div>
            </div>
        </div>
    )
}

export default CurrentAppointmentDetailsView
