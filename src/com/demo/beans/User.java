package com.demo.beans;

import java.util.Date;

public class User extends Person{
	private String user_id;
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
	private String post_office;
	private int pin_code;
	
	public User() {
		super();
	}

	public User(String first_name, String last_name, String email_id, String phone_number,String user_id, String username, String password, Date dob, String state, String city,
			String district, String taluka, String village, String region, String address, String panchayat,
			String post_office, int pin_code) {
		super(first_name,last_name,email_id,phone_number);
		this.user_id = user_id;
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
		this.post_office = post_office;
		this.pin_code = pin_code;
	}

	public String getUser_id() {
		return user_id;
	}

	public void setUser_id(String user_id) {
		this.user_id = user_id;
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

	public String getPost_office() {
		return post_office;
	}

	public void setPost_office(String post_office) {
		this.post_office = post_office;
	}

	public int getPin_code() {
		return pin_code;
	}

	public void setPin_code(int pin_code) {
		this.pin_code = pin_code;
	}

	@Override
	public String toString() {
		return super.toString()+"Users [user_id=" + user_id + ", username=" + username + ", password=" + password
				+ ", dob=" + dob + ", state=" + state + ", city=" + city + ", district=" + district + ", taluka="
				+ taluka + ", village=" + village + ", region=" + region + ", address=" + address + ", panchayat="
				+ panchayat + ", post_office=" + post_office + ", pin_code=" + pin_code + "]";
	}
	
	
	
}
