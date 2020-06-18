import React, { Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import { SWRConfig } from 'swr'

import Login from "./components/Login";
import DashBoard from "./components/DashBoard";
import SignUp from "./components/SignUp";
import AppointmentsView from "./components/appointments/AppointmentsView";
import NavigationBar from "./components/NavigationBar";
import HistoryView from "./components/history/HistoryView";
import Setting from "./components/Settings";

const fetcher = url => fetch(url).then(res => res.json())

function App() {
  return (
    <div style={{ maxHeight: "100vh" }}>
      <SWRConfig
        value={{
          // refreshInterval: 5000,
          fetcher: fetcher,
          suspense: true
        }}
      >
        <Suspense fallback={<h1> Loading ...</h1>}>
          <NavigationBar />
          <Switch>
            <Route exact path="/" component={DashBoard} />
            <Route path="/login" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/doctor" component={AppointmentsView} />
            <Route path="/history" component={HistoryView} />
            <Route path="/settings" component={Setting} />
          </Switch>
        </Suspense>
      </SWRConfig>
    </div>
  );
}

export default App;
