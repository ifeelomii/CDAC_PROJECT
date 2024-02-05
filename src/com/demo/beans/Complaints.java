package com.demo.beans;

public class Complaints {
	private String complaint_id;
	private String user_id;
	private String posted_at;
	private String region;
	private String category;
	private String description;
	private int forGS;
	private int forAdmin;
	private int status_id;
	
	public Complaints() {
		super();
	}

	public Complaints(String complaint_id, String user_id, String posted_at, String region, String category,
			String description, int forGS, int forAdmin, int status_id) {
		super();
		this.complaint_id = complaint_id;
		this.user_id = user_id;
		this.posted_at = posted_at;
		this.region = region;
		this.category = category;
		this.description = description;
		this.forGS = forGS;
		this.forAdmin = forAdmin;
		this.status_id = status_id;
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

	public String getPosted_at() {
		return posted_at;
	}

	public void setPosted_at(String posted_at) {
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

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
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

	public int getStatus_id() {
		return status_id;
	}

	public void setStatus_id(int status_id) {
		this.status_id = status_id;
	}

	@Override
	public String toString() {
		return "Complaints [complaint_id=" + complaint_id + ", user_id=" + user_id + ", posted_at=" + posted_at
				+ ", region=" + region + ", category=" + category + ", description=" + description + ", forGS=" + forGS
				+ ", forAdmin=" + forAdmin + ", status_id=" + status_id + "]";
	}
	
	
}
