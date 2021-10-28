import { initializeAppointmets } from "./appointments"
import { initializeHistory } from "./history"

export default function initializeSeeds(server) {
    server.create("user", {
        id: 1,
        username: "admin",
        password: "admin",
    })
    initializeAppointmets(server)
    initializeHistory(server)
}
