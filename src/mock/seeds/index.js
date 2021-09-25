export default function initializeSeeds(server) {
  server.create("user", {
    id: 1,
    username: "admin",
    password: "admin",
  })
}
