package com.demo.models;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Admin extends Person {
    @Id
    private String adminId;

    private String username;
    private String password;
    private String userId;
    private String complaintId;

    public Admin() {
        super();
    }

    public Admin(String adminId, String username, String password, String userId, String complaintId) {
        super();
        this.adminId = adminId;
        this.username = username;
        this.password = password;
        this.userId = userId;
        this.complaintId = complaintId;
    }

    public String getAdminId() {
        return adminId;
    }

    public void setAdminId(String adminId) {
        this.adminId = adminId;
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

    @Override
    public String toString() {
        return "Admin [adminId=" + adminId + ", username=" + username + ", password=" + password + ", userId=" + userId
                + ", complaintId=" + complaintId + ", toString()=" + super.toString() + "]";
    }
}
