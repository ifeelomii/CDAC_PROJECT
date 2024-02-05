package com.demo.beans;

public class Gramsevak extends Person{
	private String gs_id;
	private String username;
	private String password;
	private String state;
	private String district;
	private String taluka;
	private String village;
	private int status;
	private String complaint_id;
	private int comment_id;
	
	public Gramsevak() {
		super();
	}

	public Gramsevak(String first_name, String last_name, String email_id, String phone_number,String gs_id, String username, String password, String state, String district,
			String taluka, String village, int status, String complaint_id, int comment_id) {
		super(first_name,last_name,email_id,phone_number);
		this.gs_id = gs_id;
		this.username = username;
		this.password = password;
		this.state = state;
		this.district = district;
		this.taluka = taluka;
		this.village = village;
		this.status = status;
		this.complaint_id = complaint_id;
		this.comment_id = comment_id;
	}


	public String getGs_id() {
		return gs_id;
	}

	public void setGs_id(String gs_id) {
		this.gs_id = gs_id;
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

	public String getComplaint_id() {
		return complaint_id;
	}

	public void setComplaint_id(String complaint_id) {
		this.complaint_id = complaint_id;
	}

	public int getComment_id() {
		return comment_id;
	}

	public void setComment_id(int comment_id) {
		this.comment_id = comment_id;
	}

	@Override
	public String toString() {
		return super.toString()+"Gramsevak [ gs_id=" + gs_id + ", username=" + username + ", password="
				+ password + ", state=" + state + ", district=" + district + ", taluka=" + taluka + ", village="
				+ village + ", status=" + status + ", complaint_id=" + complaint_id + ", comment_id=" + comment_id
				+ "]";
	}
	
	
	
}
