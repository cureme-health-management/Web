import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import Doctor from "./components/doctor.component";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/sign-in" component={Login} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/doctor" component={Doctor} />
      </Switch>
    </Router>
  );
}

export default App;
