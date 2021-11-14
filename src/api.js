const root =
  "https://intense-beyond-43314.herokuapp.com" || "http://localhost:5000"
const api = {
  auth: {
    login: `${root}/auth/login`,
    registration: `${root}/auth/registration`,
    verification: `${root}/auth/activation`,
  },
  bikes: {
    getAll: `${root}/bike/getAll`,
    getfiltered: `${root}/bike/getFiltered`,
    getFilters: `${root}/filters/getAll`,
  },
  order: {
    add: `${root}/order/new`,
    get: `${root}/order/getUsersOrders`,
    delete: `${root}/order/cancel`,
    extend: `${root}/order/extend`,
  },
}
export default api
