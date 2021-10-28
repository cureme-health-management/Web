export default function createHistoryRoutes() {
    const version = "v1.0"
    this.get(`${version}/history`, (schema, request) => schema.histories.all())
}
