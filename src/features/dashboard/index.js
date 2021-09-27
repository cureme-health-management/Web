import React, { Component } from "react"
import styled from "styled-components"

const DashboardContainer = styled.div`
    max-height: calc(100vh - 100px);
    text-align: center;
    margin-top: calc(50vh - 100px);
`

export default class DashBoard extends Component {
    render() {
        return (
            <DashboardContainer>
                <h5>Dashboard Component</h5>
            </DashboardContainer>
        )
    }
}
