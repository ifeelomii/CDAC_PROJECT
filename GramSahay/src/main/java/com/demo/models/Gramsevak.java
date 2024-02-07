package com.demo.models;

public class Gramsevak extends Person{
	private String gsId;
	private String username;
	private String password;
	private String state;
	private String district;
	private String taluka;
	private String village;
	private int status;
	private String complaintId;
	private int commentId;
	
	public Gramsevak() {
		super();
	}

	public Gramsevak(String firstName, String lastName, String emailId, String phoneNumber,String gsId, String username, String password, String state, String district,
			String taluka, String village, int status, String complaintId, int commentId) {
		super(firstName,lastName,emailId,phoneNumber);
		this.gsId = gsId;
		this.username = username;
		this.password = password;
		this.state = state;
		this.district = district;
		this.taluka = taluka;
		this.village = village;
		this.status = status;
		this.complaintId = complaintId;
		this.commentId = commentId;
	}


	public String getGsid() {
		return gsId;
	}

	public void setGsId(String gsId) {
		this.gsId = gsId;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getDistrict() {
		return district;
	}

	public void setDistrict(String district) {
		this.district = district;
	}

	public String getTaluka() {
		return taluka;
	}

	public void setTaluka(String taluka) {
		this.taluka = taluka;
	}

	public String getVillage() {
		return village;
	}

	public void setVillage(String village) {
		this.village = village;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public String getComplaintId() {
		return complaintId;
	}

	public void setComplaint_id(String complaintId) {
		this.complaintId = complaintId;
	}

	public int getCommentId() {
		return commentId;
	}

	public void setComment_id(int commentId) {
		this.commentId = commentId;
	}

	@Override
	public String toString() {
		return "Gramsevak [gsId=" + gsId + ", username=" + username + ", password=" + password + ", state=" + state
				+ ", district=" + district + ", taluka=" + taluka + ", village=" + village + ", status=" + status
				+ ", complaintId=" + complaintId + ", commentId=" + commentId + "]";
	}
	
}
