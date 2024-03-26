import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, File } from "lucide-react";

const About = () => {
  return (
    <>
      <div className="section" id="about" data-scroll-section>
        <motion.div
          className="section-head"
          data-scroll=""
          data-scroll-direction="horizontal"
          data-scroll-delay="0.18"
          data-scroll-speed="-10"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
        >
          {`About Me`}
        </motion.div>

        <div className="about-intro">
          <div className="about-image">
            <img src="/Images/Profile.png" alt="" />
          </div>
          <div className="about-text">
            <h1 className="jose" >Hi I'm Aryan Vedwal</h1> <br />
            <p>
              Welcome to my portfolio! I'm a graduate in Computer Science,
              specializing in full stack MERN development. I'm passionate about
              programming and always eager to learn and grow. With strong skills
              in JavaScript, React, and Node.js, I'm ready to contribute to
              exciting projects that align with my expertise.I have a keen
              interest in building user-friendly interfaces and optimizing web
              performance, striving to stay updated with the latest trends and
              technologies in web development.I am excited about the prospect of
              collaborating with like-minded professionals and contributing to
              impactful projects that push the boundaries of technology.
            </p>
          </div>
        </div>

        <div className="social-link">
          <span className="h-line"></span>
          <a
            href="https://github.com/AryanVedwal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="svg" />
          </a>
          <a
            href="https://www.linkedin.com/in/aryanvedwal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="svg" />
          </a>
          <a href="mailto:aryanvedwal01@gmail.com" target="_blank" rel="noopener noreferrer">
            <Mail className="svg" />
          </a>
          <a href="/public/index.html" download target="_blank" rel="noopener noreferrer">
            <File className="svg" />
          </a>
          <span className="h-line"></span>
        </div>
      </div>
    </>
  );
};

export default About;
