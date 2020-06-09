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
                const newRow = <div className="row" key={i}> <PrescriptionInputRow num={i}/> </div>
                inputRows.push(newRow)
            }
        }
        

        //var index=2
        //if (index > -1) { 
            //inputRows.splice(index,1);
         // }

        return (
            <div className="container-fluid">
            <div className="row mt-2 mb-2">
            <div className="col-md-auto font-weight-bold">#</div>
            <div className="col ml-3 font-weight-bold">Medicine</div>
            <div className="col font-weight-bold">Brand</div>
            <div className="col font-weight-bold ">Strength</div>
            <div className="col font-weight-bold">Package</div>
            <div className="col font-weight-bold">Dosage</div>
            <div className="col font-weight-bold">Freq</div>
            <div className="col font-weight-bold">Time</div>
            <div className="col font-weight-bold"></div>
            </div>
            <div>
                    {inputRows}
                </div>
                <div className="row">
                    <span className="btn btn-sm btn-secondary bg-default" onClick={this.addRow}>ADD</span>
                </div>
            </div>
        )
}
}