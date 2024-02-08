package com.demo.model;

import java.time.LocalDateTime;

public class Complaint {
	String complaint_id;
	String user_id;
	LocalDateTime posted_at;
	String region;
	String category;
	String complaint_description;
	int forGS;
	int forAdmin;
	String status;
	public Complaint() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Complaint(String complaint_id, String user_id, LocalDateTime posted_at, String region, String category,
			String complaint_description, int forGS, int forAdmin, String status) {
		super();
		this.complaint_id = complaint_id;
		this.user_id = user_id;
		this.posted_at = posted_at;
		this.region = region;
		this.category = category;
		this.complaint_description = complaint_description;
		this.forGS = forGS;
		this.forAdmin = forAdmin;
		this.status = status;
	}
	public String getComplaint_id() {
		return complaint_id;
	}
	public void setComplaint_id(String complaint_id) {
		this.complaint_id = complaint_id;
	}
	public String getUser_id() {
		return user_id;
	}
	public void setUser_id(String user_id) {
		this.user_id = user_id;
	}
	public LocalDateTime getPosted_at() {
		return posted_at;
	}
	public void setPosted_at(LocalDateTime posted_at) {
		this.posted_at = posted_at;
	}
	public String getRegion() {
		return region;
	}
	public void setRegion(String region) {
		this.region = region;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getComplaint_description() {
		return complaint_description;
	}
	public void setComplaint_description(String complaint_description) {
		this.complaint_description = complaint_description;
	}
	public int getForGS() {
		return forGS;
	}
	public void setForGS(int forGS) {
		this.forGS = forGS;
	}
	public int getForAdmin() {
		return forAdmin;
	}
	public void setForAdmin(int forAdmin) {
		this.forAdmin = forAdmin;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	@Override
	public String toString() {
		return "Complaint [complaint_id=" + complaint_id + ", user_id=" + user_id + ", posted_at=" + posted_at
				+ ", region=" + region + ", category=" + category + ", complaint_description=" + complaint_description
				+ ", forGS=" + forGS + ", forAdmin=" + forAdmin + ", status=" + status + "]";
	}
	
}
