DROP SCHEMA IF EXISTS zemoso_diagnostics;

CREATE SCHEMA zemoso_diagnostics;

USE zemoso_diagnostics;

DROP TABLE IF EXISTS `address`;

CREATE TABLE `address` (
    `address_id` int NOT NULL AUTO_INCREMENT,
    `address_type` varchar(45) NOT NULL,
    `user_id` varchar(45) NOT NULL,
    `house_no` varchar(45) NOT NULL,
    `area` varchar(45) NOT NULL,
    `zipcode` varchar(45) NOT NULL,
    `city_state` varchar(45) NOT NULL,
    PRIMARY KEY (`address_id`),
    KEY `user_id` (`user_id`),
    CONSTRAINT `address_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

LOCK TABLES `address` WRITE;

UNLOCK TABLES;


DROP TABLE IF EXISTS `orders`;

CREATE TABLE `orders` (
    `order_id` int NOT NULL AUTO_INCREMENT,
    `user_id` varchar(45) NOT NULL,
    `address_id` int NOT NULL,
    `patient_id` int NOT NULL,
    `appointment_date` date NOT NULL,
    `appointment_time` varchar(45) NOT NULL,
    PRIMARY KEY (`order_id`),
    KEY `user_id` (`user_id`),
    KEY `address_id` (`address_id`),
    KEY `patient_id` (`patient_id`),
    CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
    CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`address_id`) REFERENCES `address` (`address_id`),
    CONSTRAINT `orders_ibfk_3` FOREIGN KEY (`patient_id`) REFERENCES `patient` (`patient_id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

LOCK TABLES `orders` WRITE;

UNLOCK TABLES;

DROP TABLE IF EXISTS `patient`;

CREATE TABLE `patient` (
    `patient_id` int NOT NULL AUTO_INCREMENT,
    `relation` varchar(45) NOT NULL,
    `user_id` varchar(45) NOT NULL,
    `name` varchar(45) NOT NULL,
    `date_of_birth` date NOT NULL,
    `gender` varchar(45) NOT NULL,
    PRIMARY KEY (`patient_id`),
    KEY `user_id` (`user_id`),
    CONSTRAINT `patient_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

LOCK TABLES `patient` WRITE;

UNLOCK TABLES;

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
    `user_id` varchar(45) NOT NULL,
    `user_name` varchar(45) NOT NULL,
    `email` varchar(45) NOT NULL,
    `phone_no` varchar(45) NOT NULL,
    PRIMARY KEY (`user_id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

LOCK TABLES `users` WRITE;

UNLOCK TABLES;
