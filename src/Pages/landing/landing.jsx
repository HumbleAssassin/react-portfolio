import React from "react"
import { Link } from "react-router-dom"
import { FaFacebookF, FaFreeCodeCamp, FaGithub, FaGoogle, FaLinkedinIn } from "react-icons/fa"

import ninja from "../../assets/icon/ninja.png"

import "./landing.css"

function Hero() {
   return (
      <div className="hero">
         <div className="container">
            <div className="row align-items-end">
               <div className="col-md-8 content">
                  <p className="mb-0 text-light intro">Hi, My Name is Rajeev Thapa</p>
                  <h1 className="mb-4 text-white">I Design/ Code Awesome UIs</h1>
                  <p className="text-secondary mb-5">
                     The code never lies. It is the most fundamental things of all. You can blame
                     it, go mad at it, leave it alone and come back at it. But it never complains a
                     thing. It always waits calmly there and does what it is supposed to do. BE LIKE
                     A CODE.
                  </p>
                  <div className="pt-4">
                     <Link to="hireme" className="btn btn-danger rounded-pill me-4 fw-bold">
                        Hello World
                     </Link>
                     <a
                        href="https://drive.google.com/file/d/1c6SIBJALsMgaCpfcYT1jinaqg5clFQdJ/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-outline-light px-4 rounded-pill">
                        Download CV
                     </a>
                  </div>
               </div>
               <div className="col-md-4">
                  <img src={ninja} alt="" className="w-100 ninja d-none d-md-block" />
               </div>
               <div className="social-icons-bottom d-lg-none d-flex gap-3 mb-5 justify-content-start w-75">
                  <a
                     href="https://www.facebook.com/rajeev.thapa.73/"
                     rel="noreferrer"
                     target="_blank"
                     className="social-link facebook text-white">
                     <FaFacebookF />
                  </a>
                  <a
                     href="https://forum.freecodecamp.org/u/humbleassassin/summary"
                     target="_blank"
                     rel="noreferrer"
                     className="social-link free-code-camp text-white">
                     <FaFreeCodeCamp />
                  </a>
                  <a
                     href="mailto:thaparajeev1985@gmail.com"
                     target="_blank"
                     rel="noreferrer"
                     className="social-link google text-white">
                     <FaGoogle />
                  </a>
                  <a
                     href="https://github.com/HumbleAssassin"
                     rel="noreferrer"
                     target="_blank"
                     className="social-link github text-white">
                     <FaGithub />
                  </a>
                  <a
                     href="https://www.linkedin.com/in/rajeev-thapa-b1b5941b3/"
                     rel="noreferrer"
                     target="_blank"
                     className="social-link linkedin text-white">
                     <FaLinkedinIn />
                  </a>
               </div>
            </div>
            <div className="social-icons d-none d-lg-flex">
               <a href="facebook" target="_blank" className="social-link facebook text-white">
                  <FaFacebookF />
               </a>
               <a
                  href="https://forum.freecodecamp.org/u/humbleassassin/summary"
                  target="_blank"
                  rel="noreferrer"
                  className="social-link free-code-camp text-white">
                  <FaFreeCodeCamp />
               </a>
               <a
                  href="https://www.facebook.com/rajeev.thapa.73/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-link google text-white">
                  <i className="fab fa-google"></i>
               </a>
               <a
                  href="https://github.com/HumbleAssassin"
                  rel="noreferrer"
                  target="_blank"
                  className="social-link github text-white">
                  <i className="fab fa-github-alt"></i>
               </a>
               <a
                  href="https://www.linkedin.com/in/rajeev-thapa-b1b5941b3/"
                  rel="noreferrer"
                  target="_blank"
                  className="social-link linkedin text-white">
                  <i className="fab fa-linkedin-in"></i>
               </a>
            </div>
         </div>
      </div>
   )
}

export default Hero
