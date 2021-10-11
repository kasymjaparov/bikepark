import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./components/Header/Header"
import Container from "./components/Container"
import Footer from "./components/Footer/Footer"
import { BrowserRouter } from "react-router-dom"
import CommonRoute from "./routes/CommonRoute.js"

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <CommonRoute />
      </Container>
      <Footer />
    </BrowserRouter>
  )
}

export default App
