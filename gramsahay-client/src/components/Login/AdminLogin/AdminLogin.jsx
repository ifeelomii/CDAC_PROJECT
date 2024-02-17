// AdminLogin.js
import React, { useState } from "react";
import "./AdminLogin.css";
import { Link, useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();

    /* PREVENTS EMPTY USERNAME OR PASSWORD
    if (username === "" || password === "") {
      setErrorMessage("Please enter both username and password.");
    }*/

    if (username === "Omkarware003" && password === "omkar") {
      localStorage.setItem("adminusername", username);
      navigate(`/admins/dashboard/${username}`);
    }
    
    // Here you can perform actual login logic
    console.log("Login successful");
    // Reset the form after successful login
    setUsername("");
    setPassword("");
    setErrorMessage("");
  };

  return (
    <>
      <div className="admin-login-container">
        <h2>Admin Login</h2>
        {/* {errorMessage && (
          <p className="admin-login-error-message">{errorMessage}</p>
        )} */}
        <form onSubmit={handleLogin}>
          <div id="admin-login-form">
            <div className="form-group">
              <label>Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-primary" id="submit">
              Login
            </button>
          </div>
        </form>
      </div>
      <div id="admin-bottom-seperator"></div>
    </>
  );
};

export default AdminLogin;
