CREATE DATABASE hms;
\connect hms;
CREATE TABLE admin(admin_id SERIAL,email VARCHAR(255) NOT NULL,password VARCHAR(255) NOT NULL,primary key(admin_id));

CREATE TABLE users(user_id SERIAL,email VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL,primary key(user_id));

CREATE TABLE patient(patient_id SERIAL,name VARCHAR(255) NOT NULL,age INT NOT NULL,gender VARCHAR(10),address VARCHAR(255) NOT NULL,disease VARCHAR(255) NOT NULL,room_number VARCHAR(255) NOT NULL,contact VARCHAR(10) NOT NULL,arrival_date DATE NOT NULL,departure_date DATE,primary key(patient_id));

CREATE TABLE doctor(doctor_id SERIAL ,name VARCHAR(255) NOT NULL,age INT NOT NULL,gender VARCHAR(10) NOT NULL,tenure VARCHAR(255) NOT NULL,specialization VARCHAR(255) NOT NULL,available BOOLEAN NOT NULL,primary key(doctor_id));

CREATE TABLE hospital(rooms VARCHAR(255),pr BOOLEAN, available BOOLEAN);

CREATE TABLE appointments(doctor_id SERIAL ,patient_id SERIAL ,date DATE NOT NULL,hr INT NOT NULL,foreign key(doctor_id) references doctor(doctor_id),foreign key(patient_id) references patient(patient_id),primary key(doctor_id,date,hr));

CREATE TABLE leaflet_history(doctor_id SERIAL , patient_id SERIAL,date DATE NOT NULL,hr INT NOT NULL,disease VARCHAR(255) NOT NULL,cure VARCHAR(255) NOT NULL,room_number VARCHAR(255) NOT NULL,arrival_date DATE NOT NULL,foreign key(doctor_id,date,hr) references appointments(doctor_id,date,hr),foreign key(doctor_id) references doctor(doctor_id),foreign key(patient_id) references patient(patient_id),primary key(patient_id,doctor_id,date,hr));


INSERT INTO hospital values('G11',FALSE,TRUE);
INSERT INTO hospital values('G12',FALSE,TRUE);
INSERT INTO hospital values('G13',FALSE,TRUE);
INSERT INTO hospital values('G14',FALSE,TRUE);
INSERT INTO hospital values('G15',FALSE,TRUE);
INSERT INTO hospital values('G21',FALSE,TRUE);
INSERT INTO hospital values('G22',FALSE,TRUE);
INSERT INTO hospital values('G23',FALSE,TRUE);
INSERT INTO hospital values('G24',FALSE,TRUE);
INSERT INTO hospital values('G25',FALSE,TRUE);
INSERT INTO hospital values('G31',FALSE,TRUE);
INSERT INTO hospital values('G32',FALSE,TRUE);
INSERT INTO hospital values('G33',FALSE,TRUE);
INSERT INTO hospital values('G34',FALSE,TRUE);
INSERT INTO hospital values('G35',FALSE,TRUE);
INSERT INTO hospital values('P1',TRUE,TRUE);
INSERT INTO hospital values('P2',TRUE,TRUE);
INSERT INTO hospital values('P3',TRUE,TRUE);
INSERT INTO hospital values('P4',TRUE,TRUE);
INSERT INTO hospital values('P5',TRUE,TRUE);