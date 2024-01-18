import React, { useState } from "react";
import{useNavigate} from "react-router-dom"
import "./Register.css";
import Login from "./Login";

const Register = ({closeModal}) => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname:"",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    // let new_error = "";
    const emailRegex = /^[^\s@]+@gmail\.com$/i;
    if (formData.firstname.length < 3) {
      alert("invalid name");
      return false;
    } else if (!formData.email.match(emailRegex)) {
      alert("invalid mail id");
    } else if (formData.password.length < 6) {
      alert("password must be greater than 6");
    } else if (formData.confirmPassword !== formData.password) {
      alert("password&conform password doesnt match");
    } else {
      return true;
    }
  };

  const handleOnRegister = (e) => {
    e.preventDefault();
    let resultoffun = validateForm();
    console.log(resultoffun);
    if (resultoffun) {
      console.log(formData);
      // Convert the object to a JSON string
      var userDataJSON = JSON.stringify(formData);

      // Store the JSON string in local storage
      localStorage.setItem("userData", userDataJSON);
      closeModal();
    } else {
      return;
    }
  }

  const handleModalClick = (e) => {
    // Prevent event propagation to the parent (backdrop)
    e.stopPropagation();
  };

  return (
    <div className="modal-wrapper-Resister" onClick={handleModalClick}>
      <form class="form">
        <p class="title">Register </p>
        <p class="message">Signup now and get full access to our app. </p>
        <div class="flex">
          <label>
            <input
              class="input"
              type="text"
              id="firstname"
              placeholder=""
              name="firstname"
              required=""
              onChange={handleChange}
            />
            <span>Firstname</span>
          </label>
          <label>
            <input
              class="input"
              type="text"
              id="lastname"
              name="lastname"
              placeholder=""
              required=""
              onChange={handleChange}
            />
            <span>Lastname</span>
          </label>
        </div>

        <label>
          <input
            class="input"
            type="email"
            id="email"
            name="email"
            placeholder=""
            required=""
            onChange={handleChange}
          />
          <span>Email</span>
        </label>

        <label>
          <input
            class="input"
            type="password"
            placeholder=""
            id="password"
            name="password"
            required=""
            onChange={handleChange}
          />
          <span>Password</span>
        </label>
        <label>
          <input
            class="input"
            type="password"
            placeholder=""
            id="confirmPassword"
            name="confirmPassword"
            required=""
            onChange={handleChange}
          />
          <span>Confirm password</span>
        </label>
        <button className="Register" onClick={handleOnRegister}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
