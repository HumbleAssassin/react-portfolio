import React from "react"
import { Link } from "react-router-dom"
import "./navbar.css"

function Navbar() {
   return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark font-marcellus py-3">
         <div className="container">
            <div className="navbar-brand fw-bold">Rajeev Thapa</div>
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
                     <Link to="/" className="nav-link active">
                        Home
                     </Link>
                  </li>
                  <li className="nav-item ms-3">
                     <Link to="/about-me" className="nav-link">
                        About Me
                     </Link>
                  </li>
                  <li className="nav-item ms-3">
                     <Link to="/portfolio" className="nav-link">
                        Portfolio
                     </Link>
                  </li>
                  <li className="nav-item ms-3">
                     <Link to="/contact" className="nav-link">
                        Contact
                     </Link>
                  </li>
                  <li className="nav-item ms-lg-5">
                     <Link to="/" className="btn btn-danger ">
                        Hire Me
                     </Link>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   )
}

export default Navbar
