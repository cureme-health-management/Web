import React, { Component } from 'react'
import PrescriptionInputRow from './PrescriptionInputRow'
import withSwr from '../../../hoc/swr'
import styled from 'styled-components'

// import data from '../../../medicines'


const ScrollableTableBody = styled.tbody`
    max-height: 60vh;
    display: block;
    overflow-y: scroll;
`

class PrescriptionView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rows: 0,
            appointmentId: this.props.id,
            inputRows: [],
            // data: JSON.parse(data)
            rowsData: [],
        }

        this.delRow = (id) => {
            const { inputRows, rowsData } = this.state
            const filteredArray = inputRows.filter(item => item.props.id !== id)
            const filteredRowData = rowsData.filter(item => item.id !== id)
            this.setState({ inputRows: filteredArray, rowsData: filteredRowData });
            localStorage.current = JSON.stringify(filteredRowData)
        }

        this.addRow = () => {
            const { inputRows, rowsData, rows } = this.state
            this.setState({ rows: rows + 1 }, () => {
                for (let i = 0; i < this.state.rows; i++) {
                    const newRow = <PrescriptionInputRow key={i} id={i} delRow={this.delRow} handleInput={this.handleRowChange} />
                    this.setState({ inputRows: [...inputRows, newRow], rowsData: [...rowsData, { id: i }] })
                }
            })
        }

        this.handleRowChange = (object) => {
            window.addEventListener("beforeunload", this.onBeforeUnload);
            const { rowsData } = this.state
            const newState = rowsData.filter(obj => {
                if (obj.id === object.id) {
                    return Object.assign(obj, object)
                }
                return obj
            })
            this.setState({ rowsData: newState })
            localStorage.setItem('current', JSON.stringify(newState))
        }

       this.onBeforeUnload = (e) => {
           e.returnValue = 'Are you sure you want to leave this page?'
        }
    }

    handleOnSubmit = (e) => {
        // e.preventDefault()
        this.setState({ rowsData: [], inputRows: [] })
    }

    componentWillUnmount = () => {
        if (this.state.rowsData.length === 0) {
            window.removeEventListener("beforeunload", this.onBeforeUnload);
        }
    }

    componentWillReceiveProps(nextId){
        if(this.props.id !== nextId.id){
            if(this.state.rowsData.length === 0){
            this.setState({ appointmentId: nextId.id})
            }
            else{
                alert("DAta not Submitted")
                this.handleOnSubmit()
            }
        }
        else {
             this.setState({appointmentId:nextId.id})
        }
    }

    render() {
        return (
            <div className="px-2 h-100">

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
                    <ScrollableTableBody>
                        {this.state.inputRows}
                    </ScrollableTableBody>
                </table>
                <div className="row">
                    <span className="btn btn-sm btn-secondary bg-default" onClick={this.addRow} style={{ marginLeft: "28px" }}>ADD</span>
                </div>
                <div className="row">
                    <button type="button" className="btn btn-success position-absolute" style={{ bottom: '10px', right: '10px' }}>Submit</button>
                </div>
            </div>
        )
    }
}

export default withSwr(PrescriptionView)