export default function createAppointmentsRoutes() {
    const version = "v1.0"
    this.get(`${version}/appointments`, (schema, request) =>
        schema.appointments.all()
    )
}
