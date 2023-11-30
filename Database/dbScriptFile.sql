-- DROP DATABASE IF EXISTS GramSahay;

CREATE DATABASE IF NOT EXISTS GramSahay;

USE GramSahay;

-- User Table
-- DROP TABLE tbl_users;
CREATE TABLE IF NOT EXISTS tbl_users (
    user_id VARCHAR(30) PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    username VARCHAR(30) UNIQUE,
    password VARCHAR(30),
    email_id VARCHAR(30) UNIQUE,
    dob DATE,
    phone_number VARCHAR(15) UNIQUE,
    state VARCHAR(20),
    city VARCHAR(20),
    district VARCHAR(20),
    taluka VARCHAR(20),
    village VARCHAR(20),
    region VARCHAR(20),
    address VARCHAR(100),
    panchayat VARCHAR(50),
    post_office VARCHAR(50),
    pin_code INT
);

-- Connection B/W Users Table and Complaints Table
CREATE TABLE IF NOT EXISTS user_complaint (
	user_id VARCHAR(30),
    complaint_id VARCHAR(30),
    FOREIGN KEY (user_id) REFERENCES tbl_users(user_id),
	FOREIGN KEY (complaint_id) REFERENCES tbl_complaints(complaint_id)
);

-- Complaints Table
CREATE TABLE IF NOT EXISTS tbl_complaints (
    complaint_id VARCHAR(30) PRIMARY KEY,
    user_id VARCHAR(20),
    posted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    region VARCHAR(20),
    category VARCHAR(20),
    description TEXT NOT NULL,
    forGS INT,
    forAdmin INT,
    status_id INT,
    FOREIGN KEY (status_id) REFERENCES tbl_status(status_id)
);

-- Category Table
CREATE TABLE IF NOT EXISTS tbl_category (
	category_id VARCHAR(30) PRIMARY KEY,
    category VARCHAR(20)
);

-- Connection B/W Complaints Table and Category Table
CREATE TABLE IF NOT EXISTS complaint_category (
    complaint_id VARCHAR(30),
    category_id VARCHAR(30),
	FOREIGN KEY (complaint_id) REFERENCES tbl_complaints(complaint_id),
    FOREIGN KEY (category_id) REFERENCES tbl_category(category_id)
);

-- Complaint Status Table
CREATE TABLE IF NOT EXISTS tbl_status (
	status_id INT PRIMARY KEY,
    pending INT,
    successfull INT
);

-- Comment Table
CREATE TABLE IF NOT EXISTS tbl_comments (
    comment_id INT PRIMARY KEY,
    user_id VARCHAR(30),
    complaint_id VARCHAR(30),
    description TEXT NOT NULL,
    posted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES tbl_users(user_id), 
    FOREIGN KEY (complaint_id) REFERENCES tbl_complaints(complaint_id)
);

-- Gram Sevak Table
CREATE TABLE IF NOT EXISTS tbl_gramsevak (
    gs_id VARCHAR(30) PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    username VARCHAR(30) UNIQUE,
    password VARCHAR(30),
    email_id VARCHAR(30) UNIQUE,
    phone_number VARCHAR(15) UNIQUE,
    state VARCHAR(20),
    district VARCHAR(20),
    taluka VARCHAR(20),
    village VARCHAR(20),
    status INT,
    complaint_id VARCHAR(30),
    comment_id INT,
    FOREIGN KEY (complaint_id) REFERENCES tbl_complaints(complaint_id),
    FOREIGN KEY (comment_id) REFERENCES tbl_comments(comment_id)
);

-- Admin Table
CREATE TABLE IF NOT EXISTS tbl_admin(
	admin_id VARCHAR(30) PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    username VARCHAR(30) UNIQUE,
    password VARCHAR(30),
    email_id VARCHAR(30) UNIQUE,
    phone_number VARCHAR(15) UNIQUE,
    user_id VARCHAR(30),
    complaint_id VARCHAR(30),
    FOREIGN KEY (complaint_id) REFERENCES tbl_complaints(complaint_id),
    FOREIGN KEY (user_id) REFERENCES tbl_users(user_id)
); 


SHOW TABLES;