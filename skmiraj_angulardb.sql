-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 27, 2023 at 11:02 AM
-- Server version: 8.0.33
-- PHP Version: 8.2.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `skmiraj_angulardb`
--

-- --------------------------------------------------------

--
-- Table structure for table `app`
--

CREATE TABLE `app` (
  `app_id` int NOT NULL,
  `user_id` int NOT NULL,
  `job_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `app`
--

INSERT INTO `app` (`app_id`, `user_id`, `job_id`) VALUES
(1, 12, 2),
(2, 12, 4),
(3, 2, 2),
(4, 16, 4),
(5, 16, 4),
(6, 16, 4),
(7, 16, 4),
(8, 16, 4),
(9, 16, 1),
(10, 16, 3),
(11, 16, 8),
(12, 16, 16),
(13, 16, 15),
(14, 16, 16),
(15, 16, 11),
(16, 16, 13);

-- --------------------------------------------------------

--
-- Stand-in structure for view `application_information`
-- (See below for the actual view)
--
CREATE TABLE `application_information` (
`app_id` int
,`applicant_cv_file` varchar(50)
,`applicant_email` varchar(50)
,`applicant_id` int
,`applicant_name` varchar(50)
,`applicant_photo` varchar(50)
,`company_address` text
,`company_id` int
,`company_name` varchar(50)
,`employer_email` varchar(50)
,`employer_id` int
,`employer_name` varchar(50)
,`employer_photo` varchar(50)
,`job_description` text
,`job_id` int
,`job_location` varchar(200)
,`job_salary` decimal(10,2)
,`job_title` varchar(50)
,`job_type` varchar(50)
,`job_vacancy` int
);

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `category_id` int NOT NULL,
  `category_name` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`category_id`, `category_name`) VALUES
(1, 'একাউন্টিং/ফিন্যান্স'),
(2, 'প্রোডাকশন/অপারেশন'),
(3, 'এগ্রো'),
(4, 'ব্যাংক/নন ব্যাংক ইন্সটিটিউট'),
(5, 'হসপিটালিটি/টুরিজম'),
(6, 'এনজিও/উন্নয়ন'),
(7, 'সাপ্লাই চেইন/ সংগ্রহ'),
(8, 'ব্যবসায়িক'),
(9, 'রিসার্চ/কনসালটেন্সি'),
(10, 'শিক্ষা / প্রশিক্ষন'),
(11, 'বিউটি কেয়ার/স্বাস্থ্য'),
(12, 'সেক্রেটারি/রিসিপশনিস্ট'),
(13, 'ইঞ্জিনিয়ার/আর্কিটেক্ট'),
(14, 'আইটি/টেলিকমিউনিকেশন'),
(15, 'ডাটা এন্ট্রি/অপারেটর'),
(16, 'গার্মেন্টস/টেক্সটাইল'),
(17, 'বিপনন/বিক্রয়'),
(18, 'ড্রাইভিং/মোটর টেকনিশিয়ান'),
(19, 'এইচ আর / ডেভেলপমেন্ট'),
(20, 'কাস্টমার সার্ভিস/ কল সেন্টার'),
(21, 'সিকিউরিটি/সাপোর্ট সার্ভিস'),
(22, 'জেনারেল ম্যানেজমেন্ট/এডমিন'),
(23, 'মিডিয়া/এড/ইফেন্ট'),
(24, 'আইন/আইনি'),
(25, 'ডিজাইন/ক্রিয়েটিভ'),
(26, 'মেডিকেল/ফার্মা'),
(27, 'ইলেক্ট্রিশিয়ান/রিপেয়ার');

-- --------------------------------------------------------

--
-- Table structure for table `company`
--

CREATE TABLE `company` (
  `company_id` int NOT NULL,
  `company_name` varchar(50) DEFAULT NULL,
  `company_address` text,
  `user_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`company_id`, `company_name`, `company_address`, `user_id`) VALUES
(1, 'গ্রামীনফোন', 'ঢাকা', 17),
(2, 'ব্রাক', 'ঢাকা', 17),
(3, 'বেক্সিমকো', 'ঢাকা', 17),
(4, 'রবি', 'ঢাকা', 17),
(5, 'স্কয়ার', 'ঢাকা', 17),
(6, 'এ সি আই লিমিটেড', 'ঢাকা', 17),
(7, 'বাংলালিংক', 'ঢাকা', 17),
(8, 'প্রান আরএফ এল গ্রুপ', 'ঢাকা', 17),
(9, 'ইস্টার্ন ব্যাংক লিমিটেড', 'ঢাকা', 17),
(10, 'ইউনাইটেড কমার্শিয়াল ব্যাংক লিমিটেড', 'ঢাকা', 17);

-- --------------------------------------------------------

--
-- Table structure for table `cv`
--

CREATE TABLE `cv` (
  `user_id` int NOT NULL,
  `cv_education` json DEFAULT NULL,
  `cv_experience` json DEFAULT NULL,
  `cv_address` json DEFAULT NULL,
  `cv_training` json DEFAULT NULL,
  `cv_personal_details` json DEFAULT NULL,
  `cv_status` int DEFAULT NULL,
  `cv_file` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `cv`
--

INSERT INTO `cv` (`user_id`, `cv_education`, `cv_experience`, `cv_address`, `cv_training`, `cv_personal_details`, `cv_status`, `cv_file`) VALUES
(16, NULL, NULL, NULL, NULL, NULL, NULL, 'MyCv.pdf');

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `job_id` int NOT NULL,
  `job_title` varchar(50) DEFAULT NULL,
  `job_salary` decimal(10,2) DEFAULT NULL,
  `job_description` text,
  `job_vacancy` int DEFAULT NULL,
  `job_location` varchar(200) DEFAULT NULL,
  `job_type` varchar(50) DEFAULT NULL,
  `job_status` int DEFAULT NULL,
  `category_id` int DEFAULT NULL,
  `s_category_id` int DEFAULT NULL,
  `company_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `jobs`
--

INSERT INTO `jobs` (`job_id`, `job_title`, `job_salary`, `job_description`, `job_vacancy`, `job_location`, `job_type`, `job_status`, `category_id`, `s_category_id`, `company_id`) VALUES
(11, 'Nurse', 50000.00, 'Job Responsibilities\r\nDelegate and designate nursing duties to ensure all patient care is carried out in a timely and effective manner.\r\nEnsure quality of patient care is maintained including compliance with prescribed treatment and company policy.\r\nIdentify and investigate nursing problems grievances and assist to resolve them.\r\nReport and document all accidents / incident to patients, staff.\r\nEnsure that all registers and documents are maintained properly\r\nEnsure effective and appropriate patient care.\r\nEnsure patients care standards all the time.\r\nEnsure safe environment for both staff and patients.\r\nPerform extra duties & any other task assign by the authority.\r\nEmployment Status\r\nFull-time\r\n\r\nWorkplace\r\nWork at office\r\nEducational Requirements\r\nDiploma in Nursing in Nursing Science,\r\nBachelor of Science (BSc) in Nursing Science\r\nSkills Required: Hard Working, Patient management\r\nExperience Requirements\r\nAt least 2 year(s)\r\nThe applicants should have experience in the following area(s):\r\nNursing\r\nThe applicants should have experience in the following business area(s):\r\nGarments\r\nAdditional Requirements\r\nAge at least 24 years\r\nBoth males and females are allowed to apply\r\nShould have experience in workers fitness checking in Garments.\r\nRisk management experience and issues especially in the ready-made garments industry.\r\nAdvanced ability to ensure the highest standards in patient care and compliance with healthcare regulations.\r\nExcellent interpersonal, communication, and leadership skills.\r\nJob Location\r\nNarayanganj\r\n\r\nSalary\r\nNegotiable\r\nCompensation & Other Benefits\r\nSalary Review: Yearly\r\nFestival Bonus: 2\r\nAs per company policy.\r\nJob Source\r\nBdjobs.com Online Job Posting.', 10, 'Dhaka', 'Full Time', 1, 26, 15, 6),
(12, 'Executive- Internal Audit', 60000.00, 'Job Context\r\nAd-din Foundation is inviting applications from eligible candidates for the mentioned position.\r\nJob Location: Dhaka (Corporate Office)\r\nJob Responsibilities\r\nN/A\r\nEmployment Status\r\nFull-time\r\n\r\nEducational Requirements\r\nMBA / MBS / M. Com with CA (CC)\r\nAdditional Requirements\r\nAge at most 32 years\r\nCandidates with relevant experience will get the preference.\r\nJob Location\r\nDhaka\r\n\r\nSalary\r\nNegotiable\r\nCompensation & Other Benefits\r\nFestival Bonus: 2\r\nProvident-Fund\r\nGratuity\r\nHealth service\r\nPartially Subsidized Lunch\r\nJob Source\r\nBdjobs.com Online Job Posting.', 5, 'Dhaka', 'Full Time', 1, 1, 15, 8),
(13, 'Marketing and Sales Representative', 40000.00, 'Job Context\r\nA sister concern company, Knight Rider Motors, is looking for a Smart, Enthusiastic and Dynamic Marketing and Sales Officer to keep up-to-date Portfolio records and oversee smooth communication with clients. The successful candidate will have great communications skills and a strong quantitative background, along with a proven track record of successfully handling clients. The ideal candidate should be a team player, enjoy working with a variety of clients. We also value those who are ready to learn and adapt with a fast-paced work environment. Those looking for a long-term relationship will be given priority during the selection process.\r\nJob Responsibilities\r\nProspect and qualify new sales leads\r\nScheduling meetings and interacting with clients over Phone and by visit\r\nConvincing customers & feedback from clients\r\nFollowing up and reporting to higher authority on daily basis\r\nCommitted to fulfill the given target\r\nCreate, plan, and deliver presentations on company products\r\nDeveloping strong, ongoing relationships with prospects and customers\r\nTaking inquiries and questions, handling complaints, troubleshooting problems and providing information to the customers / prospects\r\nMeet and/or exceed quotas\r\nAny other tasks as directed by Higher Authority\r\nEmployment Status\r\nFull-time\r\n\r\nEducational Requirements\r\nBachelor of Commerce (BCom) in Marketing\r\nBachelor / Honors from any Public or Private Universities.\r\nSkills Required: Business Development, Sales Target\r\nExperience Requirements\r\nAt least 1 year(s)\r\nThe applicants should have experience in the following area(s):\r\nB2C (Business to Consumer)\r\nThe applicants should have experience in the following business area(s):\r\nAutomobile\r\nAdditional Requirements\r\nAge 23 to 32 years\r\nOnly males are allowed to apply\r\n**Minimum 1 year experience in B2C sales is mandatory.\r\nJob Location\r\nChattogram\r\n\r\nSalary\r\nNegotiable\r\nCompensation & Other Benefits\r\nMobile bill\r\nSalary Review: Yearly\r\nFestival Bonus: 2\r\nJob Source\r\nBdjobs.com Online Job Posting.', 3, 'Chittagong', 'Full Time', 1, 2, 15, 8),
(15, 'সহকারী শিক্ষক', 30000.00, 'বিধিমোতাবেক আমিন মডেল টাউন স্কুল এন্ড কলেজ, ধামরাই এর জন্য সৃষ্ট পদে নিম্নলিখিত বিষয়ের সহকারী শিক্ষক আবশ্যক ।\r\nসহকারী শিক্ষক (সৃষ্টপদ):\r\nগণিত\r\nশারিরীক শিক্ষা (Bp.ed)\r\nরসায়ন\r\nকৃষিশিক্ষা', 4, 'Dhaka', 'Full Time', 1, 6, 15, 7),
(16, 'Full Stack Web Developer', 80000.00, 'Solid working knowledge of PHP for Laravel Developer\r\nExpert in frontend web development including HTML5, CSS3, JavaScript, Ajax, Bootstrap, and web APIs\r\nShould have experience with MVC\r\nMust have clear understanding in OOP, SQL, Database Design, HTTP Request/Response life cycle\r\nFamiliar with version control system - Git, Bitbucket\r\nExperiences in E-commerce system development\r\nExperience working with third-party systems and services such as payment gateway social media platforms, and other software solutions\r\nExperiences in cPanel - Server Maintenance & Configuration\r\nExcellent analytical, problem-solving, and decision-making skills\r\nExcellent Communication skill', 4, 'Dhaka', 'Full Time', 1, 14, 15, 4),
(17, 'sdgg', 124.00, 'dfghhgh', 2, 'fghhg', 'Full Time', 1, 8, 15, 7);

-- --------------------------------------------------------

--
-- Stand-in structure for view `jobs_information`
-- (See below for the actual view)
--
CREATE TABLE `jobs_information` (
`category_name` varchar(50)
,`company_name` varchar(50)
,`employer_id` int
,`job_description` text
,`job_id` int
,`job_location` varchar(200)
,`job_salary` decimal(10,2)
,`job_status` int
,`job_title` varchar(50)
,`job_type` varchar(50)
,`job_vacancy` int
,`s_category_name` varchar(50)
);

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `role_id` int NOT NULL,
  `role_name` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`role_id`, `role_name`) VALUES
(1, 'Admin'),
(2, 'Candidate'),
(3, 'Employeer');

-- --------------------------------------------------------

--
-- Table structure for table `s_categories`
--

CREATE TABLE `s_categories` (
  `s_category_id` int NOT NULL,
  `s_category_name` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `s_categories`
--

INSERT INTO `s_categories` (`s_category_id`, `s_category_name`) VALUES
(1, 'ডাটা এন্ট্রি অপারেটর'),
(2, 'ইলেকট্রনিক্স'),
(3, 'প্যাথলজি/ল্যাব সহকারি'),
(4, 'মেকানিক/টেকনিশিয়ান'),
(5, 'ড্রাইভার'),
(6, 'সিকিরিটি গার্ড'),
(7, 'নার্স'),
(8, 'শেফ/বাবুর্চি'),
(9, 'ওয়েটার/ওয়েট্রেস'),
(10, 'ডেলিভারি ম্যান'),
(11, 'পিয়ন'),
(12, 'শোরুম সহকারি/সেলস ম্যান'),
(13, 'গ্রাফিক্স ডিজাইনার'),
(14, 'বিক্রয় প্রতিনিধি'),
(15, 'অন্যান্য');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int NOT NULL,
  `user_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `user_email` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `user_username` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `user_password` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `user_photo` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `role_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `user_name`, `user_email`, `user_username`, `user_password`, `user_photo`, `role_id`) VALUES
(12, 'Mohagani', 'sdgd@bash.com', 'sdgg', 'sdgg', '1692676844_74120932.jpg', 2),
(15, 'Sk Miraj', 'skmirajbn@gmail.com', 'skmiraj', '11', '1692677725_412190262.jfif', 1),
(16, 'Alamin', 'alamin@gmail.com', 'alamin', '11', '1692682946_2004650621.jpg', 2),
(17, 'Mosharraf', 'jahagir', 'jahangir', '11', '1692686491_2032772052.png', 3);

-- --------------------------------------------------------

--
-- Structure for view `application_information`
--
DROP TABLE IF EXISTS `application_information`;

CREATE ALGORITHM=UNDEFINED DEFINER=`skmiraj`@`%` SQL SECURITY DEFINER VIEW `application_information`  AS SELECT `a`.`app_id` AS `app_id`, `u1`.`user_id` AS `applicant_id`, `u1`.`user_name` AS `applicant_name`, `u1`.`user_email` AS `applicant_email`, `u1`.`user_photo` AS `applicant_photo`, `cv`.`cv_file` AS `applicant_cv_file`, `j`.`job_id` AS `job_id`, `j`.`job_title` AS `job_title`, `j`.`job_salary` AS `job_salary`, `j`.`job_description` AS `job_description`, `j`.`job_vacancy` AS `job_vacancy`, `j`.`job_location` AS `job_location`, `j`.`job_type` AS `job_type`, `c`.`company_id` AS `company_id`, `c`.`company_name` AS `company_name`, `c`.`company_address` AS `company_address`, `u2`.`user_id` AS `employer_id`, `u2`.`user_name` AS `employer_name`, `u2`.`user_email` AS `employer_email`, `u2`.`user_photo` AS `employer_photo` FROM (((((`app` `a` join `users` `u1` on((`a`.`user_id` = `u1`.`user_id`))) join `jobs` `j` on((`a`.`job_id` = `j`.`job_id`))) join `company` `c` on((`j`.`company_id` = `c`.`company_id`))) join `users` `u2` on((`c`.`user_id` = `u2`.`user_id`))) left join `cv` on((`u1`.`user_id` = `cv`.`user_id`))) ;

-- --------------------------------------------------------

--
-- Structure for view `jobs_information`
--
DROP TABLE IF EXISTS `jobs_information`;

CREATE ALGORITHM=UNDEFINED DEFINER=`skmiraj`@`%` SQL SECURITY DEFINER VIEW `jobs_information`  AS SELECT `j`.`job_id` AS `job_id`, `j`.`job_title` AS `job_title`, `j`.`job_salary` AS `job_salary`, `j`.`job_description` AS `job_description`, `j`.`job_vacancy` AS `job_vacancy`, `j`.`job_location` AS `job_location`, `j`.`job_type` AS `job_type`, `j`.`job_status` AS `job_status`, `u`.`user_id` AS `employer_id`, `c`.`category_name` AS `category_name`, `sc`.`s_category_name` AS `s_category_name`, `co`.`company_name` AS `company_name` FROM ((((`jobs` `j` join `categories` `c` on((`j`.`category_id` = `c`.`category_id`))) join `s_categories` `sc` on((`j`.`s_category_id` = `sc`.`s_category_id`))) join `company` `co` on((`j`.`company_id` = `co`.`company_id`))) join `users` `u` on((`co`.`user_id` = `u`.`user_id`))) ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `app`
--
ALTER TABLE `app`
  ADD PRIMARY KEY (`app_id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`company_id`);

--
-- Indexes for table `cv`
--
ALTER TABLE `cv`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`job_id`),
  ADD KEY `company_id` (`company_id`),
  ADD KEY `category_id` (`category_id`),
  ADD KEY `s_category_id` (`s_category_id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`role_id`);

--
-- Indexes for table `s_categories`
--
ALTER TABLE `s_categories`
  ADD PRIMARY KEY (`s_category_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD KEY `role_id` (`role_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `app`
--
ALTER TABLE `app`
  MODIFY `app_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `category_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `company`
--
ALTER TABLE `company`
  MODIFY `company_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `job_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `s_categories`
--
ALTER TABLE `s_categories`
  MODIFY `s_category_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
