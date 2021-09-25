import { createServer } from "miragejs"
import initaializeRoutes  from "./routes"


export const createMockServer = ({environment = "test"}) => {
    const server = createServer({
        environment,
        routes() {
            initaializeRoutes.call(this)
            this.namespace = "api"
            this.get("/users", () => {
                return { users: [{ id: 1, name: "Bob" }] }
            }
            )
        }
    })
    return server
}