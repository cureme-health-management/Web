import createAppointmentsRoutes from "./appointments"
import authRoutes from "./auth.routes"

export const API_VERSION = "v1.0"

export default function initaializeRoutes() {
  console.log("Initializing routes")
  createAppointmentsRoutes.call(this)
  authRoutes.call(this)
}
