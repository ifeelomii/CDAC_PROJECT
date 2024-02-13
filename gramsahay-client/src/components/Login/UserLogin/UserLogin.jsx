import React, { useState } from "react";
import "./UserLogin.css";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";
import { MainFooter } from "../../Footer/MainFooter";

const UserLogin = () => {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Here you can perform login authentication
    console.log("Login submitted with:", loginUsername, loginPassword);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    // Here you can perform registration logic, like validating passwords match, etc.
    if (registerPassword !== confirmPassword) {
      setError("Passwords do not match");
    } else {
      // Here you can perform further registration logic
      console.log(
        "Registration submitted with:",
        registerUsername,
        registerPassword
      );
      setError("");
    }
  };

  const isStrongPassword = (password) => {
    // Password must be at least 8 characters long and contain at least one letter and one number
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
  };

  return (
    <>
      <div className="user-login-container">
        <h2>User Login</h2>
        <form onSubmit={handleLoginSubmit}>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              value={loginUsername}
              onChange={(e) => setLoginUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" id="submit">Login</button>
        </form>
        <div>
          Not a user?{" "}
          <Link to="/user/registeruser" id="user-register">
            Register Now !
          </Link>
        </div>
      </div>
        <div id="bottom-seperator"></div>
    </>
  );
};

export default UserLogin;
