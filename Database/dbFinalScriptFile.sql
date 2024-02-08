DROP DATABASE IF EXISTS GramSahay;

CREATE DATABASE IF NOT EXISTS GramSahay;

USE GramSahay;

-- User Table
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
INSERT INTO tbl_users 
	(user_id, first_name, last_name, username, password, email_id, dob, phone_number, state, city, district, taluka, village, region, address, panchayat, post_office, pin_code)
VALUES
	('user010','Omkar','Ware','Omkarware003','Omkarware@003','omkarware003@gmail.com','2001-10-06','9561466648','Maharashtra','Beed','Beed','Beed','Beed','urban','Ganesh Nagar near Old SP Office','Beed','Beed',431122),
	('user101', 'John', 'Doe', 'johndoe', 'password@1', 'john.doe@email.com', '1990-01-01', '1234567890', 'State1', 'City1', 'District1', 'Taluka1', 'Village1', 'urban', 'Address1', 'Panchayat1', 'PostOffice1', 123456),
	('user102', 'Jane', 'Smith', 'janesmith', 'password@2', 'jane.smith@email.com', '1992-05-15', '9876543210', 'State2', 'City2', 'District2', 'Taluka2', 'Village2', 'rural', 'Address2', 'Panchayat2', 'PostOffice2', 654321),
	('user103', 'Robert', 'Johnson', 'robertjohnson', 'password@100', 'robert.johnson@email.com', '1985-11-20', '8765432109', 'State10', 'City10', 'District10', 'Taluka10', 'Village10', 'urban', 'Address10', 'Panchayat10', 'PostOffice10', 987654),
	('user104', 'Emily', 'Brown', 'emilybrown', 'password@101', 'emily.brown@email.com', '1988-03-08', '5647382910', 'State11', 'City11', 'District11', 'Taluka11', 'Village11', 'rural', 'Address11', 'Panchayat11', 'PostOffice11', 345678),
	('user105', 'Michael', 'Davis', 'michaeldavis', 'password@102', 'michael.davis@email.com', '1995-09-25', '8765432101', 'State12', 'City12', 'District12', 'Taluka12', 'Village12', 'urban', 'Address12', 'Panchayat12', 'PostOffice12', 876543),
	('user106', 'Sophia', 'Lee', 'sophialee', 'password@150', 'sophia.lee@email.com', '1991-12-18', '9876543211', 'State15', 'City15', 'District15', 'Taluka15', 'Village15', 'rural', 'Address15', 'Panchayat15', 'PostOffice15', 123987),
	('user107', 'Ethan', 'Miller', 'ethanmiller', 'password@151', 'ethan.miller@email.com', '1993-07-12', '1234567891', 'State16', 'City16', 'District16', 'Taluka16', 'Village16', 'urban', 'Address16', 'Panchayat16', 'PostOffice16', 456789),
	('user108', 'Olivia', 'Wang', 'oliviawang', 'password@152', 'olivia.wang@email.com', '1998-04-30', '9876543212', 'State17', 'City17', 'District17', 'Taluka17', 'Village17', 'rural', 'Address17', 'Panchayat17', 'PostOffice17', 789012),
	('user109', 'Liam', 'Nguyen', 'liamnguyen', 'password@161', 'liam.nguyen@email.com', '1996-02-22', '5647382911', 'State18', 'City18', 'District18', 'Taluka18', 'Village18', 'urban', 'Address18', 'Panchayat18', 'PostOffice18', 234567),
	('user110', 'Ava', 'Turner', 'avaturner', 'password@162', 'ava.turner@email.com', '1990-08-14', '8765432102', 'State19', 'City19', 'District19', 'Taluka19', 'Village19', 'rural', 'Address19', 'Panchayat19', 'PostOffice19', 890123),
	('user111', 'Logan', 'Wright', 'loganwright', 'password@170', 'logan.wright@email.com', '1997-11-27', '9876543213', 'State17', 'City17', 'District17', 'Taluka17', 'Village17', 'urban', 'Address17', 'Panchayat17', 'PostOffice17', 456789),
	('user112', 'Mia', 'Garcia', 'miagarcia', 'password@171', 'mia.garcia@email.com', '1999-04-10', '1234567892', 'State20', 'City20', 'District20', 'Taluka20', 'Village20', 'rural', 'Address20', 'Panchayat20', 'PostOffice20', 123456),
	('user113', 'Lucas', 'Chen', 'lucaschen', 'password@172', 'lucas.chen@email.com', '1993-09-05', '9876543214', 'State21', 'City21', 'District21', 'Taluka21', 'Village21', 'urban', 'Address21', 'Panchayat21', 'PostOffice21', 654321),
	('user114', 'Aiden', 'Lopez', 'aidenlopez', 'password@175', 'aiden.lopez@email.com', '1992-12-15', '8765432103', 'State22', 'City22', 'District22', 'Taluka22', 'Village22', 'rural', 'Address22', 'Panchayat22', 'PostOffice22', 987654);

-- End of fake user data script

-- Connection B/W Users Table and Complaints Table
CREATE TABLE IF NOT EXISTS user_complaint (
	user_id VARCHAR(30),
    complaint_id VARCHAR(30),
    FOREIGN KEY (user_id) REFERENCES tbl_users(user_id),
	FOREIGN KEY (complaint_id) REFERENCES tbl_complaints(complaint_id)
);

INSERT INTO user_complaints 
	(user_id,complaint_id)
VALUES
	('user010','COMP001'),
    ('user101','COMP002'),
    ('user102','COMP003'),
    ('user103','COMP004'),
    ('user104','COMP005'),
    ('user105','COMP006'),
    ('user106','COMP007'),
    ('user107','COMP008'),
    ('user108','COMP009'),
    ('user109','COMP010');
    
-- End of fake user data script

-- Complaints Table        
CREATE TABLE IF NOT EXISTS tbl_complaints (
    complaint_id VARCHAR(30) PRIMARY KEY,
    user_id VARCHAR(20),
    posted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP(),
    region VARCHAR(20),
    category VARCHAR(50),
    complaint_description TEXT NOT NULL,
    forGS INT,
    forAdmin INT,
    status VARCHAR(20)
);
INSERT INTO tbl_complaints 
	(complaint_id, user_id, region, category, complaint_description, forGS, forAdmin, status)
VALUES
    ('COMP001', 'USER_001', 'Region A', 'Infrastructure', 'Roads are in poor condition.', 1, 0, 'completed'),
    ('COMP002', 'USER_002', 'Region B', 'Sanitation', 'Garbage not collected regularly.', 0, 1, 'new'),
    ('COMP003', 'USER_003', 'Region C', 'Healthcare', 'Lack of medical facilities in the area.', 1, 0, 'completed'),
    ('COMP004', 'USER_004', 'Region A', 'Education', 'Shortage of teachers in local schools.', 0, 1, 'inprocess'),
    ('COMP005', 'USER_005', 'Region B', 'Infrastructure', 'Electricity outage issues.', 1, 0, 'new'),
    ('COMP006', 'USER_006', 'Region C', 'Sanitation', 'Open defecation problem.', 0, 1, 'inprocess'),
    ('COMP007', 'USER_007', 'Region A', 'Healthcare', 'No ambulance service available.', 1, 0, 'completed'),
    ('COMP08', 'USER_008', 'Region B', 'Education', 'School buildings in dilapidated condition.', 0, 1, 'new'),
    ('COMP009', 'USER_009', 'Region C', 'Infrastructure', 'Water supply irregularities.', 1, 0, 'completed'),
    ('COMP010', 'USER_010', 'Region A', 'Sanitation', 'Pollution from factories affecting health.', 0, 1, 'completed');

-- End of fake user data script

CREATE TABLE IF NOT EXISTS tbl_comments (
    comment_id VARCHAR(20) PRIMARY KEY,
    complaint_id VARCHAR(30),
    desccomment TEXT NOT NULL,
    posted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP(),
    FOREIGN KEY (complaint_id) REFERENCES tbl_complaints(complaint_id)
);

INSERT INTO tbl_comments
    (comment_id,complaint_id,desccomment)
VALUES
	('COMM001','COMP001','N/A01'),
    ('COMM002','COMP002','N/A02'),
	('COMM003','COMP003','N/A03'),
    ('COMM004','COMP004','N/A04'),
    ('COMM005','COMP005','N/A05');

-- End of fake user data script
    
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
    FOREIGN KEY (complaint_id) REFERENCES tbl_complaints(complaint_id)
);
INSERT INTO tbl_gramsevak 
    (gs_id, first_name, last_name, username, password, email_id, phone_number, state, district, taluka, village, status, complaint_id, comment_id)
VALUES
	('gs002','Omkar','Ware','Omkarware003','Omkarware@003','omkarware003@gmail.com','9561466648','Maharashtra','Beed','Beed','Beed',1,'complaint001',1),
    ('gs002', 'Jane', 'Doe', 'janedoe', 'password@456', 'jane.doe@email.com', '9876543210', 'State2', 'District2', 'Taluka2', 'Village2', 0, 'complaint002', 2),
    ('gs003', 'Bob', 'Smith', 'bobsmith', 'pass789', 'bob.smith@email.com', '5551112233', 'State3', 'District3', 'Taluka3', 'Village3', 1, 'complaint003', 3),
    ('gs004', 'Alice', 'Johnson', 'alicejohnson', 'pass987', 'alice.johnson@email.com', '9871234567', 'State4', 'District4', 'Taluka4', 'Village4', 0, 'complaint004', 4),
	('gs005', 'David', 'Miller', 'davidmiller', 'millerpass', 'david.miller@email.com', '1112223333', 'State5', 'District5', 'Taluka5', 'Village5', 1, 'complaint005', 5),
    ('gs006', 'Sara', 'Lee', 'saralee', 'leesara', 'sara.lee@email.com', '4445556666', 'State6', 'District6', 'Taluka6', 'Village6', 0, 'complaint006', 6),
    ('gs007', 'Chris', 'Harris', 'chrisharris', 'chrishpass', 'chris.harris@email.com', '7778889999', 'State7', 'District7', 'Taluka7', 'Village7', 1, 'complaint007', 7),
    ('gs008', 'Eva', 'Smith', 'evasmith', 'evapass', 'eva.smith@email.com', '3334445555', 'State8', 'District8', 'Taluka8', 'Village8', 0, 'complaint008', 8),
    ('gs008', 'Eva', 'Smith', 'evasmith', 'evapass', 'eva.smith@email.com', '3334445555', 'State8', 'District8', 'Taluka8', 'Village8', 0, 'complaint008', 8),
    ('gs009', 'Michael', 'Jones', 'michaeljones', 'jonespass', 'michael.jones@email.com', '9998887777', 'State9', 'District9', 'Taluka9', 'Village9', 1, 'complaint009', 9),
    ('gs010', 'Sophia', 'Williams', 'sophiawilliams', 'sophiapass', 'sophia.williams@email.com', '6667778888', 'State10', 'District10', 'Taluka10', 'Village10', 0, 'complaint010', 10),
    ('gs011', 'Daniel', 'Taylor', 'danieltaylor', 'taylorpass', 'daniel.taylor@email.com', '1112223333', 'State11', 'District11', 'Taluka11', 'Village11', 1, 'complaint011', 11),
    ('gs012', 'Olivia', 'Brown', 'oliviabrown', 'brownpass', 'olivia.brown@email.com', '5554443333', 'State12', 'District12', 'Taluka12', 'Village12', 0, 'complaint012', 12),
    ('gs013', 'William', 'Martin', 'williammartin', 'martinpass', 'william.martin@email.com', '9995554444', 'State13', 'District13', 'Taluka13', 'Village13', 1, 'complaint013', 13),
    ('gs014', 'Emma', 'Anderson', 'emmaanderson', 'andersonpass', 'emma.anderson@email.com', '7778889999', 'State14', 'District14', 'Taluka14', 'Village14', 0, 'complaint014', 14),
    ('gs015', 'Matthew', 'Clark', 'matthewclark', 'clarkpass', 'matthew.clark@email.com', '2223334444', 'State15', 'District15', 'Taluka15', 'Village15', 1, 'complaint015', 15),
    ('gs016', 'John', 'Doe', 'johndoe', 'password@123', 'john.doe@email.com', '1234567890', 'State16', 'District16', 'Taluka16', 'Village16', 16, 'complaint0016', 16);

-- End of fake user data script
    
-- Admin Table
CREATE TABLE IF NOT EXISTS tbl_admin(
	admin_id VARCHAR(30) PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    username VARCHAR(30) UNIQUE,
    password VARCHAR(30),
    email_id VARCHAR(30) UNIQUE,
    phone_number VARCHAR(15) UNIQUE
); 
INSERT INTO tbl_admin 
	(admin_id, first_name, last_name, username, password, email_id, phone_number)
VALUES 
	('admin001', 'Omkar', 'Ware', 'Omkarware003', 'Omkarware@003', 'omkarware003@google.com', '9561466648'),
	('admin002','Dnyanendra','Borase','DJB26','Dj@8928','dj@gmail.com','8530803616'),
	('admin003','Vishal','Ranjile','Vishal@003','Vishal@003','vishalranjile@','9890311016');



SHOW TABLES;