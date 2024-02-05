package com.demo.beans;

public class Person {
	private String first_name;
	private String last_name;
	private String email_id;
	private String phone_number;
	public Person() {
		super();
	}
	public Person(String first_name, String last_name, String email_id, String phone_number) {
		super();
		this.first_name = first_name;
		this.last_name = last_name;
		this.email_id = email_id;
		this.phone_number = phone_number;
	}
	public String getFirst_name() {
		return first_name;
	}
	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}
	public String getLast_name() {
		return last_name;
	}
	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}
	public String getEmail_id() {
		return email_id;
	}
	public void setEmail_id(String email_id) {
		this.email_id = email_id;
	}
	public String getPhone_number() {
		return phone_number;
	}
	public void setPhone_number(String phone_number) {
		this.phone_number = phone_number;
	}
	@Override
	public String toString() {
		return "Person [first_name=" + first_name + ", last_name=" + last_name + ", email_id=" + email_id
				+ ", phone_number=" + phone_number + "]";
	}
	
}
