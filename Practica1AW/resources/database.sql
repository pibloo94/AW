/*
user (0,n) ------ (1,1) question
question () ------ () answer

*/


DROP DATABASE database;

CREATE TABLE user(
	id_user INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	email VARCHAR(50),
	pass VARCHAR(50),
	fullname VARCHAR(40),
	sex CHAR(1),
	birthdate DATE,
	image VARCHAR(20)
);

CREATE TABLE question(
	id_question INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	user INT NOT NULL,
	FOREIGN KEY (user) REFERENCES user(id_user)

);

CREATE TABLE answer(
	id_question INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	user INT NOT NULL,
	right BOOLEAN NOT NULL DEFAULT 0,
	FOREIGN KEY (user) REFERENCES user(id_user)

);

CREATE TABLE friend(
	usera INT NOT NULL,
	userb INT NOT NULL,
	FOREIGN KEY (usera, userb) REFERENCES user(id_user),
	PRIMARY KEY(uasera, userb)
);