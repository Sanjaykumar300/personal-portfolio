import React from "react";
import "../section.css";

const Profile = () => {
  return (
    <>
      <section id="profile">
        <div className="section-profile">
          <img src="/pic-profile.png" alt="" />
        </div>
        <div className="section text">
          <p className="section-container-p1">Hello, I'm</p>
          <h1 className="Name">Sanjay Kumar</h1>
          <p className="section-container-p2">Frontend Developer</p>
          <div className="btn-container">
            <button
              className="btn btn-color-1"
              onClick={() => {
                window.open("/resume.pdf");
              }}
            >
              Download Cv
            </button>
            <button
              className="btn btn-color-2 "
              onClick={() => (window.location.href = "#contact")}
            >
              Contact Info
            </button>
          </div>
          <div className="socials-container">
            <img
              src="/linkedin.png"
              alt=""
              className="icon"
              onClick={() => {
                window.location.href =
                  "https://www.linkedin.com/in/sanjay-kumar-v-64896a220?original_referer=";
              }}
            />
            <img
              src="/github.png"
              alt=""
              className="icon"
              onClick={() => {
                window.location.href = "https://github.com/Sanjaykumar300";
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
