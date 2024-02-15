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

    if (username === "omkar" && password === "omkar") {
      navigate(`/users/alluserdetails/${username}`);
    }
    // Regular expression for validating username (6-12 alphanumeric characters)
    // const usernameRegex = /^[a-zA-Z0-9]{6,12}$/;

    // if (!usernameRegex.test(username)) {
    //   setError(
    //     "Username must be 6-12 characters long and contain only letters and numbers"
    //   );
    //   return;
    // }

    // Here you can perform authentication, such as checking credentials against a database
    // For simplicity, let's just log the username and password
    // console.log("Username:", username);
    // console.log("Password:", password);

    // Clear any previous error message
    setError("");
  };

  return (
    <>
      <div className="gramsevak-login-container">
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
          {/* {error && (
            <div className="gramsevak-login-error-message">{error}</div>
          )} */}
          <button type="submit" id="submit">Login</button>
        </form>
        <div>
          Not a user?{" "}
          <Link to="/gramsevak/registergramsevak" id="gs-register">
            Register Now !
          </Link>
        </div>
      </div>
      <div id="bottom-seperator"></div>
    </>
  );
};

export default GSLogin;
