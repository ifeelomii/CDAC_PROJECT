import { useEffect, useState } from "react";
import AdminService from "../../services/AdminService";
import { Link, useParams } from "react-router-dom";
import "./Adminspage.css";

const AllAdmins = () => {
  const [adminlist, setAdminList] = useState([]);

  const params = useParams();
  // console.log(params.username)
  const fetchdata = () => {
    AdminService.getAllAdmins()
      .then((result) => {
        console.log(result.data);
        setAdminList([...result.data]);
      })
      .catch((err) => {
        console.log("error occured", err);
      });
  };
  useEffect(() => {
    fetchdata();
  }, []);
  const deleteAdmin = (cid) => {
    AdminService.deleteAdmin(cid)
      .then((result) => {
        console.log(result.data);
        fetchdata();
      })
      .catch(() => {});
  };

  return (
    <>
      <div className="display-admin-wrapper">
        <br></br>
        <h5>Welcome {params.username}</h5>
        <Link to="/admin/addadmin" id="action-admin-btn">
          <button
            type="button"
            name="btn"
            id="action-comp-btn"
            className="btn btn-success"
          >
            {" "}
            Add New Admin
          </button>
        </Link>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Admin Id</th>
              <th scope="col">Full Name</th>
              <th scope="col">Username</th>
              <th scope="col">Password</th>
              <th scope="col">Email Id</th>
              <th scope="col">Phone Number</th>
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
            {adminlist.map((ob) => (
              <tr>
                <td>{ob.adminId}</td>
                <td>{ob.firstName + ob.lastName}</td>
                <td>{ob.username}</td>
                <td>{ob.password}</td>
                <td>{ob.emailId}</td>
                <td>{ob.phoneNumber}</td>
                <td>
                  <button
                    type="button"
                    name="btn"
                    id="delete"
                    className="btn btn-danger"
                    onClick={() => {
                      deleteAdmin(ob.adminId);
                    }}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <Link to={`/edit/${ob.adminId}`} state={{ admindata: ob }}>
                    <button
                      type="button"
                      name="btn"
                      id="edit"
                      className="btn btn-primary"
                    >
                      Edit
                    </button>
                  </Link>
                </td>
                <td>
                  <Link to={`/view/${ob.adminId}`}>
                    <button
                      type="button"
                      name="btn"
                      id="view"
                      className="btn btn-info"
                    >
                      View
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default AllAdmins;
