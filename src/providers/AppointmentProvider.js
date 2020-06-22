import React, { Component } from 'react'

const AppointmentContext = React.createContext()

export const AppointmentConsumer = AppointmentContext.Consumer

export default class AppointmentProvider extends Component {
    state = {
        message: 'hi'
    }
    render() {
        return (
            <AppointmentContext.Provider value={this.state}>
                {this.props.children}
            </AppointmentContext.Provider>
        )
    }
}
