import "bootstrap/dist/css/bootstrap.min.css"
import ReactNotification from "react-notifications-component"
import "react-notifications-component/dist/theme.css"
import "animate.css"
import Header from "./components/Header/Header"
import Container from "./components/Container"
import Footer from "./components/Footer/Footer"
import { BrowserRouter } from "react-router-dom"
import CommonRoute from "./routes/CommonRoute.js"

function App() {
  return (
    <BrowserRouter>
      <ReactNotification isMobile={true} />
      <Container>
        <Header />
        <CommonRoute />
      </Container>
      <Footer />
    </BrowserRouter>
  )
}

export default App
