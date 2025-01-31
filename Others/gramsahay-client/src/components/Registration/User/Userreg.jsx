import React, { useState } from "react";
import axios from "axios";
import "./Userreg.css";
import UserService from "../../../services/UserService";

const UserRegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    emailId: "",
    dob: "",
    phoneNumber: "",
    state: "",
    district: "",
    taluka: "",
    village: "",
    address: "",
    panchayat: "",
    postoffice: "",
    pincode: ""
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
      // Call API to register user
      // await axios.post(UserService.addUser(formData));
      UserService.addUser(formData);
      setSuccess(true);
      setError("");
    } catch (error) {
      setError("Failed to register user. Please try again.");
      console.error("Error registering user:", error);
    }
    console.log(formData);
  };

  return (
    <div id="main-user-reg-div">
      <h2 id="user-reg">User Registration</h2>
      <div id="complaint-reg">
        {/* Display error if any */}
        {error && <p style={{ color: "red" }}>{error}</p>}

        {/* Show success message on successful registration */}
        {success && (
          <p style={{ color: "green" }}>User registered successfully!</p>
        )}
      </div>
      <form onSubmit={handleSubmit} id="user-reg-form">
        {/* UserID is Auto Generated */}

        <div id="line"></div>
        <h3 id="user-reg-header">Personal Information</h3>
        <hr />
        <div id="input-group">
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={formData.username}
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
              name="password"
              value={formData.password}
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
              name="firstName"
              value={formData.firstName}
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
              name="lastName"
              value={formData.lastName}
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
              name="emailId"
              value={formData.emailId}
              onChange={handleChange}
              placeholder="Enter Your Email Id"
              className="col-md-12"
              required
            />
          </label>
          <label>
            Date Of Birth:
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              placeholder="Enter Your Date Of Birth"
              className="col-md-12"
              required
            />
          </label>
          <label>
            Phone Number:
            <input
              type="number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter Your Number"
              className="col-md-12"
              title="Please enter only numbers"
              required
            />
          </label>
        </div>
        <div id="line"></div>
        <h3 id="user-reg-header">Residential Information</h3>
        <hr />
        <div id="input-group">
          <label>
            State:
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="Enter Your State"
              className="col-md-12"
              required
            />
          </label>
          <label>
            District:
            <input
              type="text"
              name="district"
              value={formData.district}
              onChange={handleChange}
              placeholder="Enter Your District"
              className="col-md-12"
              required
            />
          </label>
          <label>
            Taluka:
            <input
              type="text"
              name="taluka"
              value={formData.taluka}
              onChange={handleChange}
              placeholder="Enter Your Taluka"
              className="col-md-12"
              required
            />
          </label>
          <label>
            Village:
            <input
              type="text"
              name="village"
              value={formData.village}
              onChange={handleChange}
              placeholder="Enter Your Village"
              className="col-md-12"
              required
            />
          </label>
        </div>
        <div id="input-group">
          <label>
            Address:
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter Your Address"
              className="col-md-12"
              required
            />
          </label>
          <label>
            Panchayat:
            <input
              type="text"
              name="panchayat"
              value={formData.panchayat}
              onChange={handleChange}
              placeholder="Enter Your Panchayat"
              className="col-md-12"
              required
            />
          </label>
          <label>
            Postoffice:
            <input
              type="text"
              name="postoffice"
              value={formData.postoffice}
              onChange={handleChange}
              placeholder="Enter Postoffice"
              className="col-md-12"
              pattern="[a-zA-Z0-9\s]*"
              title="Please enter only letters, numbers, and spaces"
              required
            />
          </label>
          <label>
            Pincode:
            <input
              type="text"
              name="pincode"
              value={formData.pin_code}
              onChange={handleChange}
              placeholder="Enter Your Pin  Code"
              className="col-md-12"
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
        </div>
      </form>
    </div>
  );
};

export default UserRegistrationForm;
