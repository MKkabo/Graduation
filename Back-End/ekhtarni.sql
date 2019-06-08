-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 31, 2019 at 01:29 AM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ekhtarni`
--

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `course_level` varchar(255) NOT NULL,
  `about` text NOT NULL,
  `duration` int(3) NOT NULL,
  `image` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`id`, `name`, `category`, `course_level`, `about`, `duration`, `image`, `location`) VALUES
(1, 'Data Science', 'IT-Data Analysis', 'beginner', 'The Applied Data Science module is delivered entirely online so students can participate in continuing education without disrupting their lives.\n\nStudents who successfully complete Unit I earn a certificate and an invitation to enroll in Unit II. Those who successfully complete Unit II earn an overall certificate. Students have the opportunity to complete either unit of the module with honors.', 5, 'uploads\\2019-04-30T07-28-32.547ZDS.png', 'Online - Courseraa'),
(2, 'Business Analytics Specialization', 'Business Analysis', 'Advanced', 'The Advanced Business Analytics Specialization brings together academic professionals and experienced practitioners to share real world data analytics skills you can use to grow your business, increase profits, and create maximum value for your shareholders. Learners gain practical skills in extracting and manipulating data using SQL code, executing statistical methods for descriptive, predictive, and prescriptive analysis, and effectively interpreting and presenting analytic results. The problems faced by decision makers in today’s competitive business environment are complex. Achieve a clear competitive advantage by using data to explain the performance of a business, evaluate different courses of action, and employ a structured approach to business problem-solving. Check out a one-minute video about this specialization to learn more! ', 9, 'uploads\\2019-04-30T07-38-10.232Zbs.jpeg', 'Online - Courseraa'),
(3, 'Deep Learning', 'Data Analysis', 'Advanced', 'If you want to break into AI, this Specialization will help you do so. Deep Learning is one of the most highly sought after skills in tech. We will help you become good at Deep Learning.\n\nIn five courses, you will learn the foundations of Deep Learning, understand how to build neural networks, and learn how to lead successful machine learning projects. You will learn about Convolutional networks, RNNs, LSTM, Adam, Dropout, BatchNorm, Xavier/He initialization, and more. You will work on case studies from healthcare, autonomous driving, sign language reading, music generation, and natural language processing. You will master not only the theory, but also see how it is applied in industry. You will practice all these ideas in Python and in TensorFlow, which we will teach.\n\nYou will also hear from many top leaders in Deep Learning, who will share with you their personal stories and give you career advice.\n\nAI is transforming multiple industries. After finishing this specialization, you will likely find creative ways to apply it to your work.', 12, 'uploads\\2019-05-21T15-52-44.508Z1_5ZuLCsB1KXEPgHu-qJ8WxQ.png', 'Online - Udemy'),
(4, 'Digital Marketing', 'Marketing', 'Advanced', 'This Specialization explores several aspects of the new digital marketing environment, including topics such as digital marketing analytics, search engine optimization, social media marketing, and 3D Printing. When you complete the Digital Marketing Specialization you will have a richer understanding of the foundations of the new digital marketing landscape and acquire a new set of stories, concepts, and tools to help you digitally create, distribute, promote and price products and services.', 6, 'uploads\\2019-05-21T15-56-17.212Zdigitalmarketing850.jpg', 'Online - Udemy'),
(5, 'Essential Career', 'Soft Skills', 'Beginers', 'This soft skills training course will teach you how to develop the skills that can make the difference between a lackluster career that tops out at middle management versus one that lands you in the executive suite. Or to wherever you define career success. So many soft skills seem like common sense at first glance, but they are not commonly applied by most workers. This soft skills training course will give you an edge over your competitors. It will also make your job, your career and your life more rewarding and enjoyable.\n\nWhat will students achieve or be able to do after taking this course?\n\nUnderstand how to be a great communicator\nBecome a stronger listener\nAppear professional to co-workers and bosses of all ages\nAvoid common career blunders that often end careers\nManage expectations for bosses and colleagues\nPosition yourself for promotions\nMake technology your asset, even if you are afraid of technology\nAvoid the Not My Job Syndrome\nDevelop EQ to Match Your IQ\nDevelop leadership qualities', 5, 'uploads\\2019-05-21T16-04-16.228Zsoft-skills-1.png', 'Tahrer - Greek campus '),
(6, 'ICDL', 'The International Computer Driving License ', 'Beginers', 'The ICDL was developed with the aim to enable both individuals and institutions to improve their uses of information technology and computers.\r\n\r\nThe ICDL is now required by many companies, the Ministry of Communications, the Ministry of Education, the Ministry of Health and Population and the Supreme Council of Universities; i.e. ICDL will be available for a wide range of people so as to be qualified to get jobs and to develop job skills.\r\nwww.ICDl.com', 5, 'uploads\\2019-05-21T16-14-15.465Z1851052_44c1.jpg', 'Ein Shams University');

-- --------------------------------------------------------

--
-- Table structure for table `education`
--

CREATE TABLE `education` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `school_name` varchar(255) NOT NULL,
  `degree` varchar(255) NOT NULL,
  `startDate` varchar(255) NOT NULL,
  `endDate` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `education`
--

INSERT INTO `education` (`id`, `user_id`, `school_name`, `degree`, `startDate`, `endDate`) VALUES
(2, 1, 'Tabry el hegaz', 'High School Diploma', '2014-12', '2015-12'),
(3, 5, 'Tabry el hegaz', 'High School', '2015-07', '2016-09'),
(4, 5, 'Helwan University', 'Baclerio\'s Degree', '2016-10', '2019-07');

-- --------------------------------------------------------

--
-- Table structure for table `experience`
--

CREATE TABLE `experience` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `job_title` varchar(255) NOT NULL,
  `company_name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `startDate` varchar(255) DEFAULT NULL,
  `endDate` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `experience`
--

INSERT INTO `experience` (`id`, `user_id`, `job_title`, `company_name`, `description`, `startDate`, `endDate`) VALUES
(1, 1, 'Traniee', 'NBE(National Bank of Egypt)', '-Customer service\r\n-Operations\r\n-HR Departments\r\n-IT Departments', '2017-08', '2017-09'),
(2, 1, 'Traniee', 'GANOP', '-IT Department\n-ERP Team\n-Network Team', '2018-07', '2018-08'),
(3, 5, 'Trainee', 'National Bank of Egypt(NBE)', '-Customer Service\n-Operations\n-IT Department', '2017-07', '2017-08'),
(4, 5, 'Trainee', 'GANOP', '-IT Department\n-ERP Team\n-Network & Secuirty', '2018-08', '2018-09');

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` int(11) NOT NULL,
  `job_title` varchar(255) NOT NULL,
  `job_field` varchar(255) NOT NULL,
  `company_name` varchar(255) NOT NULL,
  `requirements` text NOT NULL,
  `about` text NOT NULL,
  `image` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `jobs`
--

INSERT INTO `jobs` (`id`, `job_title`, `job_field`, `company_name`, `requirements`, `about`, `image`, `location`) VALUES
(1, 'Manager', 'ERP', 'SAP Company', '-Experience with SAP ECC\r\n-Knowledge in SAP BASIS, RE-FX, FI-CO, MM', 'A SAP manager is responsible for providing technical direction and control of project personnel and for providing a framework for project planning, communications, procedural and contractual activity. his duty is to organize and lead a cross-functional team in developing and implementing project deliverables. A SAP manager works with the client to identify business requirements and develop the proposal. Also develops work plans, managing deadlines and coordinate the project team and sub-team activities A SAP manager estimates project skill requirements, works with deployment to identify appropriate resources and manages their integration into the team.', 'uploads\\2019-05-30T00-35-28.728Z58549573_645065285956834_1532393285526487040_n.jpg', 'The 47th building 6th Floor,\r\nN 90th Street'),
(2, 'Software Development', 'IT', 'Alshaya Group', '-Degree in Computer Science\r\n-Excellent problem solving skills\r\n-Good knowledge of internet security ', 'Alshaya IT is a diverse organisation supporting corporate, warehouse and retail specific IT infrastructure and systems. We have software teams creating and developing in-house applications and product teams optimising and integrating major third party solutions. The rate of growth across divisions and geographies means we are constantly evaluating how we provide robust, scalable and business enabling infrastructure and systems in line with global benchmark standards.', 'uploads\\2019-05-30T22-52-50.577ZRicardo.jpg', 'The 47th building, 5th settlement'),
(3, 'HR Manager', 'Human Resourses', 'GMS Company', '-Degree in Bussnies field\n-HR Certificate\n-Good communication/presentation skills.\n', 'Human resources specialists are responsible for recruiting, screening, interviewing and placing workers. They may also handle employee relations, payroll, benefits, and training. Human resources managers plan, direct and coordinate the administrative functions of an organization. They oversee specialists in their duties; consult with executives on strategic planning, and link a company\'s management with its employees.', 'uploads\\2019-05-30T23-07-02.116ZAkankashaD-HR-Shutterstock-700x420.jpg', '3088, El Me’rag City');

-- --------------------------------------------------------

--
-- Table structure for table `newsfeed`
--

CREATE TABLE `newsfeed` (
  `id` int(11) NOT NULL,
  `body` text NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `newsfeed`
--

INSERT INTO `newsfeed` (`id`, `body`, `image`) VALUES
(1, 'Almost two-thirds of businesses are planning to migrate an enterprise resource planning (ERP) system to the cloud or are already doing so, despite many of them having concerns about moving sensitive data, security and regulatory compliance.\nwhich open New Fields on ERP Cloud path and make oportonties  for new careers', 'uploads\\2019-05-21T16-23-27.886Z21601.png'),
(2, 'Whether you want to get into IT from another sector or advance your career and increase your earning potential as an experienced IT professional, IT certifications can help you achieve your career goals. But you may be asking, which IT certification should I get?\r\nYou can go to https://www.certification.comptia.org\r\nfor More Detials for free!', 'uploads\\2019-05-21T16-26-13.799Zprogram_certification_275x135.9c8f42a9ff6fe424146651405821bed8cbae926b.png');

-- --------------------------------------------------------

--
-- Table structure for table `profile`
--

CREATE TABLE `profile` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `phone` varchar(15) CHARACTER SET utf16 COLLATE utf16_bin NOT NULL,
  `birthdate` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `interests` varchar(255) NOT NULL,
  `featured_skills` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `profile`
--

INSERT INTO `profile` (`id`, `user_id`, `first_name`, `last_name`, `phone`, `birthdate`, `address`, `interests`, `featured_skills`, `image`) VALUES
(3, 1, 'Mohamed', 'Khaled', '01110560063', '2/4/1997', 'Ein Shams', 'Finance,Information System,ERP,Web-Development,Security', 'Hardworker ,self learning ,team working', 'uploads\\2019-04-30T07-09-46.302Zavatar.jpeg'),
(4, 2, 'Allaa', 'Magdy', '01282317121', '14/7/1997', 'El Mokattam', 'Buisness,Finance,Information System', '-Creativity  -Problem Solving -self learning', 'uploads\\2019-05-02T13-48-21.370ZWhatsApp Image 2019-05-02 at 3.43.32 PM.jpeg'),
(6, 4, 'test1', 'test1', '12345', '10/10/1999', 'test1', 'Buisness,Information System,ERP', 'anything,anyting', 'uploads\\2019-05-29T21-28-25.089Z19895014_1504113512979571_2963850460992592181_n.jpg'),
(7, 5, 'Mohamed', 'Khaled', '01110560063', '02/04/1997', '5th settlement', 'Buisness,Information System,ERP', 'Self-learning,Team work, Leadership', 'uploads\\2019-05-30T21-17-42.821Z19895014_1504113512979571_2963850460992592181_n.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `rate`
--

CREATE TABLE `rate` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL,
  `rate` float NOT NULL,
  `description` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `rate`
--

INSERT INTO `rate` (`id`, `user_id`, `course_id`, `rate`, `description`) VALUES
(1, 1, 1, 3, 'asldnaksndjasdad'),
(2, 1, 1, 3, ''),
(3, 1, 1, 5, ''),
(4, 1, 1, 2, ''),
(5, 1, 1, 5, ''),
(6, 1, 4, 5, ''),
(7, 1, 5, 3, ''),
(8, 1, 5, 4, ''),
(9, 1, 3, 5, ''),
(10, 5, 6, 4, ''),
(11, 5, 6, 4, ''),
(12, 5, 3, 4, ''),
(13, 5, 3, 3, ''),
(14, 5, 3, 4, ''),
(15, 5, 3, 5, '');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `type` int(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `type`, `created_at`) VALUES
(1, 'Mohamedkhaled', 'Mohamed@Bis.com', '$2a$10$oy37gj5T8BQq2wnZuY2epuAgLUPyvjg7OlXMjkyGOuXktfHPKBpsG', 0, '2019-04-30 07:08:25'),
(2, 'Allaa Magdy', 'Allaa@Bis.com', '$2a$10$/hCXX6JfgSjBDftkCtLZ8.qzrNNZy5Zsqt5E1KFFC/rgBuVvPgsyC', 0, '2019-05-02 13:22:30'),
(4, 'Test1', 'test1@Bis.com', '$2a$10$8LZC958.EArGO0HBAQ0leehhFf2LFBbTD5btM9Gtjo1aTCBLAoRI2', 0, '2019-05-29 21:27:30'),
(5, 'Mohamed Khaled', 'Mohamedkhaled@Bis.com', '$2a$10$N1fimPSlYEzwPM0gVHjjme8nGqP50EiG3/.vUaL08kCB9Laqh08.y', 0, '2019-05-30 21:16:24');

-- --------------------------------------------------------

--
-- Table structure for table `views`
--

CREATE TABLE `views` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `viewer_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `education`
--
ALTER TABLE `education`
  ADD PRIMARY KEY (`id`),
  ADD KEY `col_user_education` (`user_id`);

--
-- Indexes for table `experience`
--
ALTER TABLE `experience`
  ADD PRIMARY KEY (`id`),
  ADD KEY `col_user_experience` (`user_id`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `newsfeed`
--
ALTER TABLE `newsfeed`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `profile`
--
ALTER TABLE `profile`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `rate`
--
ALTER TABLE `rate`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `views`
--
ALTER TABLE `views`
  ADD PRIMARY KEY (`id`),
  ADD KEY `col_user_follower` (`user_id`),
  ADD KEY `col_follower_user` (`viewer_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `education`
--
ALTER TABLE `education`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `experience`
--
ALTER TABLE `experience`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `newsfeed`
--
ALTER TABLE `newsfeed`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `profile`
--
ALTER TABLE `profile`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `rate`
--
ALTER TABLE `rate`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `views`
--
ALTER TABLE `views`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `education`
--
ALTER TABLE `education`
  ADD CONSTRAINT `col_user_education` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `experience`
--
ALTER TABLE `experience`
  ADD CONSTRAINT `col_user_experience` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `profile`
--
ALTER TABLE `profile`
  ADD CONSTRAINT `profile_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `views`
--
ALTER TABLE `views`
  ADD CONSTRAINT `col_follower_user` FOREIGN KEY (`viewer_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `col_user_follower` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
