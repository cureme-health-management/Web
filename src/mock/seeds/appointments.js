export const initializeAppointmets = (server) => {
    server.create("appointment", {
        id: 1,
        first_name: "John",
        last_name: "Doe",
        problem: "Headache",
        gender: "Male",
        age: 21,
        date_of_birth: "2005-03-10",
    })
    server.create("appointment", {
        id: 2,
        first_name: "Peter",
        last_name: "Parker",
        problem: "Headache",
        gender: "Male",
        age: 21,
        date_of_birth: "2010-03-10",
    })
    server.create("appointment", {
        id: 3,
        first_name: "Steve",
        last_name: "Jobs",
        problem: "Headache",
        gender: "Male",
        age: 21,
        date_of_birth: "1990-03-10",
    })
}
