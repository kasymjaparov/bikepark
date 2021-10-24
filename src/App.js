import "bootstrap/dist/css/bootstrap.min.css"
import ReactNotification from "react-notifications-component"
import "react-notifications-component/dist/theme.css"
import "animate.css"
import { useDispatch, useSelector } from "react-redux"
import Header from "./components/Header/Header"
import Container from "./components/Container"
import Footer from "./components/Footer/Footer"
import { BrowserRouter } from "react-router-dom"
import CommonRoute from "./routes/CommonRoute.js"
import PrivateRoute from "./routes/PrivateRoute"

function App() {
  const loginState = useSelector(state => state.auth.login)
  return (
    <BrowserRouter>
      <ReactNotification isMobile={true} />
      <Container>
        <Header />
        {false ? <CommonRoute /> : <PrivateRoute />}
        {/* {!loginState.success ? <CommonRoute /> : <PrivateRoute />} */}
      </Container>
      <Footer />
    </BrowserRouter>
  )
}

export default App
