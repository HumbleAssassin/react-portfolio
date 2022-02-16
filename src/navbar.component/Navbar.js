import React from "react"
import { NavLink } from "react-router-dom"
import { FaHome, FaInfo, FaBriefcase, FaEnvelopeOpenText } from "react-icons/fa"
import "./navbar.css"
import Logo from "../common/logo/Logo"

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
                  <li className="nav-item ms-3">
                     <NavLink to="/" className="nav-link">
                        Home <FaHome />
                     </NavLink>
                  </li>
                  <li className="nav-item ms-3">
                     <NavLink to="/about-me" className="nav-link">
                        About Me <FaInfo />
                     </NavLink>
                  </li>
                  <li className="nav-item ms-3">
                     <NavLink to="/portfolio" className="nav-link">
                        Portfolio <FaBriefcase />
                     </NavLink>
                  </li>
                  <li className="nav-item ms-3">
                     <NavLink to="/contact" className="nav-link">
                        Contact <FaEnvelopeOpenText />
                     </NavLink>
                  </li>
                  <li className="nav-item ms-lg-5">
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
