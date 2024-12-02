import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../styles/blog.module.css";
import { Box, Container, Grid } from "@mui/material";
import { Button } from "@mui/material";
import nature from "../../images/healthtips.jpg";
import week from "../../images/week-plan.jpg";

const Blogs = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundColor: "var(--backgroundColor)",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          boxShadow: "rgba(0, 0, 0, 0.2) 0px 3px 3px 0px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            display: "inline-block",
            margin: "0 auto",
            padding: "0.8rem",
          }}
        >
          Bài viết
        </h1>
      </div>
      <Container maxWidth="lg">
        <Box sx={{ mt: "2rem", mx: "2rem", pb: "8rem" }}>
          <Grid container spacing={3}>
            <Grid item sm={6} lg={4} xs={12}>
              <div style={{ width: "100%" }} className={styles.cardContainer}>
                <div className={styles.cardImage}>
                  <img src={nature} />
                </div>
                <div className={styles.cardBody}>
                  <span className={styles.cardBadge}>Dinh dưỡng</span>
                  <h1 style={{ textAlign: "start" }}>
                    Tại sao thực phẩm lành mạnh lại quan trọng trong cuộc sống
                    hàng ngày?
                  </h1>
                  <p className={styles.cardBubtitle}>
                    Bởi vì thói quen ăn uống không lành mạnh không chỉ làm giảm
                    sức khỏe thể chất của bạn....
                  </p>
                  <div className={styles.cardAuthor}>
                    <Button
                      variant="outlined"
                      onClick={() => navigate("/blog/healthyliving")}
                      className={styles.btnInfo}
                    >
                      Đọc thêm
                    </Button>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item sm={6} lg={4} xs={12}>
              <div style={{ width: "100%" }} className={styles.cardContainer}>
                <div className={styles.cardImage}>
                  <img src={week} alt="a brand new sports car" />
                </div>
                <div className={styles.cardBody}>
                  <span className={styles.cardBadge}>Chế độ ăn hàng ngày</span>
                  <h1 style={{ textAlign: "start" }}>
                    Tại sao việc lên kế hoạch bữa ăn lại quan trọng?
                  </h1>
                  <p className={styles.cardBubtitle}>
                    Lên kế hoạch bữa ăn là quá trình quyết định những món ăn cho
                    một khoảng thời gian nhất định...
                  </p>
                  <div className={styles.cardAuthor}>
                    <Button
                      variant="outlined"
                      onClick={() => navigate("/blog/diet")}
                    >
                      Đọc thêm
                    </Button>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Blogs;
