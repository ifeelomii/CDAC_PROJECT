import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "./Complaintspage.css";
import moment from "moment";
import ComplaintService from "../../services/ComplaintService";

const EditComplaint = () => {
  const location = useLocation();
  const params = useParams();
  const [formdetails, setformdetails] = useState({
    complaintId: "",
    userId:"",
    category: "",
    description: "",
    postedAt: "",
    forAdmin:"",
    district: "",
    taluka: "",
    village: "",
    status: "",
    remarks: ""
  });

  const navigate = useNavigate();
  useEffect(() => {
    setformdetails({ ...location.state.data });
    console.log("formdetails: "+formdetails);
  }, []);

  const updategs = () => {
    console.log("Form Details : ", formdetails);
    ComplaintService.updateComplaint(formdetails)
      .then((result) => {
        console.log(result.data);
        //clear the form
        setformdetails({
          complaintId: "",
          userId: "",
          category: "",
          description: "",
          postedAt: "",
          forAdmin:"",
          district: "",
          taluka: "",
          village: "",
          status: "",
          remarks: ""
        });
        navigate(`/gramsevaks/dashboard/${params.username}`);
      })
      .catch((err) => {
        console.log("error occured", err);
      });
  };

  return (
    <div className="outer-edit-gs-container">
      <div className="inner-edit-gs-container">
        <form>
          <div className="form-group" id="input-group">
            <label>Complaint Id:</label>
            <input
              type="text"
              className="form-control col-md-12"
              id="cmp"
              name="complaintId"
              value={formdetails.complaintId}
              onChange={(event) => {
                setformdetails({
                  ...formdetails,
                  complaintId: event.target.value
                });
              }}
              readOnly
            />
          </div>
          <div className="form-group" id="input-group">
            <label>User Id:</label>
            <input
              type="text"
              className="form-control col-md-12"
              id="userId"
              name="userId"
              value={formdetails.userId}
              onChange={(event) => {
                setformdetails({
                  ...formdetails,
                  userId: event.target.value
                });
              }}
              readOnly
            />
          </div>
          <div className="form-group" id="input-group">
            <label>Category:</label>
            <input
              type="text"
              className="form-control col-md-12"
              id="category"
              name="category"
              value={formdetails.category}
              onChange={(event) => {
                setformdetails({
                  ...formdetails,
                  category: event.target.value
                });
              }}
            />
          </div>
          <div className="form-group" id="input-group">
            <label>Description:</label>
            <input
              type="text"
              className="form-control col-md-12"
              id="description"
              name="description"
              value={formdetails.description}
              onChange={(event) => {
                setformdetails({
                  ...formdetails,
                  description: event.target.value
                });
              }}
            />
          </div>
          <div className="form-group" id="input-group">
            <label>Posted At:</label>
            <input
              type="text"
              className="form-control col-md-12"
              id="postedAt"
              name="postedAt"
              value={moment(formdetails.postedAt).format("DD/MM/YYYY HH:mm:ss")}
              onChange={(event) => {
                setformdetails({
                  ...formdetails,
                  postedAt: event.target.value
                });
              }}
              readOnly
            />
          </div>
          <div className="form-group" id="input-group">
            <label>For Admin:</label>
            <input
              type="text"
              className="form-control col-md-12"
              id="forAdmin"
              name="forAdmin"
              value={formdetails.forAdmin}
              onChange={(event) => {
                setformdetails({
                  ...formdetails,
                  forAdmin: event.target.value
                });
              }}
            />
          </div>
          <div className="form-group label" id="input-group">
            <label>District:</label>
            <input
              type="text"
              className="form-control col-md-12"
              id="district"
              name="district"
              value={formdetails.district}
              pattern="^[0-9]*$"
              onChange={(event) => {
                setformdetails({
                  ...formdetails,
                  district: event.target.value
                });
              }}
            />
          </div>
          <div className="form-group label" id="input-group">
            <label>Taluka:</label>
            <input
              type="text"
              className="form-control col-md-12"
              id="taluka"
              name="taluka"
              value={formdetails.taluka}
              onChange={(event) => {
                setformdetails({
                  ...formdetails,
                  taluka: event.target.value
                });
              }}
            />
          </div>
          <div className="form-group label" id="input-group">
            <label>Village:</label>
            <input
              type="text"
              className="form-control col-md-12"
              id="village"
              name="village"
              value={formdetails.village}
              onChange={(event) => {
                setformdetails({
                  ...formdetails,
                  village: event.target.value
                });
              }}
            />
          </div>
          <div className="form-group label" id="input-group">
            <label htmlFor="dob">Status:</label>
            <input
              type="text"
              className="form-control col-md-12"
              id="status"
              name="status"
              value={formdetails.status}
              onChange={(event) => {
                setformdetails({ ...formdetails, status: event.target.value });
              }}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary rounded-pill"
            id="input-group"
            onClick={updategs}
          >
            Update Gramsevak
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditComplaint;
