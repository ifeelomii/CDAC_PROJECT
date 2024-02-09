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
	(user_id, first_name, last_name, username, password, email_id, dob, phone_number, state, district, taluka, village, address, panchayat, post_office, pin_code)
VALUES
	('user110','Omkar','Ware','Omkarware003','Omkarware@003','omkarware003@gmail.com','2001-10-06','9561466648','Maharashtra','District1','Taluka1','Village1','Beed','Ganesh Nagar near Old SP Office','Beed','Beed',431122),
	('user101', 'John', 'Doe', 'johndoe', 'password@1', 'john.doe@email.com', '1990-01-01', '1234567890', 'Maharashtra', 'District1', 'Taluka1', 'Village1', 'Address1', 'Panchayat1', 'PostOffice1', 123456),
	('user102', 'Jane', 'Smith', 'janesmith', 'password@2', 'jane.smith@email.com', '1992-05-15', '9876543210', 'Maharashtra', 'District1', 'Taluka1', 'Village2',  'Address2', 'Panchayat2', 'PostOffice2', 654321),
	('user103', 'Robert', 'Johnson', 'robertjohnson', 'password@100', 'robert.johnson@email.com', '1985-11-20', '8765432109', 'Maharashtra', 'District1', 'Taluka1', 'Village2',  'Address10', 'Panchayat10', 'PostOffice10', 987654),
	('user104', 'Emily', 'Brown', 'emilybrown', 'password@101', 'emily.brown@email.com', '1988-03-08', '5647382910', 'Maharashtra', 'District1', 'Taluka1', 'Village3', 'Address11', 'Panchayat11', 'PostOffice11', 345678),
	('user105', 'Michael', 'Davis', 'michaeldavis', 'password@102', 'michael.davis@email.com', '1995-09-25', '8765432101', 'Maharashtra', 'District1', 'Taluka1', 'Village3',  'Address12', 'Panchayat12', 'PostOffice12', 876543),
	('user106', 'Sophia', 'Lee', 'sophialee', 'password@150', 'sophia.lee@email.com', '1991-12-18', '9876543211', 'Maharashtra', 'District1', 'Taluka2', 'Village4',  'Address15', 'Panchayat15', 'PostOffice15', 123987),
	('user107', 'Ethan', 'Miller', 'ethanmiller', 'password@151', 'ethan.miller@email.com', '1993-07-12', '1234567891', 'Maharashtra', 'District1', 'Taluka2', 'Village4',  'Address16', 'Panchayat16', 'PostOffice16', 456789),
	('user108', 'Olivia', 'Wang', 'oliviawang', 'password@152', 'olivia.wang@email.com', '1998-04-30', '9876543212', 'Maharashtra', 'District1', 'Taluka2', 'Village5', 'Address17', 'Panchayat17', 'PostOffice17', 789012),
	('user109', 'Liam', 'Nguyen', 'liamnguyen', 'password@161', 'liam.nguyen@email.com', '1996-02-22', '5647382911', 'Maharashtra', 'District1', 'Taluka2', 'Village5', 'Address18', 'Panchayat18', 'PostOffice18', 234567),
	('user110', 'Ava', 'Turner', 'avaturner', 'password@162', 'ava.turner@email.com', '1990-08-14', '8765432102', 'Maharashtra', 'District1', 'Taluka2', 'Village6', 'Address19', 'Panchayat19', 'PostOffice19', 890123),
	('user111', 'Logan', 'Wright', 'loganwright', 'password@170', 'logan.wright@email.com', '1997-11-27', '9876543213', 'Maharashtra', 'District1', 'Taluka2', 'Village6', 'Address17', 'Panchayat17', 'PostOffice17', 456789),
	('user112', 'Mia', 'Garcia', 'miagarcia', 'password@171', 'mia.garcia@email.com', '1999-04-10', '1234567892', 'Maharashtra', 'District2', 'Taluka3', 'Village7',  'Address20', 'Panchayat20', 'PostOffice20', 123456),
	('user113', 'Lucas', 'Chen', 'lucaschen', 'password@172', 'lucas.chen@email.com', '1993-09-05', '9876543214', 'Maharashtra', 'District2', 'Taluka3', 'Village7', 'Address21', 'Panchayat21', 'PostOffice21', 654321),
	('user114', 'Aiden', 'Lopez', 'aidenlopez', 'password@175', 'aiden.lopez@email.com', '1992-12-15', '8765432103', 'Maharashtra', 'District2', 'Taluka3', 'Village8','Address22', 'Panchayat22', 'PostOffice22', 987654),
	('user115', 'Mia', 'Martinez', 'miamartinez', 'password@171', 'mia.martinez@email.com', '1999-06-10', '1234567890', 'Maharashtra', 'City20', 'District2', 'Taluka3', 'Village8', 'Address20', 'Panchayat20', 'PostOffice20', 123456),
	('user116', 'Noah', 'Garcia', 'noahgarcia', 'password@172', 'noah.garcia@email.com', '1993-03-15', '9876543210', 'Maharashtra', 'City21', 'District2', 'Taluka3', 'Village9', 'Address21', 'Panchayat21', 'PostOffice21', 654321),
	('user117', 'Aria', 'Hernandez', 'ariahernandez', 'password@175', 'aria.hernandez@email.com', '1995-09-02', '8765432109', 'Maharashtra', 'City20', 'District2', 'Taluka3', 'Village9', 'Address20', 'Panchayat20', 'PostOffice20', 987654),
	('user118', 'Evelyn', 'Garcia', 'evelyngarcia', 'password@171', 'evelyn.garcia@email.com', '1999-04-18', '1234567890', 'Maharashtra', 'City20', 'District2', 'Taluka4', 'Village10', 'Address20', 'Panchayat20', 'PostOffice20', 567890),
	('user119', 'Noah', 'Cooper', 'noahcooper', 'password@172', 'noah.cooper@email.com', '1993-09-09', '9876543210', 'Maharashtra', 'City21', 'District2', 'Taluka4', 'Village10',  'Address21', 'Panchayat21', 'PostOffice21', 234567),
	('user120', 'Mia', 'Allen', 'miaallen', 'password@175', 'mia.allen@email.com', '1995-12-02', '8765432109', 'Maharashtra', 'City18', 'District2', 'Taluka4', 'Village11', 'Address18', 'Panchayat18', 'PostOffice18', 890123),
	('user121', 'Isabella', 'Garcia', 'isabellagarcia', 'password@171', 'isabella.garcia@email.com', '1993-05-10', '1234567890', 'Maharashtra', 'City20', 'District2', 'Taluka4', 'Village11', 'Address20', 'Panchayat20', 'PostOffice20', 123456),
	('user122', 'Mason', 'Cooper', 'masoncooper', 'password@172', 'mason.cooper@email.com', '1989-09-18', '9876543210', 'Maharashtra', 'City21', 'District2', 'Taluka4', 'Village12', 'Address21', 'Panchayat21', 'PostOffice21', 654321),
	('user123', 'Zoe', 'Hill', 'zoehill', 'password@175', 'zoe.hill@email.com', '1995-12-03', '8765432109', 'Maharashtra', 'City18', 'District2', 'Taluka4', 'Village12', 'Address18', 'Panchayat18', 'PostOffice18', 987654),
	('user124', 'Sophie', 'Martin', 'sophiemartin', 'password@171', 'sophie.martin@email.com', '1995-04-10', '1234567890', 'Maharashtra', 'City20', 'District3', 'Taluka5', 'Village13', 'Address20', 'Panchayat20', 'PostOffice20', 123456),
	('user125', 'Jackson', 'White', 'jacksonwhite', 'password@172', 'jackson.white@email.com', '1992-09-03', '9876543210', 'Maharashtra', 'City21', 'District3', 'Taluka5', 'Village13','Address21', 'Panchayat21', 'PostOffice21', 654321),
	('user126', 'Zoe', 'Hernandez', 'zoehernandez', 'password@175', 'zoe.hernandez@email.com', '1993-12-15', '8765432109', 'Maharashtra', 'City22', 'District3', 'Taluka5', 'Village14','Address22', 'Panchayat22', 'PostOffice22', 987654),
	('user127', 'Mia', 'Hernandez', 'miahernandez', 'password@171', 'mia.hernandez@email.com', '1993-04-10', '1234567890', 'Maharashtra', 'City20', 'District3', 'Taluka5', 'Village14','Address20', 'Panchayat20', 'PostOffice20', 567890),
	('user128', 'Jackson', 'Garcia', 'jacksongarcia', 'password@172', 'jackson.garcia@email.com', '1999-09-18', '9876543210', 'Maharashtra', 'City21', 'District3', 'Taluka5', 'Village15', 'Address21', 'Panchayat21', 'PostOffice21', 123789),
	('user129', 'Zoe', 'Cooper', 'zoecooper', 'password@175', 'zoe.cooper@email.com', '1995-12-03', '8765432109', 'State22', 'Maharashtra', 'District3', 'Taluka5', 'Village15',  'Address22', 'Panchayat22', 'PostOffice22', 890567),
	('user130', 'Mia', 'Garcia', 'miagarcia', 'password@171', 'mia.garcia@email.com', '1994-06-09', '1234567890', 'State20', 'Maharashtra', 'District3', 'Taluka6', 'Village16', 'Address20', 'Panchayat20', 'PostOffice20', 567890),
	('user131', 'Jackson', 'Lopez', 'jacksonlopez', 'password@172', 'jackson.lopez@email.com', '1989-03-18', '9876543210', 'Maharashtra', 'City21', 'District3', 'Taluka6', 'Village16', 'Address21', 'Panchayat21', 'PostOffice21', 123456),
	('user132', 'Avery', 'Martinez', 'averymartinez', 'password@173', 'avery.martinez@email.com', '1991-10-30', '8765432109', 'Maharashtra', 'City22', 'District3', 'Taluka6', 'Village17', 'Address22', 'Panchayat22', 'PostOffice22', 890123),
	('user133', 'Elijah', 'Ward', 'elijahward', 'password@174', 'elijah.ward@email.com', '1998-08-07', '5647382910', 'Maharashtra', 'City23', 'District3', 'Taluka6', 'Village17', 'Address23', 'Panchayat23', 'PostOffice23', 234567),
	('user134', 'Scarlett', 'Rivera', 'scarlettrivera', 'password@175', 'scarlett.rivera@email.com', '1993-01-25', '8765432101', 'Maharashtra', 'City24', 'District3', 'Taluka6', 'Village18', 'Address24', 'Panchayat24', 'PostOffice24', 890123),
	('user135', 'Mia', 'Chen', 'miachen', 'password@171', 'mia.chen@email.com', '1999-06-10', '1234567890', 'Maharashtra', 'City20', 'District3', 'Taluka6', 'Village18', 'Address20', 'Panchayat20', 'PostOffice20', 123456);
-- End of fake user data script

-- Complaints Table  
-- DROP TABLE tbl_complaints;
CREATE TABLE IF NOT EXISTS tbl_complaints (
    complaint_id VARCHAR(30) PRIMARY KEY,
    user_id VARCHAR(20),
    posted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP(),
    category VARCHAR(50),
    complaint_description TEXT NOT NULL,
    forGS INT,
    forAdmin INT,
    status VARCHAR(20),
    state VARCHAR(20),
    district VARCHAR(20),
    taluka VARCHAR(20),
    village VARCHAR(20)
);
INSERT INTO tbl_complaints 
	(complaint_id, user_id, category, complaint_description, forGS, forAdmin, status, state, district, taluka, village)
VALUES
    ('COMP001', 'user110','Infrastructure', 'Roads are in poor condition.', 1, 0, 'completed', 'Maharashtra', 'District1','Taluka1','Village1'),
    ('COMP002', 'user111','Sanitation', 'Garbage not collected regularly.', 0, 1, 'new', 'Maharashtra','District1','Taluka2','Village6'),
    ('COMP003', 'user112','Healthcare', 'Lack of medical facilities in the area.', 1, 0, 'completed', 'Maharashtra','District2','Taluka3','Village7'),
    ('COMP004', 'user118','Education', 'Shortage of teachers in local schools.', 0, 1, 'inprocess', 'Maharashtra','District2','Taluka4','Village10'),
    ('COMP005', 'user124','Infrastructure', 'Electricity outage issues.', 1, 0, 'new', 'Maharashtra','District3','Taluka5','Village13'),
    ('COMP006', 'user130','Sanitation', 'Open defecation problem.', 0, 1, 'inprocess', 'Maharashtra','District3','Taluka6','Village16'),
    ('COMP007', 'user110','Healthcare', 'No ambulance service available.', 1, 0, 'completed', 'Maharashtra','District1','Taluka1','Village1'),
    ('COMP008', 'user111','Education', 'School buildings in dilapidated condition.', 0, 1, 'new', 'Maharashtra','District1','Taluka1','Village6'),
    ('COMP009', 'user113','Infrastructure', 'Water supply irregularities.', 1, 0, 'completed', 'Maharashtra','District2','Taluka3','Village7'),
    ('COMP010', 'user114','Sanitation', 'Pollution from factories affecting health.', 0, 1, 'completed', 'Maharashtra','District3','Taluka3','Village8');

-- End of fake user data script


-- Connection B/W Users Table and Complaints Table
-- DROP TABLE user_complaint;
CREATE TABLE IF NOT EXISTS user_complaint (
	user_id VARCHAR(30),
    complaint_id VARCHAR(30),
    FOREIGN KEY (user_id) REFERENCES tbl_users(user_id),
	FOREIGN KEY (complaint_id) REFERENCES tbl_complaints(complaint_id)
);

INSERT INTO user_complaint
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

CREATE TABLE IF NOT EXISTS tbl_comments (
    comment_id VARCHAR(20) PRIMARY KEY,
    complaint_id VARCHAR(30),
    desccomment TEXT NOT NULL,
    posted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP(),
    FOREIGN KEY (complaint_id) REFERENCES tbl_complaints(complaint_id)
);

INSERT INTO tbl_comments
    (comment_id, complaint_id, desccomment)
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
    gsstatus INT
);
INSERT INTO tbl_gramsevak 
    (gs_id, first_name, last_name, username, password, email_id, phone_number, state, district, taluka, village, gsstatus)
VALUES
	('gs001','Omkar','Ware','Omkarware003','Omkarware@003','omkarware003@gmail.com','9561466648','Maharashtra','District1','Taluka1','Village1',1),
    ('gs002', 'Jane', 'Doe', 'janedoe', 'password@456', 'jane.doe@email.com', '9876543210', 'Maharashtra', 'District1', 'Taluka1', 'Village2', 0),
    ('gs003', 'Bob', 'Smith', 'bobsmith', 'pass789', 'bob.smith@email.com', '5551112233', 'Maharashtra', 'District1', 'Taluka1', 'Village3', 1),
    ('gs004', 'Alice', 'Johnson', 'alicejohnson', 'pass987', 'alice.johnson@email.com', '9871234567', 'Maharashtra', 'District1', 'Taluka2', 'Village4', 0),
	('gs005', 'David', 'Miller', 'davidmiller', 'millerpass', 'david.miller@email.com', '1112223333', 'Maharashtra', 'District1', 'Taluka2', 'Village5', 1),
    ('gs006', 'Sara', 'Lee', 'saralee', 'leesara', 'sara.lee@email.com', '4445556666', 'Maharashtra', 'District1', 'Taluka2', 'Village6', 0),
    ('gs007', 'Chris', 'Harris', 'chrisharris', 'chrishpass', 'chris.harris@email.com', '7778889999', 'Maharashtra', 'District2', 'Taluka3', 'Village7', 1),
    ('gs008', 'Eva', 'Smith', 'evasmith', 'evapass', 'eva.smith@email.com', '3334445555', 'Maharashtra', 'District2', 'Taluka3', 'Village8', 0),
    ('gs009', 'Michael', 'Jones', 'michaeljones', 'jonespass', 'michael.jones@email.com', '9998887777', 'Maharashtra', 'District2', 'Taluka3', 'Village9', 1),
    ('gs010', 'Sophia', 'Williams', 'sophiawilliams', 'sophiapass', 'sophia.williams@email.com', '6667778887', 'Maharashtra', 'District2', 'Taluka4', 'Village10', 0),
    ('gs011', 'Daniel', 'Taylor', 'danieltaylor', 'taylorpass', 'daniel.taylor@email.com', '1112223334', 'Maharashtra', 'District2', 'Taluka4', 'Village11', 1),
    ('gs012', 'Olivia', 'Brown', 'oliviabrown', 'brownpass', 'olivia.brown@email.com', '5554443332', 'Maharashtra', 'District2', 'Taluka4', 'Village12', 0),
    ('gs013', 'William', 'Martin', 'williammartin', 'martinpass', 'william.martin@email.com', '9995554444', 'Maharashtra', 'District3', 'Taluka5', 'Village13', 1),
    ('gs014', 'Emma', 'Anderson', 'emmaanderson', 'andersonpass', 'emma.anderson@email.com', '7778889991', 'Maharashtra', 'District3', 'Taluka5', 'Village14', 0),
    ('gs015', 'Matthew', 'Clark', 'matthewclark', 'clarkpass', 'matthew.clark@email.com', '2223334441', 'Maharashtra', 'District3', 'Taluka5', 'Village15', 1),
    ('gs016', 'John', 'Doe', 'johndoe', 'password@123', 'john.doe@email.com', '1234567890', 'Maharashtra', 'District3', 'Taluka6', 'Village16', 1),
    ('gs017', 'Yash', 'Gangane', 'yashg', 'yash@123', 'yashgangane@email.com', '1234567891', 'Maharashtra', 'District3', 'Taluka6', 'Village17', 1),
    ('gs018', 'Vishal', 'Ranjile', 'vishal', 'vishal@123', 'vishal@email.com', '1234567892', 'Maharashtra', 'District3', 'Taluka6', 'Village18', 1);

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
	('admin003','Vishal','Ranjile','Vishal@003','Vishal@003','vishalranjile@gmail.com','9890311016'),
    ('admin004','Ashish','Sharma','Ashish@004','Ashish@004','ashishsharma@gmail.com','8319262932'),
    ('admin005','Priyanka','Sarode','Priyanka@005','Priyanka@005','priyankasarode@gmail.com','9876543210');



SHOW TABLES;
TABLE tbl_admin;
TABLE tbl_comments;
TABLE tbl_complaints;
TABLE tbl_gramsevak;
TABLE tbl_users;
TABLE user_complaint;
