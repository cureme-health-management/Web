import React, { Component } from 'react'
import PrescriptionInputRow from './PrescriptionInputRow'

export default class PrescriptionView extends Component {
    constructor() {
        super()
        this.state = {
            rows: 0
        }

        this.addRow = () => this.setState({rows: this.state.rows + 1})
    }

    render() {
        let inputRows = []
        if(this.state.rows > 0) {
            for(let i=0; i < this.state.rows; i++) {
                const newRow = <div className="row" key={i}> <PrescriptionInputRow /> </div>
                inputRows.push(newRow)
            }
        }
        return (
            <div className="container text-center pt-3">
                <div>
                    {inputRows}
                </div>
                <div className="row">
                    <span className="btn btn-sm btn-secondary bg-default" onClick={this.addRow}>New</span>
                </div>
            </div>
        )
    }
}
