import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/homepage/Home"
import NavigationMenu from "./components/navigationMenu/NavigationMenu"
import Services from "./components/servicesPage/Services"
import Footer from "./components/footer/Footer"

function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationMenu />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/services" element={<Services />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
