import React from "react";
import styles from "../../styles/home.module.css";
import { motion } from "framer-motion";

const imgVariants = {
  offscreen: {
    y: 200,
    opacity: 0.1,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
    },
  },
};

const About = () => {
  return (
    <div>
      <h1 className={styles.aboutTitle}>About Us</h1>
      <div className={styles.why}>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          className={styles.imageWrapper}
        >
          <motion.img
            variants={imgVariants}
            className={styles.whyImg}
            src="/static/img/why-1.png"
            alt="Why Choose Us"
          />
        </motion.div>
        <motion.div className={styles.text}>
          Relax, We will take care of your healthy DIET
        </motion.div>
      </div>

      <div
        className={`${styles.why} ${styles.rev}`}
        style={{ backgroundColor: "#f6f6f6" }}
      >
        <motion.div className={styles.text}>
          Just take a snap, And know what you are taking
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          className={styles.imageWrapper}
        >
          <motion.img
            variants={imgVariants}
            className={styles.whyImg}
            src="/static/img/why-2.png"
            alt="Snap and Know"
          />
        </motion.div>
      </div>

      <div className={styles.why}>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          className={styles.imageWrapper}
        >
          <motion.img
            variants={imgVariants}
            className={styles.whyImg}
            src="/static/img/why-3.png"
            alt="Analytics"
          />
        </motion.div>
        <motion.div className={styles.text}>
          We let you track and compare your diet over past week by smooth
          analytics
        </motion.div>
      </div>
    </div>
  );
};

export default About;
