// GramsevakLogin.js
import React, { useState } from "react";
import "./GSLogin.css";
import { Link, Navigate, useNavigate } from "react-router-dom";

const GSLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "Omkarware003" && password === "omkar") {
      localStorage.setItem("gsusername",username)
      navigate(`/gramsevaks/dashboard/${localStorage.getItem("gsusername")}`);
      setError("");
    } else {
      setError("Invalid Username or password")
    }
  };

  return (
    <>
      <div className="gramsevak-login-container">
       {error && (
            <div className="gramsevak-login-error-message">{error}</div>
          )} 
        <h2>Gramsevak Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
              placeholder="Enter username"
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter password"
              required
            />
          </div>

          <button type="submit" id="submit">
            Login
          </button>
        </form>
      </div>
      <div id="bottom-seperator"></div>
    </>
  );
};

export default GSLogin;
