import React from "react"
import { Link } from "react-router-dom"
import { FaFacebookF, FaFreeCodeCamp, FaGithub, FaGoogle, FaLinkedinIn } from "react-icons/fa"
import AboutMe from "../about.component/AboutMe"

import ninja from "../../assets/icon/ninja.png"

import "./landing.css"

const socialMediaLinks = [
   {
      id: 1,
      name: "facebook",
      icon: <FaFacebookF />,
      url: "https://www.facebook.com/rajeev.thapa.73/",
   },
   {
      id: 2,
      name: "freecodecamp",
      icon: <FaFreeCodeCamp />,
      url: "https://forum.freecodecamp.org/u/humbleassassin/summary",
   },
   {
      id: 3,
      name: "google",
      icon: <FaGoogle />,
      url: "mailto:thaparajeev1985@gmail.com",
   },
   {
      id: 4,
      name: "github",
      icon: <FaGithub />,
      url: "https://github.com/HumbleAssassin",
   },
   {
      id: 5,
      name: "linkedin",
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/in/rajeev-thapa-b1b5941b3/",
   },
]

function Hero() {
   return (
      <main>
         <div className="hero">
            <div className="container">
               <div className="row align-items-end">
                  <div className="col-md-8 content">
                     <p className="mb-0 text-light intro">Hi, My Name is Rajeev Thapa</p>
                     <h1 className="mb-4 text-white">I Design/ Code Awesome UIs</h1>
                     <p className="text-secondary mb-5">
                        The code never lies. It is the most fundamental things of all. You can blame
                        it, go mad at it, leave it alone and come back at it. But it never complains
                        a thing. It always waits calmly there and does what it is supposed to do. BE
                        LIKE A CODE.
                     </p>
                     <div className="my-3">
                        <Link
                           to="hireme"
                           className="btn btn-danger rounded-pill px-4 me-4 fw-bold ">
                           Hire Me
                        </Link>
                        <a
                           href="https://drive.google.com/file/d/1c6SIBJALsMgaCpfcYT1jinaqg5clFQdJ/view?usp=sharing"
                           rel="noreferrer"
                           download
                           className="btn btn-outline-light px-4 rounded-pill">
                           Download CV
                        </a>
                     </div>
                  </div>
                  <div className="col-md-4">
                     <img src={ninja} alt="" className="w-100 ninja d-none d-md-block" />
                  </div>
                  <div className="social-icons-bottom d-lg-none d-flex gap-3 mb-5 justify-content-start w-75">
                     {socialMediaLinks.map(({ id, url, name, icon }) => (
                        <a
                           key={id}
                           href={url}
                           rel="noreferrer"
                           target="_blank"
                           className={`social-link ${name} text-white`}>
                           {icon}
                        </a>
                     ))}
                  </div>
               </div>
               <div className="social-icons d-none d-lg-flex">
                  {socialMediaLinks.map(({ id, url, name, icon }) => (
                     <a
                        key={id}
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        className={`social-link ${name} text-white`}>
                        {icon}
                     </a>
                  ))}
               </div>
            </div>
         </div>
         <AboutMe />
      </main>
   )
}

export default Hero
