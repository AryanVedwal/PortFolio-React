import React from "react";
import { motion } from "framer-motion";
import ContactForm from "../Comp/ContactForm";

const Contact = () => {
  return (
    <div className="section" id="contact" data-scroll-section>
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
        {`Contact Me`}
      </motion.div>

      <ContactForm />
    </div>
  );
};

export default Contact;
