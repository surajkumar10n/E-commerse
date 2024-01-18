import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import "./Login.css";
import Register from "./Register";
const Login = ({ closeModal,updateLoginState }) => {
  const navigate = useNavigate();
  const [isRegister, setIsRegister] = useState(false);
  const switchToRegister = () => {
    setIsRegister(true);
  };

  const switchToLogin = () => {
    setIsRegister(false);
  };

  const handleModalClick = (e) => {
    // Prevent event propagation to the parent (backdrop)
    e.stopPropagation();
  };

  const handleLogin = (e) => {
    e.preventDefault();
    var storedUserDataJSON = localStorage.getItem("userData");
    var storedUserData = JSON.parse(storedUserDataJSON);
    // console.log(storedUserData.username);
    var emaillog = document.getElementById("email").value;
    var passwordlog = document.getElementById("password").value;
    if (
      storedUserData.email === emaillog &&
      storedUserData.password === passwordlog
    ) {
      console.log("valid username");
      updateLoginState(true, storedUserData.firstname);
      closeModal();
      navigate("/");
    } else {
      alert("invalid credential");
    }
  };
  return (
    <>
      {isRegister ? (
        // Render the Register component if isRegister is true
        <>
          {/* <p>Register</p> */}
          <Register closeModal={closeModal} />
        </>
      ) : (
        // Render the Login form if isRegister is false

        <div className="modal-wrapper" onClick={handleModalClick}>
          <div class="login-box">
            <p>Login</p>
            <form>
              <div class="user-box">
                <input
                  required=""
                  name="email"
                  type="text"
                  id="email"
                  placeholder=""
                />
                <label>Email</label>
              </div>
              <div class="user-box">
                <input
                  required=""
                  name="password"
                  id="password"
                  type="password"
                  placeholder=""
                />
                <label>Password</label>
              </div>
              <button onClick={handleLogin}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Submit
              </button>
            </form>
            <p>
              Don't have an account?{" "}
              <span className="a2" onClick={switchToRegister}>
                Sign up!
              </span>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
