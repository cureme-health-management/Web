import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import "./index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import { createMockServer } from "./mock/server"
import { Provider } from "react-redux"
import { store } from "./modules/store"

// eslint-disable-next-line no-undef
if (process.env.NODE_ENV === "development") {
    createMockServer({ environment: "development" })
}

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById("root")
)

serviceWorker.unregister()
