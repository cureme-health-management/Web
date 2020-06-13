import React, { Component } from 'react'
import PrescriptionInputRow from './PrescriptionInputRow'

export default class PrescriptionView extends Component {
    constructor() {
        super()
        this.state = {
            rows: 1,
            inputRows:[]
        }

        this.delRow = (id) => {
            const inputRows = [this.state.inputRows]
            const filteredArray = inputRows.filter(item => item.id !== id)
             this.setState({inputRows: filteredArray});
           }

        this.addRow = () =>{ 
        this.setState({ rows: this.state.rows + 1 })
        if (this.state.rows > 0) {
            for(let i=0 ;i<this.state.rows;i++){
            const newRow = <PrescriptionInputRow key={i} id={i} delRow={this.delRow}/>
            this.setState({inputRows: [...this.state.inputRows, newRow]})
            console.log(this.state.inputRows)
        }}}
             
    }

    render() {

        return (
            <div className="px-2">
                <table class="table table-borderless">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col"style={{width: "25%"}}>Medicine</th>
                            <th scope="col">Brand</th>
                            <th scope="col" >strength</th>
                            <th scope="col">package</th>
                            <th scope="col">dosage</th>
                            <th scope="col">frequency</th>
                            <th scope="col">time</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.inputRows}
                    </tbody>
                </table>
                <div className="row">
                    <span className="btn btn-sm btn-secondary bg-default" onClick={this.addRow}>ADD</span>
                </div>
            </div>
        )
    }
}