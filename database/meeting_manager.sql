-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 10, 2023 at 08:17 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `meeting_manager`
--

-- --------------------------------------------------------

--
-- Table structure for table `devgroups`
--

CREATE TABLE `devgroups` (
  `devGroupCode` int(11) NOT NULL,
  `devGroupName` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `devgroups`
--

INSERT INTO `devgroups` (`devGroupCode`, `devGroupName`) VALUES
(1, 'John Bryce'),
(2, 'Giffity');

-- --------------------------------------------------------

--
-- Table structure for table `meetings`
--

CREATE TABLE `meetings` (
  `meetingCode` int(11) NOT NULL,
  `devGroupCode` int(11) NOT NULL,
  `startingDateAndTime` datetime NOT NULL,
  `endingDateAndTime` datetime NOT NULL,
  `description` varchar(50) NOT NULL,
  `room` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `meetings`
--

INSERT INTO `meetings` (`meetingCode`, `devGroupCode`, `startingDateAndTime`, `endingDateAndTime`, `description`, `room`) VALUES
(1, 2, '2023-05-10 17:50:44', '2023-05-10 17:50:44', 'tests Meeting', '505 '),
(2, 1, '2023-05-10 17:50:44', '2023-05-10 17:50:44', 'interview hiring Meeting', '406 Conference-Room'),
(3, 2, '2023-05-10 17:54:51', '2023-05-10 17:54:51', 'third meeting', '701 D'),
(4, 1, '2023-05-10 17:54:51', '2023-05-10 17:54:51', 'mysql meeting', '402 F'),
(5, 1, '2023-05-10 14:50:44', '2023-05-10 14:50:44', 'John Bryce Graduation', '600 '),
(6, 1, '2023-05-12 00:00:00', '2023-05-24 00:00:00', 'good Luck!', '404'),
(7, 1, '2023-06-09 00:00:00', '2023-05-16 00:00:00', 'Hard testttt', '22');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `devgroups`
--
ALTER TABLE `devgroups`
  ADD PRIMARY KEY (`devGroupCode`);

--
-- Indexes for table `meetings`
--
ALTER TABLE `meetings`
  ADD PRIMARY KEY (`meetingCode`),
  ADD KEY `devGroupCode` (`devGroupCode`),
  ADD KEY `devGroupCode_2` (`devGroupCode`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `devgroups`
--
ALTER TABLE `devgroups`
  MODIFY `devGroupCode` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `meetings`
--
ALTER TABLE `meetings`
  MODIFY `meetingCode` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `meetings`
--
ALTER TABLE `meetings`
  ADD CONSTRAINT `meetings_ibfk_1` FOREIGN KEY (`devGroupCode`) REFERENCES `devgroups` (`devGroupCode`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
