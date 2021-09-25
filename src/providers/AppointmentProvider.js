import React, { Component } from 'react'
import {getAgeFromDate} from '../utils/date'

export const AppointmentContext = React.createContext()

export const AppointmentConsumer = AppointmentContext.Consumer

export default class AppointmentProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: 'hi',
            list: [],
            currentAppointment: {},
            loading: false
        }
        this.selectAppointment = (appt) => {
            const prescriptionInLocalStorage = JSON.parse(localStorage.getItem('current'))
            if (prescriptionInLocalStorage && prescriptionInLocalStorage.length !== 0) {
                //TODO * show a modal saying "There are unsaved changes"
            }
            this.setState({ currentAppointment: appt }, () => localStorage.removeItem('current'))
        }
    }

    setList = (list) => {
        this.setState({ list })
    }

    componentDidMount() {
        this.setState({ loading: true })
        fetch('/v1.0/appointments', {
            method: "GET",
            // mode: "cors",
            headers: {
                "Authorization": `Bearer ${localStorage.token}`
            }
        })
            .then(response => response.json())
            .then(response => {
                console.log(response)
                if (response.appointments.length > 0) {
                    let temp = []
                    response.appointments.map(a => {
                        const { appointmentId, date_of_birth, first_name, last_name, gender, patientId } = a
                        const y = date_of_birth.split('-')[0]
                        const m = date_of_birth.split('-')[1]
                        const d = date_of_birth.split('-')[2]
                        temp.push({
                            id: appointmentId,
                            firstName: first_name,
                            lastName: last_name,
                            gender: gender,
                            age: getAgeFromDate(new Date(y, m, d))
                        })
                    })
                    this.setState({ list: temp, currentAppointment: temp[0] });
                }
                this.setState({ loading: false })
            })
            .catch(err => {
                this.setState({ loading: false })
                console.log(err)
            })
    }

    render() {
        return (
            <AppointmentContext.Provider value={{
                data: this.state,
                select: this.selectAppointment
            }} >
                {this.props.children}
            </AppointmentContext.Provider>
        )
    }
}
