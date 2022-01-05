import { Routes, Route } from "react-router-dom"
import Navbar from "./navbar.component/Navbar"
import Hero from "./Pages/hero.component/Hero"
import AboutMe from "./Pages/about.component/AboutMe"
import Portfolio from "./Pages/Portfolio/Portfolio"
import Contact from "./Pages/Contact/Contact"
import "./App.css"

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
         </Routes>
      </>
   )
}

export default App
