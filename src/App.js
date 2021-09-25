import React, { Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";

import Login from "./components/Login";
import DashBoard from "./components/DashBoard";
import SignUp from "./components/SignUp";
import AppointmentsView from "./components/appointments/AppointmentsView";
import NavigationBar from "./components/NavigationBar";
import HistoryView from "./components/history/HistoryView";
import Setting from "./components/Settings";
import AppointmentProvider from './providers/AppointmentProvider'

function App() {
  return (
    <div style={{ maxHeight: "100vh" }}>
        <Suspense fallback={<h1> Loading ...</h1>}>
          <NavigationBar />
          <Switch>
            <Route exact path="/" component={DashBoard} />
            <Route path="/login" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/doctor" render={(props) => <AppointmentProvider>
              <AppointmentsView {...props} />
            </AppointmentProvider>} />
            <Route path="/history" component={HistoryView} />
            <Route path="/settings" component={Setting} />
          </Switch>
        </Suspense>
    </div>
  );
}

export default App;
