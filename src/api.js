const api = {
  auth: {
    login: "http://localhost:5000/auth/login",
    registr: "http://localhost:5000/auth/registration",
    github: "http://localhost:5000/github/auth",
    verification: "http://localhost:5000/auth/verification",
    githubTokenCheckout: "http://localhost:5000/github/token/checkout",
  },
  resume: {
    addResume: "http://localhost:5000/resume/add",
  },
}
export default api
