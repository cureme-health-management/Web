import React, { Component } from "react"
// import Autocomplete from 'react-autocomplete'

export default class PrescriptionInputRow extends Component {
    constructor() {
        super()
        this.state = {
            medicine: "",
            package: "",
            brand: "",
            days: "",
            time: "",
            frequency: "",
            dosage: "",
            strength: "",
        }
        this.handleChange = (e) => {
            this.setState({ [e.target.name]: e.target.value }, () => {
                const obj = {
                    id: this.props.id,
                    medicine: this.state.medicine,
                    package: this.state.package,
                    brand: this.state.brand,
                    strength: this.state.strength,
                    dosage: this.state.dosage,
                    frequency: this.state.frequency,
                    time: this.state.time,
                    days: this.state.days,
                }
                this.props.handleInput(obj)
            })
        }
    }

    render() {
        return (
            <tr>
                <td className="col-md-auto">
                    <div className="input-group input-group-sm mb-3">
                        <select
                            className="custom-select"
                            value={this.state.package}
                            onChange={this.handleChange}
                            id="inputGroupSelect01"
                            name="package"
                        >
                            <option value="Tablet">Tablet</option>
                            <option value="Syrup">Syrup</option>
                            <option value="Injection">Injection</option>
                        </select>
                    </div>
                </td>
                <td className="col-md-auto">
                    <input
                        type="text"
                        name="medicine"
                        value={this.state.medicine}
                        onChange={this.handleChange}
                        placeholder="medicine"
                        className="form-control form-control-sm"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-sm"
                    />
                </td>
                <td className="col-md-auto">
                    <div className="input-group input-group-sm mb-3">
                        <select
                            className="custom-select"
                            value={this.state.brand}
                            onChange={this.handleChange}
                            id="inputGroupSelect01"
                            name="brand"
                        >
                            <option value="0">brand</option>
                            <option value="1">Brand 1</option>
                            <option value="2">Brand 2</option>
                            <option value="3">Brand 3</option>
                        </select>
                    </div>
                </td>
                <td className="col-md-auto">
                    <div className="input-group input-group-sm mb-3">
                        <select
                            className="custom-select"
                            value={this.state.strength}
                            onChange={this.handleChange}
                            id="inputGroupSelect01"
                            name="strength"
                        >
                            <option value="125">125</option>
                            <option value="250">250</option>
                            <option value="300">300</option>
                            <option value="500">500</option>
                        </select>
                    </div>
                </td>
                <td className="col-md-auto">
                    <div className="input-group input-group-sm mb-3">
                        <select
                            className="custom-select"
                            value={this.state.dosage}
                            onChange={this.handleChange}
                            id="inputGroupSelect01"
                            name="dosage"
                        >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                </td>
                <td className="col-md-auto">
                    <div className="input-group input-group-sm mb-3">
                        <select
                            className="custom-select"
                            value={this.state.frequency}
                            onChange={this.handleChange}
                            id="inputGroupSelect01"
                            name="frequency"
                        >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                </td>
                <td className="col-md-auto">
                    <div className="input-group input-group-sm mb-3">
                        <select
                            className="custom-select"
                            value={this.state.time}
                            onChange={this.handleChange}
                            id="inputGroupSelect01"
                            name="time"
                        >
                            <option value="0">After Meal</option>
                            <option value="1">Before Meal</option>
                            <option value="2">Morning</option>
                        </select>
                    </div>
                </td>
                <td className="col-md-auto">
                    <div className="input-group input-group-sm mb-3">
                        <select
                            className="custom-select"
                            value={this.state.days}
                            onChange={this.handleChange}
                            id="inputGroupSelect01"
                            name="days"
                        >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                </td>
                <td className="col-md-auto">
                    <span
                        className="btn btn-sm btn-danger bg-default"
                        onClick={() => this.props.delRow(this.props.id)}
                    >
                        Del
                    </span>
                </td>
            </tr>
        )
    }
}
