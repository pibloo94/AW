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
	image VARCHAR(20),
	points INT DEFAULT 0
);

CREATE TABLE question(
	id_question INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	title VARCHAR(50),
	opA VARCHAR(50),
	opB VARCHAR(50),
	opC VARCHAR(50),
	opD VARCHAR(50)
);

CREATE TABLE answer(
	question INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	user INT NOT NULL,
	answer ENUM('a', 'b', 'c', 'd', 'o'),
	other VARCHAR(50),
	FOREIGN KEY (user) REFERENCES user(id_user),
	FOREIGN KEY (question) REFERENCES question(id_question)
);

CREATE TABLE answerForOther(
	question INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	user INT NOT NULL,
	userGuess INT NOT NULL,
	answer ENUM('a', 'b', 'c', 'd'),
	correct BOOLEAN NOT NULL DEFAULT 0,
	FOREIGN KEY (user) REFERENCES user(id_user),	
	FOREIGN KEY (userGuess) REFERENCES user(id_user),	
	FOREIGN KEY (question) REFERENCES question(id_question)
);


CREATE TABLE friend(
	usera INT NOT NULL,
	userb INT NOT NULL,
	FOREIGN KEY (usera) REFERENCES user(id_user),
	FOREIGN KEY (userb) REFERENCES user(id_user),
	PRIMARY KEY(usera, userb)
);

CREATE TABLE request(
	fromUser INT NOT NULL,
	toUser INT NOT NULL,
	FOREIGN KEY (fromUser) REFERENCES user(id_user),
	FOREIGN KEY (toUser) REFERENCES user(id_user),
	PRIMARY KEY(fromUser, toUser)
);