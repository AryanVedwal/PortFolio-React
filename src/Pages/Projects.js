import React, { useState } from "react";
import { motion } from "framer-motion";
import { ProjectsData } from "../Comp/Data";
import { MoveRight } from "lucide-react";

const ProjectItem = () => {
  const [project, setProject] = useState(ProjectsData);

  return (
    <>
      {project.map((element, index) => (
        <motion.div
          className="project-item"
          key={index}
          id={`item-${index + 1}`}
          style={{ "--bg-image": `url(${element.imageUrl})` }}
        >
          <div className="item-data">
            <span className="item-index">
              {`0${index + 1}`}
              <motion.span
                initial={{
                  left: "-100%",
                }}
                whileInView={{
                  left: ["-100%", "0", "0", "100%"],
                  transition: {
                    ease: [0, 0.25, 0.75, 1],
                    duration: 0.75,
                    delay: 0.1,
                  },
                }}
                className="data-animate"
              ></motion.span>
            </span>
            <span className="project-name">
              {element.name}
              <motion.span
                initial={{
                  left: "-100%",
                }}
                whileInView={{
                  left: ["-100%", "0", "0", "100%"],
                  transition: {
                    ease: [0, 0.25, 0.75, 1],
                    duration: 0.75,
                    delay: 0.1,
                  },
                }}
                className="data-animate"
              ></motion.span>
            </span>
            <span className="project-des">
              {element.des}
              <motion.span
                initial={{
                  left: "-100%",
                }}
                whileInView={{
                  left: ["-100%", "0", "0", "100%"],
                  transition: {
                    ease: [0, 0.25, 0.75, 1],
                    duration: 0.75,
                    delay: 0.1,
                  },
                }}
                className="data-animate"
              ></motion.span>
            </span>

            <span className="project-link">
              <a
                href={element.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span> Preview </span>
                <span>
                  <MoveRight />
                </span>
              </a>

              <motion.span
                initial={{
                  left: "-100%",
                }}
                whileInView={{
                  left: ["-100%", "0", "0", "100%"],
                  transition: {
                    ease: [0, 0.25, 0.75, 1],
                    duration: 0.75,
                    delay: 0.1,
                  },
                }}
                className="data-animate"
              ></motion.span>
            </span>

            {element.githubUrl && (
              <span className="project-link">
                <a
                  href={element.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span> Source Code </span>
                  <span>
                    <MoveRight />
                  </span>
                </a>

                <motion.span
                  initial={{
                    left: "-100%",
                  }}
                  whileInView={{
                    left: ["-100%", "0", "0", "100%"],
                    transition: {
                      ease: [0, 0.25, 0.75, 1],
                      duration: 0.75,
                      delay: 0.1,
                    },
                  }}
                  className="data-animate"
                ></motion.span>
              </span>
            )}
          </div>

          <div className="item-image" data-scroll="">
            <img
              className="first-image"
              src={element.imageUrl}
              alt=""
              data-scroll=""
              data-scroll-delay="1"
              data-scroll-speed="30"
            />
            <img
              className="second-image"
              src={element.image2Url}
              alt=""
              data-scroll=""
              data-scroll-speed="35"
            />
          </div>
        </motion.div>
      ))}
    </>
  );
};

const Projects = () => {
  return (
    <>
      <div className="section" id="projects" data-scroll-section>
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
          {`Projects`}
        </motion.div>

        <div className="project-items">
          <ProjectItem />
        </div>
      </div>
    </>
  );
};

export default Projects;
