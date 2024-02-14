import { useEffect, useState } from "react";
import ComplaintService from "../../services/ComplaintService";
import { Link, useParams } from "react-router-dom";
import "./Complaintspage.css";

const Allcomplaints = () => {
  const [complaintlist, setCompList] = useState([]);

  const params = useParams();
  // console.log(params.username)
  const fetchdata = () => {
    ComplaintService.getAllComplaints()
      .then((result) => {
        console.log(result.data);
        setCompList([...result.data]);
      })
      .catch((err) => {
        console.log("error occured", err);
      });
  };
  useEffect(() => {
    fetchdata();
  }, []);
  const deleteComplaint = (cid) => {
    ComplaintService.deleteComplaint(cid)
      .then((result) => {
        console.log(result.data);
        fetchdata();
      })
      .catch(() => {});
  };

  return (
    <>
      <div className="display-comp-wrapper">
        <br></br>
        <h5>Welcome {params.username}</h5>
        <Link to="/gramsevak/registergramsevak" id="action-comp-btn">
          <button
            type="button"
            name="btn"
            id="action-comp-btn"
            className="btn btn-success"
          >
            {" "}
            Add New Gramsevak
          </button>
        </Link>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Complaint Id</th>
              {/* <th scope="col">User Id</th> */}
              <th scope="col">Category</th>
              <th scope="col">Description</th>
              <th scope="col">Posted At</th>
              <th scope="col">District</th>
              <th scope="col">Taluka</th>
              <th scope="col">Village</th>
              <th scope="col">Status</th>
              <th scope="col">Remarks</th>
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
            {complaintlist.map((ob) => (
              <tr>
                <td>{ob.complaintId}</td>
                {/* <td>{ob.user_id}</td> */}
                <td>{ob.category}</td>
                <td>{ob.description}</td>
                <td>{ob.postedAt}</td>
                <td>{ob.district}</td>
                <td>{ob.taluka}</td>
                <td>{ob.village}</td>
                <td>{ob.status}</td>
                <td>{ob.remarks?ob.remarks:"none"}</td>
                <td>
                  <button
                    type="button"
                    name="btn"
                    id="delete"
                    className="btn btn-danger"
                    onClick={() => {
                      deleteComplaint(ob.userId);
                    }}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <Link to={`/edit/${ob.userId}`} state={{ pdata: ob }}>
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
                  <Link to={`/view/${ob.cid}`}>
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
export default Allcomplaints;
