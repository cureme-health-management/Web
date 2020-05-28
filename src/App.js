import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";

import Login from "./components/Login";
import SignUp from "./components/SignUp";
import AppointmentsView from "./components/appointments/AppointmentsView";
import NavigationBar from "./components/NavigationBar";
import HistoryView from "./components/history/HistoryView";
import Setting from "./components/Settings";

function App() {
  return (
    <div style={{maxHeight: "100vh"}}>
      <NavigationBar/>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/sign-in" component={Login} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/doctor" component={AppointmentsView} />
        <Route path="/history" component={HistoryView} />
        <Route path="/settings" component={Setting} />
      </Switch>
    </div>
  );
}

export default App;
