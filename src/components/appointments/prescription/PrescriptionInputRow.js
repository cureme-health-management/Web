import React, { Component } from 'react'

export default class PrescriptionInputRow extends Component {
    constructor(){
        super()
        }
    
    render() {
        return (
            <div className="container-fluid">
            <div className="row">
            <div className="col-md-auto">
                <label>{this.props.num}</label></div>
                <div className="col">
                <input type="text" placeholder="Medicine" class="form-control" aria-label="Sizing example input" 
                        aria-describedby="inputGroup-sizing-sm"/>
            </div>
            <div className="col-md-auto">
            <div class="input-group mb-3">
            <select class="custom-select" id="inputGroupSelect01">
              <option selected>Brand...</option>
              <option value="1">Brand 1</option>
              <option value="2">Brand 2</option>
              <option value="3">Brand 3</option>
             </select></div>
            </div>
            <div className="col">
                <input type="text" placeholder="strength" class="form-control" aria-label="Sizing example input" 
                        aria-describedby="inputGroup-sizing-sm"/>
            </div>
            <div className="col-md-auto">
            <div class="input-group mb-3">
            <select class="custom-select" id="inputGroupSelect01">
              <option selected>Tablet</option>
              <option value="1">Syrup</option>
              <option value="2">Injection</option>
             </select></div>
            </div>
            <div className="col-md-auto">
            <div class="input-group mb-3">
            <select class="custom-select" id="inputGroupSelect01">
              <option selected>1</option>
              <option value="1">2</option>
              <option value="2">3</option>
              <option value="3">4</option>
             </select></div>
            </div>
            <div className="col">
                <input type="text" placeholder="freq" class="form-control" aria-label="Sizing example input" 
                        aria-describedby="inputGroup-sizing-sm"/>
            </div>
            <div className="col-md-auto">
            <div class="input-group mb-3">
            <select class="custom-select" id="inputGroupSelect01">
              <option selected>After Meal</option>
              <option value="1">Before Meal</option>
              <option value="2">Morning</option>
             </select></div>
             </div>
             <div className="col font-weight-bold">
                 <span className="btn btn-sm btn-secondary bg-default" onClick={this.delRow}>Del</span></div>
            </div>
            </div>
            
        )
    }
}
