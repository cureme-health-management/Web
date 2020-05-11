import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";

import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Doctor from "./components/Doctor";
import AppNav from "./components/AppNav";
import HistoryDoctor from "./components/DoctorHistory";
import Setting from "./components/Settings";

function App() {
  return (
    <div>
      <AppNav/>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/sign-in" component={Login} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/doctor" component={Doctor} />
        <Route path="/history" component={HistoryDoctor} />
        <Route path="/settings" component={Setting} />
      </Switch>
    </div>
  );
}

export default App;
