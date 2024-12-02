import { Box } from "@mui/material";
import { Container } from "@mui/system";
import { useSnackbar } from "notistack";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";
import { API } from "../../services/apis";
import { googleOauthPopup } from "../../services/firebase";
import "../../styles/auth.modules.css";

const Signin = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { fetchTodaysConsumption, setmaxCalories, fetchWeekData, setuserInfo } =
    useContext(AppContext);
  const [state, setstate] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setisLoading] = useState(false);
  const handleSignIn = async () => {
    if (state.email.trim() === "" || state.password.trim() === "") {
      enqueueSnackbar("Please fill all details", { variant: "error" });
      return;
    }
    setisLoading(true);
    try {
      const res = await API.login({
        email: state.email,
        password: state.password,
      });
      localStorage.setItem("token", res.token);
      localStorage.setItem("userInfo", JSON.stringify(res.user));
      if (res.user.IS_LOGIN_PROCESS_COMPLETE) {
        setuserInfo(res.user);
        setmaxCalories(res.maxCalories);
        navigate("/dashboard");
        fetchTodaysConsumption();
        fetchWeekData();
      } else {
        navigate("/userInitialForm");
      }
    } catch (err) {
      enqueueSnackbar(err.response.data.msg, {
        variant: "error",
      });
    }
    setisLoading(false);
  };

  const handleGoogleOauth = async () => {
    setisLoading(true);
    try {
      const accessToken = await googleOauthPopup();
      const res = await API.signInWithGoogle({ accessToken });
      localStorage.setItem("token", res.token);
      localStorage.setItem("userInfo", JSON.stringify(res.user));

      if (res.user.IS_LOGIN_PROCESS_COMPLETE) {
        setuserInfo(res.user);
        setmaxCalories(res.maxCalories);
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

  return (
    <div className="auth-container">
      <img className="logo" src="/static/img/logo.png" alt="" />
      <Container maxWidth="sm" className="form-container">
        <Box className="form-box">
          <h1>Sign In</h1>
          <div className="form-content">
            <form>
              <label className="form-label">Email</label>
              <input
                value={state.email}
                onChange={(e) =>
                  setstate((prevState) => ({
                    ...prevState,
                    email: e.target.value,
                  }))
                }
                placeholder="myMail@mail.com"
                className="text-field"
                type="email"
              />
              <label className="form-label">Password</label>
              <input
                onChange={(e) =>
                  setstate((prevState) => ({
                    ...prevState,
                    password: e.target.value,
                  }))
                }
                value={state.password}
                className="text-field"
                type="password"
              />
            </form>
            <button
              disabled={isLoading}
              onClick={handleSignIn}
              className="btn"
              type="submit"
            >
              Sign In
            </button>
            <button
              disabled={isLoading}
              onClick={() => navigate("/signup")}
              className="switch-to-signup"
            >
              Don't have an account? Sign up
            </button>
          </div>
          <hr style={{ marginTop: "15px" }} />
          <button
            disabled={isLoading}
            onClick={handleGoogleOauth}
            className="btn-google"
          >
            <img src="/static/img/google_icon.png" alt="google icon" />
            <span> Login with Google</span>
          </button>
        </Box>
      </Container>
    </div>
  );
};

export default Signin;
