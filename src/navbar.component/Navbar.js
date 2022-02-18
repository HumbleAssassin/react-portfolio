import React from "react"

import { NavLink } from "react-router-dom"
import "./navbar.css"
import Logo from "../common/logo/Logo"

const navLinks = [
   {
      id: 1,
      url: "/",
      name: "Home",
   },
   {
      id: 2,
      url: "about-me",
      name: "About Me",
   },
   {
      id: 3,
      url: "portfolio",
      name: "Portfolio",
   },
   {
      id: 4,
      url: "contact",
      name: "Contact",
   },
]

function Navbar() {
   return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark font-marcellus py-3">
         <div className="container">
            <Logo BSClass="navbar-brand" />
            <button
               className="navbar-toggler"
               type="button"
               data-bs-toggle="collapse"
               data-bs-target="#navbarCollapse">
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
               <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-0 me-lg-0 text-end">
                  {navLinks.map((link) => (
                     <li className="nav-item ms-3" key={link.id}>
                        <NavLink to={link.url} className="nav-link">
                           {link.name}
                        </NavLink>
                     </li>
                  ))}
                  <li className="nav-item ms-lg-5 mt-4 mt-lg-0">
                     <NavLink to="/hireme" className="btn btn-danger ">
                        Hire Me
                     </NavLink>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   )
}

export default Navbar
