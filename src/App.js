import "bootstrap/dist/css/bootstrap.min.css"
import { routes } from "modules/router/config"
import React, { Suspense } from "react"
import { Route, Switch } from "react-router-dom"
import NavigationBar from "./features/NavigationBar"

function App() {
    return (
        <div style={{ maxHeight: "100vh" }}>
            <Suspense fallback={<h1> Loading ...</h1>}>
                <NavigationBar />
                <Switch>
                    {routes.map((route) => (
                        <Route key={route.path} {...route} />
                    ))}
                </Switch>
            </Suspense>
        </div>
    )
}

export default App
