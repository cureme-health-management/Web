import { createServer, Model } from "miragejs"
import initaializeRoutes from "./routes"
import initializeSeeds from "./seeds"

export const createMockServer = ({ environment = "test" }) => {
  const server = createServer({
    environment,
    models: {
      user: Model,
    },
    seeds(server) {
      initializeSeeds(server)
    },
    routes() {
      initaializeRoutes.call(this)
      this.namespace = "api"
      this.get("/users", () => {
        return { users: [{ id: 1, name: "Bob" }] }
      })
    },
  })
  return server
}
