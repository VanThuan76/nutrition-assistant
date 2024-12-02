import { Box } from "@mui/material";
import { Container } from "@mui/system";
import { useSnackbar } from "notistack";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";
import { API } from "../../services/apis";
import { googleOauthPopup } from "../../services/firebase";
import "../../styles/auth.modules.css";

const Signup = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { fetchTodaysConsumption, setmaxCalories, fetchWeekData, setuserInfo } =
    useContext(AppContext);
  const [state, setstate] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isLoading, setisLoading] = useState(false);

  const handleGoogleOauth = async () => {
    setisLoading(true);
    try {
      const accessToken = await googleOauthPopup();
      const res = await API.signInWithGoogle({ accessToken });
      localStorage.setItem("token", res.token);
      localStorage.setItem("userInfo", JSON.stringify(res.user));

      if (res.user.IS_LOGIN_PROCESS_COMPLETE) {
        setmaxCalories(res.maxCalories);
        setuserInfo(res.user);
        navigate("/dashboard");
        fetchTodaysConsumption();
        fetchWeekData();
      } else {
        navigate("/userInitialForm");
      }
    } catch (err) {
      enqueueSnackbar("Something went wrong", { variant: "error" });
    }
    setisLoading(false);
  };

  const handleSignup = async () => {
    if (state.username === "" || state.email === "" || state.password === "") {
      enqueueSnackbar("Please fill all details", { variant: "error" });
      return;
    }
    if (state.password !== state.confirmPassword) {
      enqueueSnackbar("Passwords don't match", { variant: "error" });
      return;
    }
    setisLoading(true);
    try {
      const res = await API.signup({
        email: state.email,
        password: state.password,
        username: state.username,
      });
      localStorage.setItem("token", res.token);
      localStorage.setItem("userInfo", JSON.stringify(res.user));
      navigate("/userInitialForm");
    } catch (err) {
      if (err.response) {
        console.error("Error Response:", err.response.data);
        enqueueSnackbar(err.response.data.msg || "Something went wrong", {
          variant: "error",
        });
      } else {
        console.error("Error:", err);
      }
    }
    setisLoading(false);
  };

  return (
    <div className="auth-container">
      <img className="logo" src="/static/img/logo.png" alt="" />
      <Container maxWidth="sm" className="form-container">
        <Box className="form-box">
          <h1>Sign Up</h1>
          <div className="form-content">
            <form>
              <label className="form-label">Username</label>
              <input
                value={state.username}
                onChange={(e) =>
                  setstate((prevState) => ({
                    ...prevState,
                    username: e.target.value,
                  }))
                }
                className="text-field"
                type="text"
              />
              <label className="form-label">Email</label>
              <input
                value={state.email}
                onChange={(e) =>
                  setstate((prevState) => ({
                    ...prevState,
                    email: e.target.value,
                  }))
                }
                className="text-field"
                type="email"
              />
              <label className="form-label">Password</label>
              <input
                value={state.password}
                onChange={(e) =>
                  setstate((prevState) => ({
                    ...prevState,
                    password: e.target.value,
                  }))
                }
                className="text-field"
                type="password"
              />
              <label className="form-label">Confirm Password</label>
              <input
                value={state.confirmPassword}
                onChange={(e) =>
                  setstate((prevState) => ({
                    ...prevState,
                    confirmPassword: e.target.value,
                  }))
                }
                className="text-field"
                type="password"
              />
            </form>
            <button
              disabled={isLoading}
              onClick={handleSignup}
              className="btn"
              type="submit"
            >
              Sign Up
            </button>
            <button
              disabled={isLoading}
              onClick={() => navigate("/signin")}
              className="switch-to-signup"
            >
              Already have an account? Sign in
            </button>
          </div>
          <hr style={{ marginTop: "15px" }} />
          <button
            disabled={isLoading}
            onClick={handleGoogleOauth}
            className="btn-google"
          >
            <img src="/static/img/google_icon.png" alt="google icon" />
            <span> Sign up with Google</span>
          </button>
        </Box>
      </Container>
    </div>
  );
};

export default Signup;
