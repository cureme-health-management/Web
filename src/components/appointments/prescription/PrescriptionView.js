import React, { Component } from 'react'
import PrescriptionInputRow from './PrescriptionInputRow'
import withSwr from '../../../hoc/swr'

import data from '../../../medicines'

class PrescriptionView extends Component {
    constructor() {
        super()
        this.state = {
            rows: 1,
            inputRows: [],
            // data: JSON.parse(data)
            rowsData: []
        }

        this.delRow = (id) => {
            const inputRows = this.state.inputRows
            const filteredArray = inputRows.filter(item => item.props.id !== id)
            this.setState({ inputRows: filteredArray});
        }

        this.addRow = () => {
            this.setState({ rows: this.state.rows + 1 })
            if (this.state.rows > 0) {
                for (let i = 0; i < this.state.rows; i++) {
                    const newRow = <PrescriptionInputRow key={i} id={i} delRow={this.delRow} handleInput={this.handleRowChange} />
                    this.setState({ inputRows: [...this.state.inputRows, newRow] })
                }
            }
        }

        this.handleRowChange = (object) => {
            this.setState({rowsData: [...this.state.rowsData, object]})
        }
    }

    componentDidMount = () => {
    }

    render() {
        console.log(this.state.rowsData)
        return (
            <div className="px-2">
                <table className="table table-borderless">
                    <thead>
                        <tr>
                        <th scope="col">Package</th>
                            <th scope="col" style={{ width: "20%" }}>Medicine</th>
                            <th scope="col">Brand</th>
                            <th scope="col" >Strength</th>
                            <th scope="col">Dosage</th>
                            <th scope="col">Freq</th>
                            <th scope="col">Time</th>
                            <th scope="col">Days</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.inputRows}
                    </tbody>
                </table>
                <div className="row">
                    <span className="btn btn-sm btn-secondary bg-default" onClick={this.addRow} style={{marginLeft:"28px"}}>ADD</span>
                </div>
                <div className="row">
                <button type="button" class="btn btn-primary" style={{marginLeft:"400px",position:"absolute" ,top:"88%"}}>SUBMIT</button>
                </div>
            </div>
        )
    }
}

export default withSwr(PrescriptionView)