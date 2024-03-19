package com.demo.model;

import java.util.Date;

public class User extends Person{
	private String userId;
	private String username;
	private String password;
	private Date dob;
	private String state;
	private String city;
	private String district;
	private String taluka;
	private String village;
	private String region;
	private String address;
	private String panchayat;
	private String postoffice;
	private int pincode;
	
	public User() {
		super();
	}

	public User(String userId, String username, String password, Date dob, String state, String city, String district,
			String taluka, String village, String region, String address, String panchayat, String postoffice,
			int pincode) {
		super();
		this.userId = userId;
		this.username = username;
		this.password = password;
		this.dob = dob;
		this.state = state;
		this.city = city;
		this.district = district;
		this.taluka = taluka;
		this.village = village;
		this.region = region;
		this.address = address;
		this.panchayat = panchayat;
		this.postoffice = postoffice;
		this.pincode = pincode;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
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

	public Date getDob() {
		return dob;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
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

	public String getRegion() {
		return region;
	}

	public void setRegion(String region) {
		this.region = region;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPanchayat() {
		return panchayat;
	}

	public void setPanchayat(String panchayat) {
		this.panchayat = panchayat;
	}

	public String getPostoffice() {
		return postoffice;
	}

	public void setPostoffice(String postoffice) {
		this.postoffice = postoffice;
	}

	public int getPincode() {
		return pincode;
	}

	public void setPincode(int pincode) {
		this.pincode = pincode;
	}

	@Override
	public String toString() {
		return "User [userId=" + userId + ", username=" + username + ", password=" + password + ", dob=" + dob
				+ ", state=" + state + ", city=" + city + ", district=" + district + ", taluka=" + taluka + ", village="
				+ village + ", region=" + region + ", address=" + address + ", panchayat=" + panchayat + ", postoffice="
				+ postoffice + ", pincode=" + pincode + "]";
	}
	
}
