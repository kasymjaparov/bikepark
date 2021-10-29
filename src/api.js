const root = "http://localhost:5000"
const api = {
  auth: {
    login: `${root}/auth/login`,
    registration: `${root}/auth/registration`,
    verification: `${root}/auth/activation`,
  },
  bikes: {
    getAll: `${root}/bike/getAll`,
  },
}
export default api
