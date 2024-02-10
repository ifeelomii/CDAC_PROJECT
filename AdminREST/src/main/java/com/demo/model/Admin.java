package com.demo.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

//CREATE TABLE IF NOT EXISTS tbl_admin(
//admin_id VARCHAR(30) PRIMARY KEY AUTO_INCREMENT,
//username VARCHAR(30) UNIQUE,
//password VARCHAR(30),
//email_id VARCHAR(30) UNIQUE,
//phone_number VARCHAR(15) UNIQUE
//); 

@Entity
@Table(name="tbl_admin")
public class Admin {
	@Id
	private int adminId;
	private String firstName;
	private String lastName;
	private String username;
	private String password;
	private String userId;
	private String complaintId;
	private String emailId;
	private String phoneNumber;
	
	public Admin() {
		super();
	}
	

	public Admin(int adminId, String firstName, String lastName, String username, String password, String userId,
			String complaintId, String phoneNumber, String emailId) {
		super();
		this.adminId = adminId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.username = username;
		this.password = password;
		this.userId = userId;
		this.complaintId = complaintId;
		this.emailId = emailId;
		this.phoneNumber = phoneNumber;
	}


	public int getAdminId() {
		return adminId;
	}

	public void setAdminId(int adminId) {
		this.adminId = adminId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
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

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getComplaintId() {
		return complaintId;
	}

	public void setComplaintId(String complaintId) {
		this.complaintId = complaintId;
	}

	public String getEmailID() {
		return emailId;
	}

	public void setEmailID(String emailId) {
		this.emailId = emailId;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}


	@Override
	public String toString() {
		return "Admin [adminId=" + adminId + ", firstName=" + firstName + ", lastName=" + lastName + ", username="
				+ username + ", password=" + password + ", userId=" + userId + ", complaintId=" + complaintId
				+ ", emailID=" + emailId + ", phoneNumber=" + phoneNumber + "]";
	}
	
	
		
}