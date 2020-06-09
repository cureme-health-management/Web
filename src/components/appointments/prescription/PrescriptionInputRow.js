import React, { Component } from 'react'

export default class PrescriptionInputRow extends Component {
    render() {
        return (
            <tr>
                <th scope="row">{this.props.num}</th>
                <td className="col-md-auto">
                    <input type="text" placeholder="Medicine" class="form-control form-control-sm" aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-sm" />
                </td>
                <td className="col-md-auto">
                    <div className="input-group input-group-sm mb-3">
                        <select className="custom-select" id="inputGroupSelect01">
                            <option selected>brand</option>
                            <option value="1">Brand 1</option>
                            <option value="2">Brand 2</option>
                            <option value="3">Brand 3</option>
                        </select>
                    </div>
                </td>
                <td className="col-md-auto">
                    <input type="text" placeholder="strength" className="form-control form-control-sm" aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-sm" />
                </td>
                <td>
                    <div className="input-group input-group-sm mb-3">
                        <select className="custom-select" id="inputGroupSelect01">
                            <option selected>Tablet</option>
                            <option value="1">Syrup</option>
                            <option value="2">Injection</option>
                        </select>
                    </div>
                </td>
                <td>
                    <div className="input-group input-group-sm mb-3">
                        <select className="custom-select" id="inputGroupSelect01">
                            <option selected>1</option>
                            <option value="1">2</option>
                            <option value="2">3</option>
                            <option value="3">4</option>
                        </select>
                    </div>
                </td>
                <td>
                    <input type="text" placeholder="freq" className="form-control form-control-sm" aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-sm" />
                </td>
                <td>
                    <div className="input-group input-group-sm mb-3">
                        <select className="custom-select" id="inputGroupSelect01">
                            <option selected>After Meal</option>
                            <option value="1">Before Meal</option>
                            <option value="2">Morning</option>
                        </select>
                    </div>
                </td>
                <td>
                    <span className="btn btn-sm btn-danger bg-default" onClick={this.delRow}>Del</span>
                </td>
            </tr>
        )
    }
}
