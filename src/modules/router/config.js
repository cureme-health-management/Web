import ConfigureAppointmentsView from "features/appointments/view/ConfigureAppointmentsView"
import DashBoard from "features/dashboard"
import ConfigureHistoryView from "features/history/ConfigureHistoryView"
import Login from "features/Login"
import Setting from "features/Settings"
import SignUp from "features/SignUp"

export const routes = [
    {
        path: "/doctor",
        component: ConfigureAppointmentsView,
    },
    {
        path: "/history",
        component: ConfigureHistoryView,
    },
    {
        path: "/settings",
        component: Setting,
    },
    {
        path: "/",
        exact: true,
        component: DashBoard,
    },
    {
        path: "/login",
        component: Login,
    },
    {
        path: "/sign-up",
        component: SignUp,
    },
]
