import "bootstrap/dist/css/bootstrap.min.css"
import ReactNotification from "react-notifications-component"
import "react-notifications-component/dist/theme.css"
import "animate.css"
import { useSelector } from "react-redux"
import Header from "./components/Header/Header"
import Container from "./components/Container"
import Footer from "./components/Footer/Footer"
import { BrowserRouter } from "react-router-dom"
import CommonRoute from "./routes/CommonRoute.js"
import PrivateRoute from "./routes/PrivateRoute"

function App() {
  const success =
    useSelector(state => state.auth.login.success) ||
    window.sessionStorage.getItem("token")
  return (
    <BrowserRouter>
      <ReactNotification isMobile={true} />
      <Container>
        <Header />
        {!success ? <CommonRoute /> : <PrivateRoute />}
      </Container>
      <Footer />
    </BrowserRouter>
  )
}

export default App
