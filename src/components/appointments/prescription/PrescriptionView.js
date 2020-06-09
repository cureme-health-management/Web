import React, { Component } from 'react'
import PrescriptionInputRow from './PrescriptionInputRow'

export default class PrescriptionView extends Component {
    constructor() {
        super()
        this.state = {
            rows: 0
        }

        this.addRow = () => this.setState({ rows: this.state.rows + 1 })
    }

    render() {
        let inputRows = []
        if (this.state.rows > 0) {
            for (let i = 0; i < this.state.rows; i++) {
                const newRow = <PrescriptionInputRow key={i} num={i} />
                inputRows.push(newRow)
            }
        }


        //var index=2
        //if (index > -1) {
        //inputRows.splice(index,1);
        // }

        return (
            <div className="px-2">
                <table class="table table-borderless">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Medicine</th>
                            <th scope="col">Brand</th>
                            <th scope="col">strength</th>
                            <th scope="col">package</th>
                            <th scope="col">dosage</th>
                            <th scope="col">frequency</th>
                            <th scope="col">time</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {inputRows}
                    </tbody>
                </table>
                <div className="row">
                    <span className="btn btn-sm btn-secondary bg-default" onClick={this.addRow}>ADD</span>
                </div>
            </div>
        )
    }
}