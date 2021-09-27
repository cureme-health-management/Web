import React, { Suspense } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Switch, Route } from "react-router-dom"

import Login from "./features/Login"
import DashBoard from "./features/dashboard"
import SignUp from "./features/SignUp"
import AppointmentsView from "./features/appointments/AppointmentsView"
import NavigationBar from "./features/NavigationBar"
import HistoryView from "./features/history/HistoryView"
import Setting from "./features/Settings"
import AppointmentProvider from "./providers/AppointmentProvider"

function App() {
    return (
        <div style={{ maxHeight: "100vh" }}>
            <Suspense fallback={<h1> Loading ...</h1>}>
                <NavigationBar />
                <Switch>
                    <Route exact path="/" component={DashBoard} />
                    <Route path="/login" component={Login} />
                    <Route path="/sign-up" component={SignUp} />
                    <Route
                        path="/doctor"
                        render={(props) => (
                            <AppointmentProvider>
                                <AppointmentsView {...props} />
                            </AppointmentProvider>
                        )}
                    />
                    <Route path="/history" component={HistoryView} />
                    <Route path="/settings" component={Setting} />
                </Switch>
            </Suspense>
        </div>
    )
}

export default App
