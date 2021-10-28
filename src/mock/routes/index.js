import createAppointmentsRoutes from "./appointments.routes"
import authRoutes from "./auth.routes"
import createHistoryRoutes from "./history.routes"

export const API_VERSION = "v1.0"

export default function initaializeRoutes() {
    console.log("Initializing routes")
    createAppointmentsRoutes.call(this)
    createHistoryRoutes.call(this)
    authRoutes.call(this)
}
