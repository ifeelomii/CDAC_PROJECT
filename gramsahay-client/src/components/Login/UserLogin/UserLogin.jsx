import React, { useState } from "react";
import "./UserLogin.css";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../Footer/Footer";
import { MainFooter } from "../../Footer/MainFooter";

const UserLogin = () => {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const navigate = useNavigate();
  const handleLoginSubmit = (e) => {
    e.preventDefault();

    if (loginUsername === "omkar" && loginPassword === "omkar") {
      navigate(`/users/dashboard/${loginUsername}`);
    }
    // Here you can perform login authentication
    console.log("Login submitted with:", loginUsername, loginPassword);
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
