import createAppointmentsRoutes from "./appointments"

export default function initaializeRoutes() {
    console.log(this)
    createAppointmentsRoutes.call(this)
}