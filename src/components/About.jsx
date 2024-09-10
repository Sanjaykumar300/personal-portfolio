import React from "react";
import "../About.css";

const About = () => {
  return (
    <>
      <section id="about">
        <p class="section-container-p1">Get To Know More</p>
        <h1 class="Name">About Me</h1>

        <div className="section-container">
          {/* <div className="section-pic-container">
            <img src="/profile-pic (2).png" alt="" className="about-pic" />
          </div> */}
          <div className="about-details-container">
            <div className="about-container">
              <div className="details-container">
                <img
                  src="/shield-check.png"
                  alt="Experience icon"
                  class="icon"
                />
                <h3>Certified</h3>
                <p>
                Full Stack Developer in <br />
                  Besant Technologies
                </p>
              </div>
              <div className="details-container">
                <img
                  src="/graduation-cap.png"
                  alt="Experience icon"
                  class="icon"
                />
                <h3>Education</h3>
                <p>
                  Bachelor of Engineering in<br />
                  Computer Science and Engineering
                </p>
              </div>
            </div>
            <div>
                <p>As a software developer, you specialize in creating and maintaining software applications that address user needs and business goals. With expertise in various programming languages and technologies, you focus on building efficient, scalable, and user-friendly solutions. Your passion for continuous learning and problem-solving drives you to stay updated with industry trends and deliver high-quality software products.</p>
            </div>
          </div>
        </div>
        <img
        src="/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => (window.location.href = './#experience')}
      />
      </section>
    </>
  );
};

export default About;
