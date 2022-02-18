import { Routes, Route } from "react-router-dom"
import Navbar from "./navbar.component/Navbar"
import Hero from "./Pages/landing/landing"
import AboutMe from "./Pages/about.component/AboutMe"
import Portfolio from "./Pages/Portfolio/Portfolio"
import Contact from "./Pages/Contact/Contact"
import PageNotFound from "./Pages/PageNotFound/PageNotFound"
import "./App.css"
import HireMe from "./Pages/hireMe.component/HireMe"
import Footer from "./common/footer/Footer"

function App() {
   return (
      <>
         <Navbar></Navbar>
         <Routes>
            <Route path="/" element={<Hero />}></Route>
            <Route path="about-me" element={<AboutMe />}></Route>
            <Route path="portfolio" element={<Portfolio />}></Route>
            <Route path="about-me" element={<AboutMe />}></Route>
            <Route path="contact" element={<Contact />}></Route>
            <Route path="hireme" element={<HireMe />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
         </Routes>
         <Footer />
      </>
   )
}

export default App
