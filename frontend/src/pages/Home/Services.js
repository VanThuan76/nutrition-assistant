import React from "react";
import styles from "../../styles/home.module.css";
import { motion } from "framer-motion";

const titleVariants = {
  offscreen: {
    x: 40,
  },
  onscreen: {
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
    },
  },
};

const descVariants = {
  offscreen: {
    x: 40,
  },
  onscreen: {
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.5,
    },
  },
};
const imgVariants = {
  offscreen: {
    x: -100,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.5,
    },
  },
};

const Services = () => {
  return (
    <div className={styles.servicesContainer}>
      <div>
        <h1 className={styles.servicesTitle}>Our Services</h1>

        <div className={styles.servicesLayout}>
          <motion.div className={styles.serviceItem}>
            <motion.img
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }}
              className={styles.serviceImg}
              variants={imgVariants}
              src="/static/img/services_dashboard.png"
              alt="Dashboard"
            />
            <div className={styles.serviceText}>
              <motion.h1
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
                variants={titleVariants}
                className={styles.serviceTitle}
              >
                Today's Health
              </motion.h1>
              <motion.p variants={descVariants} className={styles.serviceDesc}>
                Our main dashboard tracks today's calories progress along with
                the amount of nutrients consumed. And we let you see today's
                food and nutrients associated with it.
              </motion.p>
            </div>
          </motion.div>

          <motion.div className={styles.serviceItem}>
            <motion.img
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }}
              className={styles.serviceImg}
              variants={imgVariants}
              src="/static/img/analytic.png"
              alt="Weekly Report"
            />
            <div className={styles.serviceText}>
              <motion.h1
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
                variants={titleVariants}
                className={styles.serviceTitle}
              >
                Detailed Reports
              </motion.h1>
              <motion.p variants={descVariants} className={styles.serviceDesc}>
                Our Analytic Charts give you detailed analysis about your daily
                intake of nutrients. You can track your food along with
                Nutrients for the past 7 days.
              </motion.p>
            </div>
          </motion.div>
        </div>

        <div className={styles.servicesLayout}>
          <motion.div className={styles.serviceItem}>
            <motion.img
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }}
              variants={imgVariants}
              className={styles.serviceImg}
              src="/static/img/food.png"
              alt="Food Tracking"
            />
            <div className={styles.serviceText}>
              <motion.h1
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
                variants={titleVariants}
                className={styles.serviceTitle}
              >
                Tracking Meals
              </motion.h1>
              <motion.p variants={descVariants} className={styles.serviceDesc}>
                Yes, you can see what you have been eating for a week. You can
                be aware of the food items you consume. This will give you great
                insight into what needs to be controlled and what doesn't. This
                time you will never forget what you ate!😝
              </motion.p>
            </div>
          </motion.div>

          <motion.div className={styles.serviceItem}>
            <motion.img
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }}
              variants={imgVariants}
              className={styles.serviceImg}
              src="/static/img/services_details.png"
              alt="Capture Details"
            />
            <div className={styles.serviceText}>
              <motion.h1
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
                variants={titleVariants}
                className={styles.serviceTitle}
              >
                Capture And Obtain
              </motion.h1>
              <motion.p variants={descVariants} className={styles.serviceDesc}>
                After capturing or uploading the image, we will provide total
                calories and all nutrients you will acquire. You can cancel or
                add the food to your diary.
              </motion.p>
            </div>
          </motion.div>
        </div>

        <div className={styles.servicesLayout}>
          <motion.div className={styles.serviceItem}>
            <motion.img
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }}
              variants={imgVariants}
              className={styles.serviceImg}
              src="/static/img/services_blog.png"
              alt="Blog"
            />
            <div className={styles.serviceText}>
              <motion.h1
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
                variants={titleVariants}
                className={styles.serviceTitle}
              >
                Everything You Need To Know
              </motion.h1>
              <motion.p variants={descVariants} className={styles.serviceDesc}>
                Our Blog section provides you with detailed research about
                foods, nutrients, healthy diet plans, food categories based on
                nutrients, and successful diet plans based on your body goals.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
