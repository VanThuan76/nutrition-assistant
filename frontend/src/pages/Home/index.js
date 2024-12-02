import React from "react";
import { useNavigate } from "react-router-dom";
import About from "./About";
import Services from "./Services";
import styles from "../../styles/home.module.css";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <div className={styles.heroSection}>
        <img
          className={styles.logo}
          src="/static/img/logo.png"
          alt="Logo"
        />
        <div className={styles.titleWrapper}>
          <img
            className={styles.title}
            src="/static/img/brandname.png"
            alt="Brandname"
          />
          <p className={styles.subtitle}>
            A Nutrition Assistant to control diet, manage food habits and keep
            good health.
          </p>
          <div className={styles.buttonGroup}>
            <button
              className={`${styles.homebtns} ${styles.signinBtn}`}
              onClick={() => {
                navigate("/signin");
              }}
            >
              Sign in
            </button>
            <span className={styles.divider}>/</span>
            <button
              className={`${styles.homebtns} ${styles.signupBtn}`}
              onClick={() => {
                navigate("/signup");
              }}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
      <About />
      <Services />
    </div>
  );
}
