import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <div className="home" id="home" data-scroll-section>
        <div className="home-heading">
          <motion.h1
          className="jose"
            initial={{
              y: 200,
            }}
            animate={{
              y: 0,
              transition: {
                delay: 0.25,
                // duration: 0.5,
                // type: "spring",
              },
            }}
          >
            Aryan Vedwal
          </motion.h1>
        </div>

        <div className="home-title">
          <motion.p
            initial={{
              y: 200,
            }}
            animate={{
              y: 0,
              transition: {
                delay: 0.5,
                // duration: 0.5,
                // type: "spring",
              },
            }}
          >
            Web Developer
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default Home;
