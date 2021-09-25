import { API_VERSION } from "."

export default function authRoutes() {
  this.post(`${API_VERSION}/auth`, (schema, request) => {
    const { username, password } = JSON.parse(request.requestBody)
    const user = schema.users.findBy({
      username,
    })
    if (user && user.attrs.password === password) {
      return {
        ...user.attrs,
        token: "123456789",
      }
    }
    return null
  })
}
