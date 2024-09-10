import React from 'react';
import '../experience.css';
import '../About.css';

const Experience = () => {
  return (
    <>
      <section id="experience">
        <p className="section-container-p1">Explore My</p>
        <h1 className="Name">Experience</h1>
        <div className="experience-details-container">
          <div className="about-container">
            <div className="details-container">
              <h2 className="experience-sub-title">Frontend Development</h2>
              <div className="article-container">
                <article>
                  <img
                    src="/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>HTML</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img
                    src="/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>CSS</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img
                    src="/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>React Js</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src="/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>JavaScript</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img
                    src="/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>JQuery</h3>
                    <p>Experienced</p>
                  </div>
                </article>
              </div>
            </div>
            <div className="details-container">
  <h2 className="experience-sub-title">Backend and Other Technology</h2>
  <div className="article-container">
    <article>
      <img
        src="/checkmark.png"
        alt="Experience icon"
        className="icon"
      />
      <div>
        <h3>MS SQL</h3>
        <p>Experienced</p>
      </div>
    </article>
    <article>
      <img
        src="/checkmark.png"
        alt="Experience icon"
        className="icon"
      />
      <div>
        <h3>Node JS</h3>
        <p>Intermediate</p>
      </div>
    </article>
    <article>
      <img
        src="/checkmark.png"
        alt="Experience icon"
        className="icon"
      />
      <div>
        <h3>Express JS</h3>
        <p>Intermediate</p>
      </div>
    </article>
    <article>
      <img
        src="/checkmark.png"
        alt="Experience icon"
        className="icon"
      />
      <div>
        <h3>Git</h3>
        <p>Intermediate</p>
      </div>
    </article>
    <article>
      <img
        src="/checkmark.png"
        alt="Experience icon"
        className="icon"
      />
      <div>
        <h3>AWS</h3>
        <p>Intermediate</p>
      </div>
    </article>
  </div>
</div>

          </div>
        </div>
        <img
        src="/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => (window.location.href = './project')}
      />

      </section>
    </>
  );
};

export default Experience;
