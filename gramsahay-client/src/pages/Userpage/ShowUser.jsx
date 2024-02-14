import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import UserService from "../../services/UserService";
const Showuser = () => {
  const params = useParams();
  const [userdetails, setUserDetails] = useState({
    userId: "",
    firstName: "",
    lastName: "",
    username: "",
    phoneNumber: "",
    district: "",
    village: "",
    address: ""
  });

  useEffect(() => {
    console.log("id:" + params.userId);
    UserService.getUserById(params.userId)
      .then((result) => {
        console.log(result);
        setUserDetails({ ...result.data });
      })
      .catch((err) => {
        console.log("error occured", err);
      });
  }, []);
  return (
    <div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">User Information</h5>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">User Id</th>
                <th scope="col">Fisrt Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">User Name</th>
                <th scope="col">Phone Number</th>
                <th scope="col">District</th>
                <th scope="col">Village</th>
                <th scope="col">Address</th>
                <th
                  scope="col"
                  style={{
                    textAlign: "center",
                    width: "10px"
                  }}
                >
                  Delete
                </th>
                <th
                  scope="col"
                  style={{
                    textAlign: "center",
                    width: "8px"
                  }}
                >
                  Edit
                </th>
                <th
                  scope="col"
                  style={{
                    textAlign: "center",
                    width: "8px"
                  }}
                >
                  View
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{userdetails.userId}</td>
                <td>{userdetails.firstName}</td>
                <td>{userdetails.lastName}</td>
                <td>{userdetails.username}</td>
                <td>{userdetails.phoneNumber}</td>
                <td>{userdetails.district}</td>
                <td>{userdetails.village}</td>
                <td>{userdetails.address}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Link to="">
          <button type="button" name="btn" id="btn">
            Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Showuser;
