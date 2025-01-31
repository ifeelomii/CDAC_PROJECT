package com.demo.model;

import java.time.LocalDateTime;

public class Complaint {
	String complaintId;
	String userId;
	LocalDateTime postedAt;
	String region;
	String category;
	String complaintDescription;
	int forGS;
	int forAdmin;
	String status;
	public Complaint() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Complaint(String complaintId, String userId, LocalDateTime postedAt, String region, String category,
			String complaintDescription, int forGS, int forAdmin, String status) {
		super();
		this.complaintId = complaintId;
		this.userId = userId;
		this.postedAt = postedAt;
		this.region = region;
		this.category = category;
		this.complaintDescription = complaintDescription;
		this.forGS = forGS;
		this.forAdmin = forAdmin;
		this.status = status;
	}
	public String getComplaintId() {
		return complaintId;
	}
	public void setComplaintId(String complaintId) {
		this.complaintId = complaintId;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public LocalDateTime getPostedAt() {
		return postedAt;
	}
	public void setPostedAt(LocalDateTime postedAt) {
		this.postedAt = postedAt;
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
	public String getComplaintDescription() {
		return complaintDescription;
	}
	public void setComplaintDescription(String complaintDescription) {
		this.complaintDescription = complaintDescription;
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
		return "Complaint [complaintId=" + complaintId + ", userId=" + userId + ", postedAt=" + postedAt + ", region="
				+ region + ", category=" + category + ", complaintDescription=" + complaintDescription + ", forGS="
				+ forGS + ", forAdmin=" + forAdmin + ", status=" + status + "]";
	}
	
}
