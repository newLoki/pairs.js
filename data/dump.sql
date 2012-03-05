DROP DATABASE IF EXISTS `memory`;

CREATE DATABASE `memory`;

USE `memory`;

CREATE TABLE `users` (`id` INT PRIMARY KEY AUTO_INCREMENT, `username` VARCHAR(255), `password` VARCHAR(255), `token` VARCHAR(255));

INSERT INTO `users` (`username`, `password`) VALUES
('thorsten', MD5('thorsten')),
('sebastian', MD5('sebastian')),
('workshop', MD5('workshop'));
