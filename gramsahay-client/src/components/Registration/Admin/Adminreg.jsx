import React, { useState } from "react";
import axios from "axios";
import "./Adminreg.css";
import UserService from "../../../services/UserService";
import { Navigate, useNavigate } from "react-router-dom";

const AdminRegistrationForm = () => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    uname: "",
    pwd: "",
    fname: "",
    lname: "",
    email: "",
    phone_number: ""
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      UserService.addUser(formData);
      setSuccess(true);
      setError("");
    } catch (error) {
      setError("Failed to register user. Please try again.");
      console.error("Error registering user:", error);
    }
    console.log(formData);
  };

  const goback = () => {
    const nav = localStorage.getItem("adminusername");
    navigate(`/admins/dashboard/${nav}`);
  }
  return (
    <div id="main-admin-reg-div">
      <h2 id="admin-reg">Admin Registration</h2>
      <div id="complaint-reg">
        {/* Display error if any */}
        {error && <p style={{ color: "red" }}>{error}</p>}

        {/* Show success message on successful registration */}
        {success && (
          <p style={{ color: "green" }}>Admin registered successfully!</p>
        )}
      </div>
      <form onSubmit={handleSubmit} id="admin-reg-form">
        {/* UserID is Auto Generated */}

        <div id="line"></div>
        <h3 id="admin-reg-header">Personal Information</h3>
        <hr />
        <div id="input-group">
          <label>
            Username:
            <input
              type="text"
              name="uname"
              value={formData.uname}
              onChange={handleChange}
              placeholder="Select A User Name"
              className="col-md-12"
              required
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="pwd"
              value={formData.pwd}
              onChange={handleChange}
              placeholder="Enter Password"
              className="col-md-12"
              required
            />
          </label>
          <label>
            First Name:
            <input
              type="text"
              name="fname"
              value={formData.first_name}
              onChange={handleChange}
              placeholder="Enter Your First Name"
              className="col-md-12"
              required
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              name="lname"
              value={formData.last_name}
              onChange={handleChange}
              placeholder="Enter Your Last Name"
              className="col-md-12"
              required
            />
          </label>
        </div>
        <div id="input-group">
          <label>
            Email Address:
            <input
              type="email"
              name="email"
              value={formData.email_id}
              onChange={handleChange}
              placeholder="Enter Your Email Id"
              className="col-md-12"
              required
            />
          </label>
          <label>
            Phone Number:
            <input
              type="number"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              placeholder="Enter Your Number"
              className="col-md-12"
              title="Please enter only numbers"
              required
            />
          </label>
        </div>
        <div id="last-line"></div>
        <div id="btn-group">
          <button type="submit" id="submit">
            Register
          </button>

          <button type="reset" id="reset">
            Reset
          </button>
        
          <button type="button" id="back" onClick={goback}>
            Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminRegistrationForm;
