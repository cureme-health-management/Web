import React, { Component } from "react"
import { Field } from "react-final-form"
// import Autocomplete from 'react-autocomplete'

export default function PrescriptionInputRow({ id }) {
    return (
        <tr>
            <td className="col-md-auto">
                <div className="input-group input-group-sm mb-3">
                    <Field
                        name={`${id}.package`}
                        component="select"
                        className="custom-select"
                    >
                        <option value="tablet">Tablet</option>
                        <option value="syrup">Syrup</option>
                        <option value="injection">Injection</option>
                    </Field>
                </div>
            </td>
            <td className="col-md-auto">
                <Field
                    name={`${id}.medicine`}
                    component="input"
                    placeholder="medicine"
                    className="form-control form-control-sm"
                    aria-label="Medicine"
                />
            </td>
            <td className="col-md-auto">
                <div className="input-group input-group-sm mb-3">
                    <Field
                        name={`${id}.brand`}
                        component="select"
                        aria-label="Brand"
                        className="custom-select"
                    >
                        <option value="0">brand</option>
                        <option value="1">Brand 1</option>
                        <option value="2">Brand 2</option>
                        <option value="3">Brand 3</option>
                    </Field>
                </div>
            </td>
            <td className="col-md-auto">
                <div className="input-group input-group-sm mb-3">
                    <Field
                        name={`${id}.strength`}
                        component="select"
                        aria-label="Strength"
                        className="custom-select"
                    >
                        <option value="125">125</option>
                        <option value="250">250</option>
                        <option value="300">300</option>
                        <option value="500">50 0</option>
                    </Field>
                </div>
            </td>
            <td className="col-md-auto">
                <div className="input-group input-group-sm mb-3">
                    <select
                        className="custom-select"
                        // value={this.state.dosage}
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
                    <Field
                        name={`${id}.frequency`}
                        component="select"
                        className="custom-select"
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </Field>
                </div>
            </td>
            <td className="col-md-auto">
                <div className="input-group input-group-sm mb-3">
                    <Field
                        name={`${id}.time`}
                        className="custom-select"
                        component="select"
                    >
                        <option value="0">After Meal</option>
                        <option value="1">Before Meal</option>
                        <option value="2">Morning</option>
                    </Field>
                </div>
            </td>
            <td className="col-md-auto">
                <div className="input-group input-group-sm mb-3">
                    <Field
                        name={`${id}.days`}
                        component="select"
                        className="custom-select"
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </Field>
                </div>
            </td>
            <td className="col-md-auto">
                <span
                    className="btn btn-sm btn-danger bg-default"
                    // onClick={() => this.props.delRow(this.props.id)}
                >
                    Delete
                </span>
            </td>
        </tr>
    )
}
