import React, { useState } from "react";
import axios from "axios";
import "./GSreg.css";
import GramsevakService from "../../../services/GramsevakService";

const GSRegistrationForm = () => {
  const [formData, setFormData] = useState({
    uname: "",
    pwd: "",
    fname: "",
    lname: "",
    email: "",
    phone_number: "",
    state: "",
    district: "",
    taluka: "",
    village: "",
    gsstatus:""
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
      GramsevakService.addGramsevak(formData)
        .then((res) => {
          setSuccess(true);
          setError("");
        })
        .catch((error) => {
          console.log(error.message);
          setError("Failed to register!");
        });
    } catch (error) {
      setError("Failed to register user. Please try again.");
      console.error("Error registering user:", error);
    }
    console.log(formData);
  };

  return (
    <div id="main-gs-reg-div">
      <h2 id="gs-reg">Gramsevak Registration</h2>
      <div id="complaint-reg">
        {/* Display error if any */}
        {error && <p style={{ color: "red" }}>{error}</p>}

        {/* Show success message on successful registration */}
        {success && (
          <p style={{ color: "green" }}>Complaint registered successfully!</p>
        )}
      </div>
      <form onSubmit={handleSubmit} id="user-reg-form">
        {/* UserID is Auto Generated */}

        <div id="line"></div>
        <h3 id="gs-reg-header">Personal Information</h3>
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
        <div id="line"></div>
        <h3 id="gs-reg-header">Residential Information</h3>
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
            Gramsevak Status:
            <input
              type="text"
              name="sgstatus"
              value={formData.gsstatus}
              onChange={handleChange}
              placeholder="Enter Your Address"
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

export default GSRegistrationForm;
