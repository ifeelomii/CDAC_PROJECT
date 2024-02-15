import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UserService from "../../services/UserService";
import ComplaintService from "../../services/ComplaintService";
import Allcomplaints from "../Complaintspage/Allcomplaints";

const UserDashboard = () => {
  const params = useParams();
  const [userInfo, setUserInfo] = useState({
    userId: "",
    firstName: "",
    lastName: "",
    emailId: "",
    dob: "",
    phoneNumber: ""
  });
  var uid;
  useEffect(() => {
    console.log("unmae:" + params.username);
    fetchUserInfo();
    uid = userInfo.userId;
    console.log(uid);
    // fetchUserComplaints(uid);
  }, []);

  const fetchUserInfo = () => {
    try {
     UserService.getUserByUsername(params.username)
       .then((result) => {
         console.log(result);
         setUserInfo({ ...result.data });
       })
       .catch((err) => {
         console.log("error occured", err);
       });
    } catch (error) {
      console.error("Error fetching user information:", error);
    }
  };

  // const fetchUserComplaints = (uid) => {
  //   try {
  //     ComplaintService.getComplaintById(uid)
  //       .then((result) => {
  //         console.log(result);
  //         setComplaints({ ...result.data });
  //       })
  //       .catch((err) => {
  //         console.log("error occured", err);
  //       });
  //   } catch (error) {
  //     console.error("Error fetching user complaints:", error);
  //   }
  // };

  return (
    <div>
      <h1>User Dashboard</h1>
      {userInfo && (
        <div id="user-info">
          <h2>User Information</h2>
          <p>Username: {userInfo.username}</p>
          <p>User ID: {userInfo.userId}</p>
          <p>First Name: {userInfo.firstName}</p>
          <p>Last Name: {userInfo.lastName}</p>
        </div>
      )}
      <div>
        {/* <Allcomplaints/> */}
        {/* <h2>User Complaints</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Complaint ID</th>
              <th>User ID</th>
              <th>Category</th>
              <th>Description</th>
              <th>Posted At</th>
            </tr>
          </thead>
          <tbody>
            {complaints.map((complaints) => (
              <tr key={complaints.id}>
                <td>{complaints.complaintId}</td>
                <td>{complaints.userId}</td>
                <td>{complaints.category}</td>
                <td>{complaints.description}</td>
                <td>{complaints.postedAt}</td>
              </tr>
            ))}
          </tbody>
        </table> */}
      </div>
    </div>
  );
};

export default UserDashboard;
