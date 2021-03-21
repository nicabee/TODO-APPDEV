-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 21, 2021 at 09:46 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.2.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `todolizt`
--

-- --------------------------------------------------------

--
-- Table structure for table `tasks`
--

CREATE TABLE `tasks` (
  `id` int(11) NOT NULL,
  `accountUuid` varchar(255) NOT NULL,
  `task` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `completed_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tasks`
--

INSERT INTO `tasks` (`id`, `accountUuid`, `task`, `description`, `status`, `created_at`, `completed_at`) VALUES
(1, 'kAWTQMhgnMpWdJRMsm1BqbWkJIQYJPXQ', 'yawa', 'kaon tae', 'completed', '2021-03-19 00:34:31', '2021-03-19 00:35:11'),
(2, 'kAWTQMhgnMpWdJRMsm1BqbWkJIQYJPXQ', 'hatdog', 'hatdogogogogog', 'pending', '2021-03-19 00:36:51', NULL),
(3, 'c3a03a53-2158-4cf9-a0a2-65d5dd19d6f2', 'yaersfsf', 'sdfsdf', 'completed', '2021-03-19 02:29:01', '2021-03-19 02:30:24'),
(12, '54947b34-e73f-42a0-ac97-78bc323ea050', '123123', '213123213', 'completed', '2021-03-19 14:26:55', '2021-03-19 06:27:08'),
(18, 'a7335bd7-3cdb-4be7-bf21-bfbdbe31fb9b', 'hakdog', 'hakdog', 'pending', '2021-03-19 17:47:06', NULL),
(20, 'a7335bd7-3cdb-4be7-bf21-bfbdbe31fb9b', 'asdsa', 'asdasdsd', 'pending', '2021-03-19 17:49:25', NULL),
(26, '54947b34-e73f-42a0-ac97-78bc323ea050', 'HAHAHAH', 'AHAHAHAHA', 'pending', '2021-03-20 15:06:05', NULL),
(28, '54947b34-e73f-42a0-ac97-78bc323ea050', 'aaaa', 'aaa', 'pending', '2021-03-20 15:19:57', NULL),
(30, '54947b34-e73f-42a0-ac97-78bc323ea050', 'testtassss', 'testtt', 'completed', '2021-03-20 15:27:48', '2021-03-20 07:27:56'),
(31, '54947b34-e73f-42a0-ac97-78bc323ea050', 'hahahah', 'hahahah', 'pending', '2021-03-20 15:29:47', NULL),
(33, '7ij7zdQ2pRausE6lUGvbN4A1DUvFWKzG', 'gegege', 'gegege', 'pending', '2021-03-20 15:41:32', NULL),
(34, '7ij7zdQ2pRausE6lUGvbN4A1DUvFWKzG', '123123', '123123', 'completed', '2021-03-20 15:41:36', '2021-03-20 07:41:53'),
(37, '864a0b42-d69c-4c56-a8a5-49b08e451859', 'hehe', 'hehe', 'pending', '2021-03-20 16:22:14', NULL),
(39, 'e0b63237-2f32-4657-9a43-d542b3c879d6', '1111', '1111', 'pending', '2021-03-20 16:25:16', NULL),
(44, '500ed32b-0d7a-4f87-bcd0-4df00618bcc1', 'tzuyu', 'chewy', 'pending', '2021-03-20 16:28:27', NULL),
(47, '10a376d0-8737-4218-a8d3-e0a758fec4da', '111', '111', 'pending', '2021-03-21 07:28:22', NULL),
(49, 'b1cfa859-f0e5-41d7-8945-490a1a16e9d5', 'eee', 'eeee', 'pending', '2021-03-21 07:50:12', NULL),
(51, 'ed7980d6-e6d8-4c35-babc-2a84335f1602', 'ahehe', '123123', 'pending', '2021-03-21 08:08:29', NULL),
(54, 'd331ab45-a42e-4885-a890-106614311c01', 'anime', 'watch anime', 'completed', '2021-03-21 08:41:01', '2021-03-21 00:42:36'),
(56, 'd331ab45-a42e-4885-a890-106614311c01', 'kpop', 'listen to blackpink for 24 hrs', 'pending', '2021-03-21 08:42:32', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `uuid`, `username`, `password`) VALUES
(1, 'kAWTQMhgnMpWdJRMsm1BqbWkJIQYJPXQ', 'test1', '$2b$11$abyGJ1TL5Rlrb90QdiVWpeC47b6qraaAs5tA.QQe4yoiDJDKRDfoy'),
(2, 'YC03iFFWsjX7I90ULOZvSg8Y21Mt3ABs', 'test2', '$2b$11$4CooOyFqVCWYhTQ6n0B/g.khC5UjC2ZF1nM2NAZr6iNfTz0JjqFCm'),
(3, '7ij7zdQ2pRausE6lUGvbN4A1DUvFWKzG', 'test5', '$2b$11$l7PMNXCozDtWWgCq30c2tufzEUr61Z29jt5Mj9f86eNNUEIZVpGlS'),
(4, 'ZPJcpSsnM60Vwu1l1OMOl3Nu9Fn8nXgf', 'test3', '$2b$11$jo.Oj8.AJNRoXyREjOLyN.k8dwkxe1.2l7D1PScUA5ZwSpCUVTYHi'),
(5, 'c3a03a53-2158-4cf9-a0a2-65d5dd19d6f2', 'test4', '$2b$10$9ctIajTL0x0hglrWohMwn.EK0O1LhK8LTVL2s6cV6zxKPPjebtwZi'),
(6, 'ed7980d6-e6d8-4c35-babc-2a84335f1602', 'test10', '$2b$10$2g5zozn01EljtM8dhv9A/uCXMvBECgw8WSWbihUK4lBSeTI7umOxe'),
(7, '54947b34-e73f-42a0-ac97-78bc323ea050', 'test6', '$2b$10$A5gh.j7cljl.OG7sxSN7EuWpVzeadQuWpupNyAUcKYvLnwjcr45NK'),
(8, 'a7335bd7-3cdb-4be7-bf21-bfbdbe31fb9b', 'test9', '$2b$10$478XeaI1vTXkzoB.y99EdeI22QgEUEG7acUvPmGnXyajn18BIDMEe'),
(9, '864a0b42-d69c-4c56-a8a5-49b08e451859', 'arianagrande', '$2b$10$.myFdFMyANrBvbouXONTiO6sbxrrFubioEsQLke7soyrYxdZe2eQi'),
(10, 'e0b63237-2f32-4657-9a43-d542b3c879d6', 'redvelvet', '$2b$10$rNV/oRUeQoxa.gx5fDjfguUiID6CveMsoHE0UHcU8Fd945zJDBgxa'),
(11, '500ed32b-0d7a-4f87-bcd0-4df00618bcc1', 'test', '$2b$10$Zoyt1xGW0.oWRMJELEi41O8/w2DM4sPkYnB2gZ8.8aDTKaI9Kavq6'),
(12, '8042b6aa-bdea-4678-b7f0-0c8c8ca707e0', 'test6', '$2b$10$DlG/WXfnUi83RjYEgLZRy.XoNGxujxKZp0UXG9YHhJNKdmLlePNsa'),
(13, '8204d4fa-ce39-43b5-9371-e489b2800d45', 'test7', '$2b$10$LGuRMYTfwQrbcIyeQJ/lTOdtze4acCSBQuW9UTVDMWQ7SB.ahGl2S'),
(14, '8a66db7f-9dff-440b-80a2-8e414c30f63e', 'test1234', '$2b$10$rr0A1ei/z1Rx11D82z.JTOZL.GQxx.b.cOSUIk2mJv9tO8K.JY8Fm'),
(15, '908a67bf-4213-4c13-baef-a38b5d300625', 'test7', '$2b$10$ltMARn1B69YVFKyjobKWD..YEksLNClTcgRpv/8ZYkNRec45sTdpa'),
(16, 'b857a857-528c-4a70-8007-03ab0a0c1141', 'test7', '$2b$10$tSykTZC4wINwpdAAEi5nzuB6Eipns9xZ0Tn5YtoEk/pJD69M/3ugW'),
(17, '51c82660-1afa-4164-8748-a3d6af156585', 'test321', '$2b$10$jjNBWF.PCOE/mLJtLLDQoeB/FdyMUlY.Fub5pIQeUattxZ01srPca'),
(18, '10a376d0-8737-4218-a8d3-e0a758fec4da', 'test55', '$2b$10$UTW85nurRjwlZp9W1y.StOjPAlA2kuiCgLlwBnvOwhVjv0KyVO7Hm'),
(19, 'b101d158-4d10-48dd-bdc6-572e76a6ab69', 'test56', '$2b$10$oxk9Tvf7qvjJvhrwHpWee.t./AJS8j03xXDnsU86Zf3k.87yuEmWq'),
(20, 'b1cfa859-f0e5-41d7-8945-490a1a16e9d5', 'jisoo', '$2b$10$WKwPgHwA7cKhDjHj8apx9e/tgHpaXkZvWRi5Tiyub/MHhao05OIi.'),
(21, 'd331ab45-a42e-4885-a890-106614311c01', 'accountest', '$2b$10$w6NLJbDQctHt29l0xFXtN.F/h3.94Lda.AYngZ8GL36w2BfMiJMjG');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
