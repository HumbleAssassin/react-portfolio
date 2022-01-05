import React from "react"
import Button from "../../common/button.component/Button"
import ninja from "./ninja.png"

import "./hero.css"

function Hero() {
   return (
      <div className="hero">
         <div className="container">
            <div className="row align-items-end">
               <div className="col-md-8 content">
                  <p className="mb-0 text-light intro">
                     Hi, My Name is Rajeev Thapa
                  </p>
                  <h1 className="mb-4 text-white">
                     I Design/ Code Awesome UIs
                  </h1>
                  <p className="text-secondary mb-5">
                     The code never lies. It is the most fundamental things of
                     all. You can blame it, go mad at it, leave it alone and
                     come back at it. But it never complains a thing. It always
                     waits calmly there and does what it is supposed to do. BE
                     LIKE A CODE.
                  </p>
                  <div className="pt-4">
                     <Button
                        label="Hire Me"
                        utilityClasses="btn-danger rounded-pill me-4 fw-bold"
                     />
                     <Button
                        label="Download CV"
                        utilityClasses="btn-outline-light px-4 rounded-pill"
                     />
                  </div>
               </div>
               <div className="col-md-4">
                  <img
                     src={ninja}
                     alt=""
                     className="w-100 ninja d-none d-lg-block"
                  />
               </div>
               <div className="social-icons-bottom d-lg-none d-flex gap-3 mb-5 justify-content-start w-75">
                  <a
                     href="facebook"
                     target="_blank"
                     className="social-link facebook text-white">
                     <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                     href="freecodecamp"
                     target="_blank"
                     className="social-link free-code-camp text-white">
                     <i className="fab fa-free-code-camp"></i>
                  </a>
                  <a
                     href="facebook"
                     target="_blank"
                     className="social-link google text-white">
                     <i className="fab fa-google"></i>
                  </a>
                  <a
                     href="github"
                     target="_blank"
                     className="social-link github text-white">
                     <i className="fab fa-github-alt"></i>
                  </a>
                  <a
                     href="linkedin"
                     target="_blank"
                     className="social-link linkedin text-white">
                     <i className="fab fa-linkedin-in"></i>
                  </a>
               </div>
            </div>
            <div className="social-icons d-none d-lg-flex">
               <a href="facebook" target="_blank" className="social-link">
                  <i className="fab fa-facebook-f"></i>
               </a>
               <a href="freecodecamp" target="_blank" className="social-link">
                  <i className="fab fa-free-code-camp"></i>
               </a>
               <a href="facebook" target="_blank" className="social-link">
                  <i className="fab fa-google"></i>
               </a>
               <a href="github" target="_blank" className="social-link">
                  <i className="fab fa-github-alt"></i>
               </a>
               <a href="linkedin" target="_blank" className="social-link">
                  <i className="fab fa-linkedin-in"></i>
               </a>
            </div>
         </div>
      </div>
   )
}

export default Hero
