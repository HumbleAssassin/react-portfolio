import React, { Component } from "react"
import profile from "../../assets/images/Profile-BG-Removed.png"
import {
   SiAdobephotoshop,
   SiHtml5,
   SiCss3,
   SiJavascript,
   SiBootstrap,
   SiSass,
   SiReact,
   SiGithub,
   SiAdobexd,
} from "react-icons/si"

import "./aboutme.css"

const languagesAndFrameworks = [
   {
      id: 1,
      name: "Photoshop",
      color: "#8BC3FC",
      icon: <SiAdobephotoshop />,
   },
   {
      id: 2,
      name: "XD",
      color: "#FF2BC3",
      icon: <SiAdobexd />,
   },
   {
      id: 3,
      name: "HTML",
      color: "#e34c26",
      icon: <SiHtml5 />,
   },
   {
      id: 4,
      name: "CSS3",
      color: "#264de4",
      icon: <SiCss3 />,
   },
   {
      id: 5,
      name: "Javascript",
      color: "#f0db4f",
      icon: <SiJavascript />,
   },
   {
      id: 6,
      name: "Bootstrap",
      color: "#7952B3",
      icon: <SiBootstrap />,
   },
   {
      id: 7,
      name: "Sass",
      color: "#cd6799",
      icon: <SiSass />,
   },
   {
      id: 8,
      name: "React",
      color: "#61DBFB",
      icon: <SiReact />,
   },
   {
      id: 9,
      name: "GitHub",
      color: "##61DBFB",
      icon: <SiGithub />,
   },
]

export default class AboutMe extends Component {
   render() {
      return (
         <section className="aboutMe pt-5">
            <div className="container">
               <h2 className="aboutMe-title mb-0">About Me</h2>
               <div className="btn-group d-block">
                  <button className="btn btn-danger aboutMe-btn">Front End </button>
                  <button className="btn btn-danger aboutMe-btn">Design </button>
                  <button className="btn btn-danger aboutMe-btn">Active Learner </button>
                  <button className="btn btn-danger aboutMe-btn">Dive Deeper</button>
               </div>
               <div className="aboutMe-content mt-5 clearfix">
                  <img
                     src={profile}
                     alt=""
                     className="aboutMe-image img-fluid float-start rotate-180 w-75 ms-0"
                  />
                  <div className="aboutMe-content-text py-5">
                     <p className="text">
                        I design/ code aesthetically appealing, responsive and modern web layouts. I
                        am a active learner. I move forward slow to allow myselft to learn any
                        concepts to its depth.
                     </p>
                     <p className="text">
                        I am passionate learner of web technology and a wannabe front-end developer.
                     </p>
                     <h3 className="text-info my-md-5 py-2">Tools I use</h3>
                     <div className="skills text-center">
                        {languagesAndFrameworks.map(({ id, name, icon, color }) => (
                           <div
                              className="card bg-dark text-white d-inline-block m-3 shadow"
                              key={id}>
                              <div className="card-body pt-0 py-2">
                                 <h4 className="card-title pt-2" style={{ color: color }}>
                                    {icon}
                                 </h4>
                                 <h6 className="card-text">{name}</h6>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </section>
      )
   }
}
