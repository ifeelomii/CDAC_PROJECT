// AdminLogin.js
import React, { useState } from "react";
import "./AdminLogin.css";
import { Link } from "react-router-dom";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Regex pattern for username: alphanumeric characters only, minimum length of 4
    const usernameRegex = /^[a-zA-Z0-9]{4,}$/;
    // Regex pattern for password: at least one uppercase, one lowercase, one digit, one special character, minimum length of 8
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/;

    if (!usernameRegex.test(username)) {
      setErrorMessage(
        "Username must be alphanumeric and at least 4 characters long"
      );
      return;
    }

    if (!passwordRegex.test(password)) {
      setErrorMessage(
        "Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 8 characters long"
      );
      return;
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
        {errorMessage && (
          <p className="admin-login-error-message">{errorMessage}</p>
        )}
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

export default AdminLogin;
