import React, { Component } from "react"
import "./aboutme.css"
import profile from "../../assets/images/Profile-BG-Removed.png"

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
               <div className="aboutMe-content mt-3 clearfix">
                  <img
                     src={profile}
                     alt=""
                     className="aboutMe-image img-fluid align-self-end float-end w-75"
                  />
                  <div className="aboutMe-content-text py-2">
                     <h5 className="aboutMe-subheading text-success fw-bolder">What Do I Do?</h5>
                     <p className="text text-secondary">
                        I not only create aesthetically appealing modern web design, but also code
                        them and make a responsive webpage. Nobody is perfect, people just get
                        better. And my biggest flex is that I am active learner. I move forward slow
                        to allow myselft to learn any concepts to its depth.
                     </p>
                     <h5 className="aboutMe-subheading text-success fw-bolder">How I Do It?</h5>
                     <p className="text text-secondary">
                        I not only create aesthetically appealing modern web design, but also code
                        them and make a responsive webpage. Nobody is perfect, people just get
                        better. And my biggest flex is that I am active learner. I move forward slow
                        to allow myselft to learn any concepts to its depth.
                     </p>
                  </div>
               </div>
            </div>
         </section>
      )
   }
}
