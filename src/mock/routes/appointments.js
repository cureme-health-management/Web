export default function createAppointmentsRoutes() {
    const version = 'v1.0';
    console.log(this)
    this.get(`${version}/appointments`, () => {
        return {appointments: [{
            id: 1,
            first_name: 'John',
            last_name: 'Doe',
            problem: 'Headache',
            gender: 'Male',
            age: 21,
            date_of_birth: '2000-03-10'
        }]}
    })
}