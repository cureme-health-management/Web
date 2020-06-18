import React, { Component } from 'react'
// import Autocomplete from 'react-autocomplete'

export default class PrescriptionInputRow extends Component {
    constructor() {
        super()
        this.state = {
            medicine: '',
            package: "0"
        }
        this.handleChange = (e) => {
            this.setState({[e.target.name]: e.target.value},()=>{
                const obj ={
                    id: this.props.id,
                    medicine: this.state.medicine,
                    package: this.state.package,
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
                        <select className="custom-select"value={this.state.package}
                            onChange={this.handleChange} id="inputGroupSelect01" name="package">
                            <option value="0">Tablet</option>
                            <option value="1">Syrup</option>
                            <option value="2">Injection</option>
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
                    aria-describedby="inputGroup-sizing-sm" />
                </td>
                <td className="col-md-auto">
                    <div className="input-group input-group-sm mb-3">
                        <select className="custom-select" id="inputGroupSelect01" name="brand">
                            <option value="0">brand</option>
                            <option value="1">Brand 1</option>
                            <option value="2">Brand 2</option>
                            <option value="3">Brand 3</option>
                        </select>
                    </div>
                </td>
                <td className="col-md-auto">
                    <div className="input-group input-group-sm mb-3">
                        <select className="custom-select" id="inputGroupSelect01" name="strength">
                            <option value="0">125</option>
                            <option value="1">250</option>
                            <option value="2">300</option>
                            <option value="3">500</option>
                        </select>
                    </div>
                </td>
                <td className="col-md-auto">
                    <div className="input-group input-group-sm mb-3">
                        <select className="custom-select" id="inputGroupSelect01" name="dosage">
                            <option value="0">1</option>
                            <option value="1">2</option>
                            <option value="2">3</option>
                            <option value="3">4</option>
                        </select>
                    </div>
                </td>
                <td className="col-md-auto">
                    <div className="input-group input-group-sm mb-3">
                        <select className="custom-select" id="inputGroupSelect01" name="frequency">
                            <option  value="0">1</option>
                            <option value="1">2</option>
                            <option value="2">3</option>
                            <option value="3">4</option>
                        </select>
                    </div>
                </td>
                <td className="col-md-auto">
                    <div className="input-group input-group-sm mb-3">
                        <select className="custom-select" id="inputGroupSelect01" name="time">
                            <option  value="0">After Meal</option>
                            <option value="1">Before Meal</option>
                            <option value="2">Morning</option>
                        </select>
                    </div>
                </td>
                <td className="col-md-auto">
                    <div className="input-group input-group-sm mb-3">
                        <select className="custom-select" id="inputGroupSelect01" name="days">
                            <option  value="0">1</option>
                            <option value="1">2</option>
                            <option value="2">3</option>
                            <option value="3">4</option>
                        </select>
                    </div>
                </td>
                <td className="col-md-auto">
                    <span className="btn btn-sm btn-danger bg-default" onClick={() => this.props.delRow(this.props.id)}>Del</span>
                </td>
            </tr>
        )
    }
}
