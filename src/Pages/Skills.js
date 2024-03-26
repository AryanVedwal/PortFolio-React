import React, { useState } from "react";
import { motion } from "framer-motion";
import { SkillsData } from "../Comp/Data";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { x: -250, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
    },
  },
};

const Skills = () => {
  const [skills, setSkills] = useState(SkillsData);

  return (
    <div className="section" id="skills" data-scroll-section>
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
        {`Skills`}
      </motion.div>

      <motion.div
        className="skill-box"
        variants={container}
        initial="hidden"
        whileInView="visible"
      >
        {skills.map((element, index) => (
          <motion.span
            variants={item}
            className="skill-item"
            key={index}
            style={{ "--bg-image": `url(${element.imageUrl})` }}
          >
            <span className="skill-name"> {element.name} </span>
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
