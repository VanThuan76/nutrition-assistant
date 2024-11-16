import React from "react";
import { useNavigate } from "react-router-dom";
import About from "./About";
import styles from "../../styles/home.module.css";
import Services from "./Services";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          minHeight: "80vh",
          backgroundImage: "url('/static/img/new-2-hero-background.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          padding: "0 0 2rem 0",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "nowrap",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <img
            className={styles.logo}
            style={{ margin: "20px 0 0 20px" }}
            src="/static/img/logo_crop.png"
            alt=""
          />
        </div>
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <img
            className={styles.title}
            src="/static/img/brandname.png"
            alt=""
          />
          <p
            style={{
              color: "#000",
              fontSize: "18px",
              marginTop: "2px",
              width: "80%",
              textAlign: "center",
            }}
          >
            A Nutrition Assistant to control diet, manage food habits and keep
            good health.
          </p>
          <div>
            <button
              className={styles.homebtns}
              style={{
                color: "#fff",
                backgroundColor: "var(--themecolor)",

                borderRadius: "5px",
                boxShadow: "rgba(0, 0, 0, 0.2) 0px 20px 30px",
                border: "1px solid var(--themecolor)",
              }}
              onClick={(e) => {
                navigate("/signin");
              }}
            >
              Sign in
            </button>
            <span
              style={{
                color: "#fff",
                fontSize: "22px",
                fontWeight: 600,
                margin: "0 10px",
              }}
            >
              /
            </span>
            <button
              className={styles.homebtns}
              style={{
                color: "#fff",
                border: "1px solid var(--themecolor)",

                backgroundColor: "var(--themecolor)",

                borderRadius: "5px",
                boxShadow: "rgba(0, 0, 0, 0.2) 0px 20px 30px",
              }}
              onClick={(e) => {
                navigate("/signup");
              }}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
      <div style={{ height: "10vh" }}></div>
      <About />
      <Services />
    </div>
  );
}
