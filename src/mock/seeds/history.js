export const initializeHistory = (server) => {
    server.create("history", {
        id: "1",
        medicines: ["paracetamol"],
        date: "2020-01-01",
    })
    server.create("history", {
        id: "2",
        medicines: ["abracoir"],
        date: "2020-01-01",
    })
    server.create("history", {
        id: "3",
        medicines: ["paracetamol"],
        date: "2020-01-01",
    })
}
