-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 11, 2022 at 10:07 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tourista b2b`
--

-- --------------------------------------------------------

--
-- Table structure for table `tourcollaborate`
--

CREATE TABLE `tourcollaborate` (
  `id` int(10) NOT NULL,
  `operatorId` varchar(255) NOT NULL,
  `tourId` int(10) NOT NULL,
  `collaborateStatus` int(10) NOT NULL DEFAULT 0,
  `price` int(100) NOT NULL,
  `quantity` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tourcollaborate`
--

INSERT INTO `tourcollaborate` (`id`, `operatorId`, `tourId`, `collaborateStatus`, `price`, `quantity`) VALUES
(4, 'admin', 2, 0, 25000, 2),
(5, 'ali123', 2, 0, 5555, 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tourcollaborate`
--
ALTER TABLE `tourcollaborate`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tourcollaborate`
--
ALTER TABLE `tourcollaborate`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
