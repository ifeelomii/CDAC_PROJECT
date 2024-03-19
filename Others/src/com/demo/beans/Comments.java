package com.demo.beans;

public class Comments {
	private int comment_id;
	private String complaint_id;
	private String user_id;
	private String description;
	private String posted_at;
	
	public Comments() {
		super();
	}

	public Comments(int comment_id, String complaint_id, String user_id, String description, String posted_at) {
		super();
		this.comment_id = comment_id;
		this.complaint_id = complaint_id;
		this.user_id = user_id;
		this.description = description;
		this.posted_at = posted_at;
	}

	public int getComment_id() {
		return comment_id;
	}

	public void setComment_id(int comment_id) {
		this.comment_id = comment_id;
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

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getPosted_at() {
		return posted_at;
	}

	public void setPosted_at(String posted_at) {
		this.posted_at = posted_at;
	}

	@Override
	public String toString() {
		return "Comments [comment_id=" + comment_id + ", complaint_id=" + complaint_id + ", user_id=" + user_id
				+ ", description=" + description + ", posted_at=" + posted_at + "]";
	}
	
	
}
