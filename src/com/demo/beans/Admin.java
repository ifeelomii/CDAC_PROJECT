package com.demo.beans;

public class Admin extends Person{
	private String admin_id;
	private String username;
	private String password;
	private String user_id;
	private String complaint_id;
	
	public Admin() {
		super();
	}
	
	public Admin(String first_name, String last_name, String email_id, String phone_number,String admin_id, String username, String password, String user_id, String complaint_id) {
		super(first_name,last_name,email_id,phone_number);
		this.admin_id = admin_id;
		this.username = username;
		this.password = password;
		this.user_id = user_id;
		this.complaint_id = complaint_id;
	}
	
	
	
	public String getAdmin_id() {
		return admin_id;
	}

	public void setAdmin_id(String admin_id) {
		this.admin_id = admin_id;
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

	public String getUser_id() {
		return user_id;
	}

	public void setUser_id(String user_id) {
		this.user_id = user_id;
	}

	public String getComplaint_id() {
		return complaint_id;
	}

	public void setComplaint_id(String complaint_id) {
		this.complaint_id = complaint_id;
	}

	@Override
	public String toString() {
		return super.toString()+"Admin [ admin_id=" + admin_id + ", username=" + username + ", password=" + password
				+ ", user_id=" + user_id + ", complaint_id=" + complaint_id + "]";
	}
}
