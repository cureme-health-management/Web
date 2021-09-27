import React, { Component } from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

export default class SignUp extends Component {
    constructor() {
        super()
        this.state = {
            currentStep: 1,
            firstName: "",
            lastName: "",
            email: "",
            phoneNum: "",
            password: "",
            degree: "",
            clinicName: "",
            clinicId: "",
            clinicContact: "",
            clinicAddress: "",
            specialization: "",
            doctorAddress: "",
        }
        this.handleChange = this.handleChange.bind(this)
        this.next = this.next.bind(this)
        this.prev = this.prev.bind(this)
    }

    //handleSubmit = event => {
    // event.preventDefault()
    //}

    handleChange(event) {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    next() {
        let currentStep = this.state.currentStep
        currentStep = currentStep >= 2 ? 3 : currentStep + 1
        this.setState({
            currentStep: currentStep,
        })
    }

    prev() {
        let currentStep = this.state.currentStep
        currentStep = currentStep <= 1 ? 1 : currentStep - 1
        this.setState({
            currentStep: currentStep,
        })
    }

    get previousButton() {
        let currentStep = this.state.currentStep
        if (currentStep !== 1) {
            return (
                <button
                    className="btn btn-secondary"
                    type="button"
                    onClick={this.prev}
                >
                    Previous
                </button>
            )
        }
        return null
    }

    get nextButton() {
        let currentStep = this.state.currentStep
        if (currentStep < 3) {
            return (
                <button
                    className="btn btn-primary float-right"
                    type="button"
                    onClick={this.next}
                >
                    Next
                </button>
            )
        }
        return null
    }

    render() {
        return (
            <React.Fragment>
                <div
                    className="container-fluid full-width-container bg"
                    style={{ paddingTop: "5px" }}
                >
                    <form onSubmit={this.handleSubmit}>
                        <div
                            className="auth-wrapper"
                            style={{ marginTop: "50px" }}
                        >
                            <div
                                className="auth-inner"
                                style={{ marginTop: "50px" }}
                            >
                                <h4>Sign Up</h4>
                                <Step1
                                    currentStep={this.state.currentStep}
                                    handleChange={this.handleChange}
                                    firstName={this.state.firstName}
                                    lastName={this.state.lastName}
                                    degree={this.state.degree}
                                    specialization={this.state.specialization}
                                />
                                <Step2
                                    currentStep={this.state.currentStep}
                                    handleChange={this.handleChange}
                                    email={this.state.email}
                                    phoneNum={this.state.phoneNum}
                                    doctorAddress={this.state.doctorAddress}
                                    password={this.state.password}
                                />
                                <Step3
                                    currentStep={this.state.currentStep}
                                    handleChange={this.handleChange}
                                    clinicName={this.state.clinicName}
                                    clinicId={this.state.clinicId}
                                    clinicContact={this.state.clinicContact}
                                    clinicAddress={this.state.clinicAddress}
                                />
                                {this.state.currentStep == 1 ? (
                                    <button
                                        className="btn btn-secondary"
                                        style={{ visibility: "hidden" }}
                                    >
                                        hidden
                                    </button>
                                ) : (
                                    this.previousButton
                                )}
                                {this.nextButton}
                                <p
                                    className="forgot-password text-right"
                                    style={{ marginTop: "0px" }}
                                >
                                    Already registered?
                                    <Link to="login">Sign In</Link>
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

function Step1(props) {
    if (props.currentStep !== 1) {
        return null
    }
    return (
        <div>
            <div className="form-group">
                <label>First Name</label>
                <input
                    className="form-control"
                    name="firstName"
                    type="text"
                    placeholder="Enter First Name"
                    value={props.firstName}
                    onChange={props.handleChange}
                />
            </div>
            <div className="form-group">
                <label>Last Name</label>
                <input
                    className="form-control"
                    name="lastName"
                    type="text"
                    placeholder="Enter Last Name"
                    value={props.lastName}
                    onChange={props.handleChange}
                />
            </div>
            <div className="form-group">
                <label>Degree</label>
                <input
                    className="form-control"
                    name="degree"
                    type="text"
                    placeholder="Enter Degree"
                    value={props.degree}
                    onChange={props.handleChange}
                />
            </div>
            <div className="form-group">
                <label>Specialization</label>
                <input
                    className="form-control"
                    name="specialization"
                    type="text"
                    value={props.specialization}
                    onChange={props.handleChange}
                />
            </div>
        </div>
    )
}

function Step2(props) {
    if (props.currentStep !== 2) {
        return null
    }
    return (
        <div>
            <div className="form-group">
                <label>Doctor Address</label>
                <input
                    className="form-control"
                    name="doctorAddress"
                    type="text"
                    value={props.doctorAddress}
                    onChange={props.handleChange}
                />
            </div>
            <div className="form-group">
                <label>Email address</label>
                <input
                    className="form-control"
                    name="email"
                    type="text"
                    placeholder="Enter Email"
                    value={props.email}
                    onChange={props.handleChange}
                />
            </div>
            <div className="form-group">
                <label>Phone Number</label>
                <input
                    className="form-control"
                    name="phoneNum"
                    type="text"
                    placeholder="Enter Phone No."
                    value={props.phoneNum}
                    onChange={props.handleChange}
                />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input
                    className="form-control"
                    name="password"
                    type="password"
                    placeholder="Enter Password"
                    value={props.password}
                    onChange={props.handleChange}
                />
            </div>
        </div>
    )
}

function Step3(props) {
    if (props.currentStep !== 3) {
        return null
    }
    return (
        <React.Fragment>
            <div className="form-group">
                <label>Clinic Name</label>
                <input
                    className="form-control"
                    name="clinicName"
                    type="text"
                    placeholder="Enter Clinic Name"
                    value={props.clinicName}
                    onChange={props.handleChange}
                />
            </div>
            <div className="form-group">
                <label>Clinic Id</label>
                <input
                    className="form-control"
                    name="clinicId"
                    type="text"
                    placeholder="Enter Clinic Id"
                    value={props.clinicId}
                    onChange={props.handleChange}
                />
            </div>
            <div className="form-group">
                <label>Clinic phone no.</label>
                <input
                    className="form-control"
                    name="clinicContact"
                    type="text"
                    placeholder="Enter Clinic phone no."
                    value={props.clinicContact}
                    onChange={props.handleChange}
                />
            </div>
            <div className="form-group">
                <label>Clinic Adress</label>
                <input
                    className="form-control"
                    name="clinicAddress"
                    type="text"
                    placeholder="Enter Clinic Address"
                    value={props.clinicAddress}
                    onChange={props.handleChange}
                />
            </div>
            <button className="btn btn-success float-right"> Sign Up </button>
        </React.Fragment>
    )
}
