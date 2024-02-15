import axios from "axios";
let baseUrl = "http://localhost:7373/complaints/";
class ComplaintService {
  getAllComplaints() {
    return axios.get(baseUrl + "complaints");
  }
  getComplaintById(cid) {
    return axios.get(baseUrl + "complaints/" + cid);
  }
  addComplaint(complaint) {
    return axios.post(baseUrl + "complaints/" + complaint.cid, complaint);
  }
  updateComplaint(complaint) {
    return axios.put(baseUrl + "complaints/" + complaint.cid, complaint);
  }
  deleteComplaint(cid) {
    return axios.delete(baseUrl + "complaints/" + cid);
  }
}

export default new ComplaintService();
