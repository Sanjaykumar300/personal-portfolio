import React from "react";
import "../projects.css";

const Projects = () => {
  return (
    <>
      <section id="project">
        <p class="section-container-p1">Browse My Recent</p>
        <h1 class="Name">Projects</h1>
        <div className="experience-details-container">
          <div className="about-container">
            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src="/project-1.jpg"
                  alt="Project 1"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">
                Project One
              </h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => (window.location.href = "https://github.com/Sanjaykumar300/qrcode")}
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => (window.location.href = "https://sanjaykumar300.github.io/qrcode/")}
                >
                  Live Demo
                </button>
              </div>
            </div>

            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src="/project-2.jpg"
                  alt="Project 2"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">
                Project Two
              </h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => (window.location.href = "https://github.com/Sanjaykumar300/gym")}
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => (window.location.href = " https://sanjaykumar300.github.io/gym/")}
                >
                  Live Demo
                </button>
              </div>
            </div>

            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src="/project-3.jpg"
                  alt="Project 3"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">
                Project Three
              </h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => (window.location.href = "https://github.com/Sanjaykumar300/logomark")}
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => (window.location.href = "https://sanjaykumar300.github.io/logomark/")}
                >
                  Live Demo
                </button>
              </div>
            </div>
          </div>

          <img
        src="/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => (window.location.href = './#contact')}
      />
        </div>
      </section>
    </>
  );
};

export default Projects;
