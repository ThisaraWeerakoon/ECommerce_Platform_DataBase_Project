CREATE DATABASE  IF NOT EXISTS `ecommerce_platform` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `ecommerce_platform`;
-- MySQL dump 10.13  Distrib 8.0.33, for macos13 (arm64)
--
-- Host: localhost    Database: ecommerce_platform
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `address`
--

DROP TABLE IF EXISTS `address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `address` (
  `Address_Id` int NOT NULL AUTO_INCREMENT,
  `House_Number` char(10) DEFAULT NULL,
  `Street_Number` char(10) DEFAULT NULL,
  `Address_Line_1` varchar(50) DEFAULT NULL,
  `Address_Line_2` varchar(50) DEFAULT NULL,
  `City` varchar(15) DEFAULT NULL,
  `Region` varchar(15) DEFAULT NULL,
  `Postal_Code` int DEFAULT NULL,
  PRIMARY KEY (`Address_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address`
--

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
INSERT INTO `address` VALUES (1,'123','456','123 Main St','Apt 4B','Los Angeles','CA',90001),(2,'789','101','456 Elm St',NULL,'New York','NY',10001),(3,'456','789','789 Oak St','Unit 202','Chicago','IL',60601),(4,'111','222','555 Pine St',NULL,'San Francisco','CA',94101),(5,'999','333','987 Maple St','Suite 501','Miami','FL',33101),(6,'123','456','123 Main St','Apt 4B','City Name','Region Name',12345),(14,'124','12','LA','NY',NULL,'LILA',9000),(15,'125','13','LI','LO',NULL,'LILA',9000),(16,'124','12','Katubedda','Moratuwa',NULL,'Western',1010),(17,'124','12','Address Line 1','Address Line 2',NULL,'Region',9000),(18,'124','12','Address Line 1','Address Line 2',NULL,'Region',9000),(19,'124','12','LA','NY',NULL,'LILA',9000),(20,'124','12','LA','NY',NULL,'LILA',9000),(21,'132','12','new york','london',NULL,'western',12000),(22,'132','12','new york','london',NULL,'western',12000),(23,'212','21','www','dd','LOLA','dwd',2111),(24,'124','12','dff','asaad','lila','sxxsx',12233),(25,'123','12','fsd','swj','moratuwa','sdv',9000),(26,'1234','13','shbcw','suew vw','POP','SOL',123),(27,'234','15','egerg','sdgeg','sreth','qeer',9876),(28,'456','34','weibwe','x eg w','LILA','ewicwbi',92375),(29,'485','39','qwueq','ubciq','wqviqc','qieyvcq',293569),(30,'485','39','qwueq','ubciq','wqviqc','qieyvcq',293569),(31,'123','45','adg ','uyriq','qwiueiq','qeyvcqwe',18374),(32,'1245','456','qixbq','qrgvq','werycq','qiyvcq',1278),(33,'345','12','eeendq','werbcqweir','qweibcqw','eirbcq',2764),(34,'8365','12','qwebcqw','qwuex','qwoebcq','qweuvcq',12345),(35,'234','87236','ercwec','weuybx','qwebw','irtbvw',2365),(36,'120B','2','120B','Wela Road','Navimana','Matara',81000);
/*!40000 ALTER TABLE `address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `all_product_in_store`
--

DROP TABLE IF EXISTS `all_product_in_store`;
/*!50001 DROP VIEW IF EXISTS `all_product_in_store`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `all_product_in_store` AS SELECT 
 1 AS `SKU`,
 1 AS `product`,
 1 AS `Category_Name`,
 1 AS `Variation_Name`,
 1 AS `Variation_Option_Name`,
 1 AS `Weight`,
 1 AS `Quantity`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart` (
  `Cart_Id` int NOT NULL AUTO_INCREMENT,
  `User_Id` int DEFAULT NULL,
  PRIMARY KEY (`Cart_Id`),
  KEY `User_Id_idx` (`User_Id`),
  CONSTRAINT `User_Id` FOREIGN KEY (`User_Id`) REFERENCES `user` (`User_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
INSERT INTO `cart` VALUES (1,1),(2,2),(3,8),(4,10),(5,11),(6,12),(7,13),(8,14),(9,15),(10,16),(11,17),(12,18);
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart_item`
--

DROP TABLE IF EXISTS `cart_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart_item` (
  `Cart_Item_Id` int NOT NULL AUTO_INCREMENT,
  `Cart_Id` int DEFAULT NULL,
  `Variant_Id` int DEFAULT NULL,
  `Cart_Item_Quantity` int DEFAULT NULL,
  PRIMARY KEY (`Cart_Item_Id`),
  KEY `Variant_Id` (`Variant_Id`),
  KEY `Cart_Id` (`Cart_Id`),
  CONSTRAINT `Cart_Id` FOREIGN KEY (`Cart_Id`) REFERENCES `cart` (`Cart_Id`),
  CONSTRAINT `Variant_Id` FOREIGN KEY (`Variant_Id`) REFERENCES `variant` (`Variant_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart_item`
--

LOCK TABLES `cart_item` WRITE;
/*!40000 ALTER TABLE `cart_item` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `cartview`
--

DROP TABLE IF EXISTS `cartview`;
/*!50001 DROP VIEW IF EXISTS `cartview`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `cartview` AS SELECT 
 1 AS `Cart_Item_Id`,
 1 AS `User_Id`,
 1 AS `Product_Name`,
 1 AS `Quantity`,
 1 AS `Price`,
 1 AS `Sub_Total`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `order_item`
--

DROP TABLE IF EXISTS `order_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_item` (
  `Order_Item_Id` int NOT NULL AUTO_INCREMENT,
  `Variant_Id` int DEFAULT NULL,
  `Order_Id` int DEFAULT NULL,
  `Quantity` int DEFAULT NULL,
  PRIMARY KEY (`Order_Item_Id`),
  KEY `Unique_Product_Id` (`Variant_Id`),
  KEY `Order_Id` (`Order_Id`),
  CONSTRAINT `order_item_ibfk_1` FOREIGN KEY (`Variant_Id`) REFERENCES `variant` (`Variant_Id`),
  CONSTRAINT `order_item_ibfk_2` FOREIGN KEY (`Order_Id`) REFERENCES `orders` (`Order_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=109 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_item`
--

LOCK TABLES `order_item` WRITE;
/*!40000 ALTER TABLE `order_item` DISABLE KEYS */;
INSERT INTO `order_item` VALUES (40,1,35,4),(41,1,36,1),(42,1,37,1),(43,1,38,1),(44,1,39,1),(45,1,40,1),(46,1,41,1),(47,1,42,1),(48,1,43,1),(55,7,54,13),(56,7,54,2),(57,1,399,12),(58,3,399,1),(59,3,399,1),(60,1,399,10),(64,1,400,10),(65,1,401,13),(66,1,NULL,12),(67,1,404,12),(68,1,405,2),(69,1,406,12),(70,4,406,1),(72,15,407,2),(73,1,408,4),(74,15,409,3),(75,15,410,13),(76,1,410,4),(77,15,410,8),(78,1,411,3),(79,1,412,3),(80,1,413,6),(81,15,414,5),(82,1,415,2),(83,2,415,10),(85,4,416,4),(86,1,417,1),(87,15,418,4),(88,2,418,5),(90,15,419,1),(91,15,420,1),(92,1,421,3),(93,1,422,3),(94,1,423,2),(95,15,424,1),(96,4,425,2),(97,15,426,5),(98,1,427,1),(99,1,428,5),(100,15,428,2),(102,1,429,8),(103,2,430,6),(104,1,430,3),(106,1,431,5),(107,1,432,4),(108,1,433,5);
/*!40000 ALTER TABLE `order_item` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_unicode_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'IGNORE_SPACE,ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `UpdateInventory` AFTER INSERT ON `order_item` FOR EACH ROW UPDATE variant 
SET Quantity = Quantity - NEW.Quantity
WHERE Variant_Id = NEW.Variant_Id */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Temporary view structure for view `orderhistory`
--

DROP TABLE IF EXISTS `orderhistory`;
/*!50001 DROP VIEW IF EXISTS `orderhistory`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `orderhistory` AS SELECT 
 1 AS `Variant_Id`,
 1 AS `Order_id`,
 1 AS `Quantity`,
 1 AS `Product_Id`,
 1 AS `Product_Name`,
 1 AS `Cart_Id`,
 1 AS `Order_Date`,
 1 AS `user_ID`,
 1 AS `Price`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `orderreport`
--

DROP TABLE IF EXISTS `orderreport`;
/*!50001 DROP VIEW IF EXISTS `orderreport`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `orderreport` AS SELECT 
 1 AS `First_Name`,
 1 AS `Last_Name`,
 1 AS `Email`,
 1 AS `Order_Id`,
 1 AS `Order_Date`,
 1 AS `Payment_Method`,
 1 AS `Delivery_Method_Name`,
 1 AS `City`,
 1 AS `Region`,
 1 AS `Order_Total`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `Order_Id` int NOT NULL AUTO_INCREMENT,
  `Cart_Id` int DEFAULT NULL,
  `Order_Date` datetime DEFAULT NULL,
  `Payment_Method` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Delivery_Method_Name` varchar(20) DEFAULT NULL,
  `Order_Total` decimal(20,2) DEFAULT NULL,
  `Address_Id` int DEFAULT '0',
  PRIMARY KEY (`Order_Id`),
  KEY `Payment_Method_Id` (`Payment_Method`),
  KEY `orders_ibfk_3_idx` (`Cart_Id`),
  CONSTRAINT `orders_ibfk_3` FOREIGN KEY (`Cart_Id`) REFERENCES `cart` (`Cart_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=434 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (35,1,'2023-10-30 03:07:40','Cash on Delivery','Delivery',3199.96,0),(36,1,'2023-10-30 03:18:48','Cash on Delivery','Delivery',799.99,0),(37,1,'2023-10-30 03:21:04','Cash on Delivery','Delivery',799.99,0),(38,1,'2023-10-30 03:31:53','Cash on Delivery','Delivery',NULL,0),(39,1,'2023-10-30 03:34:24','Cash on Delivery','Delivery',NULL,0),(40,1,'2023-10-30 03:42:48','Cash on Delivery','Delivery',NULL,0),(41,1,'2023-10-30 03:51:36','Cash on Delivery','Delivery',799.99,0),(42,1,'2023-10-30 13:34:52','Cash on Delivery','Delivery',799.99,0),(43,1,'2023-10-30 13:45:47','Card Payment','Delivery',799.99,0),(44,1,'2022-10-19 09:18:20','Cash on Delivery','Delivery',5102.83,0),(45,1,'2022-10-26 10:32:44','Cash on Delivery','Delivery',3038.52,0),(46,1,'2022-10-05 16:25:20','Cash on Delivery','Delivery',4305.44,0),(47,1,'2023-01-06 21:04:07','12','Delivery',1394.91,0),(48,1,'2023-09-03 18:07:11','Card Payment','Delivery',4346.00,0),(49,1,'2022-10-02 16:45:31','Card Payment','Delivery',4017.43,0),(50,1,'2023-03-24 11:28:21','Card Payment','Delivery',3052.49,0),(51,1,'2023-05-17 09:21:23','Card Payment','Delivery',4728.83,0),(52,1,'2023-09-28 06:46:31','Cash on Delivery','Delivery',4888.72,0),(53,1,'2023-10-20 01:25:01','Cash on Delivery','Delivery',2419.21,0),(54,1,'2022-08-31 02:27:44','Cash on Delivery','Delivery',541.62,0),(55,1,'2023-04-23 14:45:06','Cash on Delivery','Delivery',2010.73,0),(56,1,'2023-01-26 09:41:05','Cash on Delivery','Delivery',5234.88,0),(57,1,'2023-10-25 16:29:50','Cash on Delivery','Delivery',3500.69,0),(58,1,'2023-05-16 02:18:52','Cash on Delivery','Delivery',2713.17,0),(59,1,'2023-07-08 03:45:01','Card Payment','Delivery',1535.31,0),(60,1,'2023-03-16 21:33:52','Cash on Delivery','Delivery',3568.84,0),(61,1,'2023-10-01 15:55:19','Card Payment','Delivery',3053.80,0),(62,1,'2023-10-06 19:33:01','Cash on Delivery','Delivery',1945.29,0),(63,1,'2023-07-04 06:09:07','Card Payment','Delivery',2170.82,0),(64,1,'2023-09-14 12:20:06','Card Payment','Delivery',5142.54,0),(65,1,'2022-07-27 04:43:37','Cash on Delivery','Delivery',1791.23,0),(66,1,'2023-08-12 21:07:32','Cash on Delivery','Delivery',3450.07,0),(67,1,'2023-05-30 02:26:16','Card Payment','Delivery',1642.31,0),(68,1,'2022-09-22 08:39:11','Cash on Delivery','Delivery',2232.96,0),(69,1,'2022-10-14 02:27:29','Cash on Delivery','Delivery',3294.25,0),(70,1,'2023-05-22 11:02:08','Card Payment','Delivery',2250.02,0),(71,1,'2023-06-23 00:29:34','Card Payment','Delivery',5056.83,0),(72,1,'2023-05-31 05:29:25','Card Payment','Delivery',2796.02,0),(73,1,'2022-09-27 17:57:04','Card Payment','Delivery',1146.76,0),(74,1,'2022-07-20 15:52:23','Card Payment','Delivery',5248.66,0),(75,1,'2022-11-26 17:11:06','Card Payment','Delivery',2930.13,0),(76,1,'2023-01-05 10:15:51','Cash on Delivery','Delivery',1696.34,0),(77,1,'2023-07-02 21:10:13','Cash on Delivery','Delivery',594.02,0),(78,1,'2023-09-23 00:30:10','Card Payment','Delivery',720.02,0),(79,1,'2023-03-15 20:39:11','Card Payment','Delivery',563.20,0),(80,1,'2023-03-01 06:42:04','Cash on Delivery','Delivery',4615.24,0),(81,1,'2023-06-16 02:29:17','Cash on Delivery','Delivery',3012.96,0),(82,1,'2022-08-25 18:08:14','Cash on Delivery','Delivery',5425.22,0),(83,1,'2023-06-19 15:49:37','Card Payment','Delivery',1668.02,0),(84,1,'2022-08-27 08:28:44','Card Payment','Delivery',960.85,0),(85,1,'2023-07-21 11:00:10','Card Payment','Delivery',831.00,0),(86,1,'2022-11-06 03:18:46','Cash on Delivery','Delivery',4537.40,0),(87,1,'2023-05-26 15:58:56','Card Payment','Delivery',4554.78,0),(88,1,'2022-09-10 13:09:11','Cash on Delivery','Delivery',872.36,0),(89,1,'2023-02-10 20:45:44','Cash on Delivery','Delivery',809.97,0),(90,1,'2022-07-20 09:52:01','Cash on Delivery','Delivery',5243.91,0),(91,1,'2023-06-07 12:48:19','Card Payment','Delivery',1643.25,0),(92,1,'2022-09-07 14:02:23','Cash on Delivery','Delivery',3874.60,0),(93,1,'2022-12-01 09:27:56','Card Payment','Delivery',4599.95,0),(94,1,'2023-01-30 18:12:16','Card Payment','Delivery',2382.25,0),(95,1,'2023-05-20 00:48:06','Cash on Delivery','Delivery',5380.88,0),(96,1,'2022-11-23 04:38:02','Card Payment','Delivery',5149.49,0),(97,1,'2023-10-07 13:06:12','Card Payment','Delivery',675.48,0),(98,1,'2022-10-24 11:10:07','Cash on Delivery','Delivery',4001.98,0),(99,1,'2022-11-01 11:44:16','Cash on Delivery','Delivery',920.51,0),(100,1,'2023-09-17 13:29:34','Cash on Delivery','Delivery',4587.13,0),(101,1,'2022-09-13 18:31:18','Cash on Delivery','Delivery',1116.70,0),(102,1,'2023-05-20 13:27:02','Card Payment','Delivery',4483.37,0),(103,1,'2022-08-21 23:59:03','Cash on Delivery','Delivery',2518.83,0),(104,1,'2023-04-10 19:35:44','Card Payment','Delivery',4455.78,0),(105,1,'2023-08-08 08:06:00','Card Payment','Delivery',2453.71,0),(106,1,'2023-04-30 22:56:25','Card Payment','Delivery',4990.92,0),(107,1,'2023-05-01 08:32:23','Cash on Delivery','Delivery',2023.33,0),(108,1,'2022-10-12 15:48:47','Cash on Delivery','Delivery',1111.88,0),(109,1,'2022-09-14 02:29:23','Cash on Delivery','Delivery',3320.56,0),(110,1,'2023-04-20 12:15:56','Cash on Delivery','Delivery',4624.12,0),(111,1,'2022-09-08 02:02:30','Cash on Delivery','Delivery',4274.69,0),(112,1,'2022-08-02 00:11:57','Cash on Delivery','Delivery',1124.26,0),(113,1,'2023-01-26 08:50:28','Card Payment','Delivery',3524.01,0),(114,1,'2023-05-30 05:56:19','Card Payment','Delivery',566.16,0),(115,1,'2022-10-17 20:24:40','Cash on Delivery','Delivery',4144.52,0),(116,1,'2023-01-13 08:34:25','Card Payment','Delivery',5275.21,0),(117,1,'2022-11-11 14:49:28','Card Payment','Delivery',4114.58,0),(118,1,'2022-08-11 18:29:01','Cash on Delivery','Delivery',735.51,0),(119,1,'2023-02-05 22:27:38','Cash on Delivery','Delivery',1747.10,0),(120,1,'2023-09-03 01:48:05','Card Payment','Delivery',3909.26,0),(121,1,'2023-01-16 17:42:02','Cash on Delivery','Delivery',4569.17,0),(122,1,'2022-07-20 23:26:14','Card Payment','Delivery',3983.84,0),(123,1,'2022-10-02 05:05:31','Card Payment','Delivery',4339.76,0),(124,1,'2022-10-22 14:35:00','Card Payment','Delivery',3617.23,0),(125,1,'2023-03-11 21:12:18','Card Payment','Delivery',1204.89,0),(126,1,'2023-02-19 06:40:48','Card Payment','Delivery',2726.23,0),(127,1,'2022-11-21 09:53:24','Cash on Delivery','Delivery',4566.11,0),(128,1,'2023-05-11 10:52:18','Card Payment','Delivery',680.81,0),(129,1,'2023-07-22 02:43:37','Card Payment','Delivery',5179.82,0),(130,1,'2022-08-12 20:38:25','Card Payment','Delivery',5003.56,0),(131,1,'2023-04-20 17:37:57','Cash on Delivery','Delivery',4429.76,0),(132,1,'2023-10-15 13:20:36','Cash on Delivery','Delivery',3284.43,0),(133,1,'2022-11-25 15:24:45','Card Payment','Delivery',2150.58,0),(134,1,'2022-08-21 08:45:18','Card Payment','Delivery',2367.05,0),(135,1,'2022-10-31 20:16:49','Cash on Delivery','Delivery',5298.62,0),(136,1,'2022-12-26 18:04:08','Card Payment','Delivery',3979.17,0),(137,1,'2023-04-18 09:58:08','Card Payment','Delivery',4270.70,0),(138,1,'2022-07-19 21:40:52','Card Payment','Delivery',3218.11,0),(139,1,'2023-09-22 01:21:31','Card Payment','Delivery',1140.29,0),(140,1,'2023-06-08 03:18:48','Cash on Delivery','Delivery',3334.28,0),(141,1,'2023-01-24 12:24:27','Cash on Delivery','Delivery',4954.64,0),(142,1,'2022-09-12 15:09:25','Cash on Delivery','Delivery',5345.92,0),(143,1,'2023-04-14 13:35:28','Cash on Delivery','Delivery',2898.22,0),(171,1,'2022-10-28 06:04:02','Card Payment','Delivery',1518.03,0),(172,1,'2023-05-14 22:26:59','Card Payment','Delivery',2190.26,0),(173,1,'2023-06-11 00:11:10','Card Payment','Delivery',3234.24,0),(174,1,'2022-09-01 08:46:34','Cash on Delivery','Delivery',3602.09,0),(175,1,'2022-08-18 01:05:17','Card Payment','Delivery',4843.05,0),(176,1,'2023-02-01 18:07:33','Card Payment','Delivery',4187.70,0),(177,1,'2023-08-16 04:42:53','Cash on Delivery','Delivery',3253.65,0),(178,1,'2023-06-06 07:48:50','Card Payment','Delivery',1223.74,0),(179,1,'2022-09-24 17:49:45','Cash on Delivery','Delivery',4050.73,0),(180,1,'2022-10-09 15:22:34','Card Payment','Delivery',5017.75,0),(181,1,'2023-07-26 04:43:31','Cash on Delivery','Delivery',1049.96,0),(182,1,'2023-05-07 10:53:48','Card Payment','Delivery',2517.92,0),(183,1,'2023-01-24 00:10:45','Card Payment','Delivery',2084.72,0),(184,1,'2023-08-07 08:08:43','Cash on Delivery','Delivery',2793.68,0),(185,1,'2023-06-19 22:48:43','Cash on Delivery','Delivery',1207.04,0),(186,1,'2023-09-16 21:03:52','Cash on Delivery','Delivery',5134.15,0),(187,1,'2022-10-24 13:15:11','Cash on Delivery','Delivery',2141.59,0),(188,1,'2023-01-19 11:31:48','Cash on Delivery','Delivery',1705.08,0),(189,1,'2023-09-16 12:35:14','Card Payment','Delivery',2583.64,0),(190,1,'2023-04-15 23:41:58','Card Payment','Delivery',4654.08,0),(191,1,'2023-10-22 20:07:22','Cash on Delivery','Delivery',1567.91,0),(192,1,'2023-07-08 09:57:54','Cash on Delivery','Delivery',3772.84,0),(193,1,'2023-06-06 13:54:24','Card Payment','Delivery',3493.33,0),(194,1,'2022-12-29 03:30:05','Cash on Delivery','Delivery',1600.10,0),(195,1,'2023-09-10 00:39:43','Card Payment','Delivery',2687.89,0),(196,1,'2023-06-11 06:26:46','Cash on Delivery','Delivery',828.81,0),(197,1,'2023-04-23 17:50:34','Card Payment','Delivery',2731.96,0),(198,1,'2023-05-20 05:24:35','Card Payment','Delivery',5178.65,0),(199,1,'2023-06-15 23:02:40','Card Payment','Delivery',4529.32,0),(200,1,'2023-05-12 17:30:38','Card Payment','Delivery',1521.69,0),(201,1,'2023-03-15 10:40:38','Cash on Delivery','Delivery',3444.01,0),(202,1,'2023-08-11 21:24:39','Cash on Delivery','Delivery',3434.82,0),(203,1,'2023-05-25 08:35:59','Card Payment','Delivery',797.48,0),(204,1,'2023-02-02 13:55:22','Cash on Delivery','Delivery',5058.03,0),(205,1,'2023-01-15 17:38:52','Cash on Delivery','Delivery',2110.75,0),(206,1,'2023-05-28 03:56:09','Cash on Delivery','Delivery',1293.49,0),(207,1,'2023-02-15 06:23:36','Card Payment','Delivery',5489.16,0),(208,1,'2022-12-13 21:13:26','Card Payment','Delivery',3208.44,0),(209,1,'2023-04-03 13:18:31','Cash on Delivery','Delivery',2468.02,0),(210,1,'2022-11-27 11:40:42','Cash on Delivery','Delivery',4814.05,0),(211,1,'2022-10-26 22:57:30','Card Payment','Delivery',2487.26,0),(212,1,'2022-08-24 09:22:17','Cash on Delivery','Delivery',3001.67,0),(213,1,'2023-01-11 09:51:14','Cash on Delivery','Delivery',1977.37,0),(214,1,'2023-10-20 07:18:12','Cash on Delivery','Delivery',1144.89,0),(215,1,'2023-04-20 06:14:46','Card Payment','Delivery',2202.38,0),(216,1,'2023-07-30 14:31:59','Cash on Delivery','Delivery',4278.31,0),(217,1,'2023-05-19 10:01:04','Cash on Delivery','Delivery',1800.50,0),(218,1,'2022-09-12 01:04:05','Card Payment','Delivery',2525.28,0),(219,1,'2022-08-24 06:58:57','Cash on Delivery','Delivery',2408.90,0),(220,1,'2023-09-01 01:47:07','Cash on Delivery','Delivery',3529.44,0),(221,1,'2022-11-16 02:19:11','Card Payment','Delivery',1314.86,0),(222,1,'2022-07-03 17:23:43','Card Payment','Delivery',3893.85,0),(223,1,'2023-07-13 09:01:04','Card Payment','Delivery',5006.56,0),(224,1,'2023-10-14 11:46:37','Cash on Delivery','Delivery',4391.22,0),(225,1,'2023-02-20 02:41:49','Cash on Delivery','Delivery',5120.15,0),(226,1,'2023-01-10 17:47:43','Cash on Delivery','Delivery',5048.77,0),(227,1,'2023-09-04 06:50:13','Card Payment','Delivery',4657.98,0),(228,1,'2022-08-01 18:30:18','Card Payment','Delivery',5321.32,0),(229,1,'2022-12-05 23:50:05','Card Payment','Delivery',3940.00,0),(230,1,'2022-10-26 15:09:49','Cash on Delivery','Delivery',524.48,0),(231,1,'2023-04-11 17:34:43','Card Payment','Delivery',4578.41,0),(232,1,'2022-12-10 12:53:13','Cash on Delivery','Delivery',1112.02,0),(233,1,'2023-09-29 04:21:51','Cash on Delivery','Delivery',4344.41,0),(234,1,'2023-09-10 01:12:12','Cash on Delivery','Delivery',1528.32,0),(235,1,'2023-02-24 02:27:39','Card Payment','Delivery',3966.69,0),(236,1,'2023-10-14 20:23:58','Card Payment','Delivery',5070.62,0),(237,1,'2022-11-13 05:32:15','Card Payment','Delivery',2548.55,0),(238,1,'2022-08-19 12:14:22','Cash on Delivery','Delivery',977.66,0),(239,1,'2023-05-06 13:40:10','Card Payment','Delivery',3402.22,0),(240,1,'2022-10-09 19:07:30','Cash on Delivery','Delivery',4780.79,0),(241,1,'2023-01-08 08:56:52','Cash on Delivery','Delivery',4603.03,0),(242,1,'2023-09-12 07:28:05','Cash on Delivery','Delivery',3160.84,0),(243,1,'2023-03-09 19:52:20','Card Payment','Delivery',2585.51,0),(244,1,'2022-08-19 20:09:54','Cash on Delivery','Delivery',5498.07,0),(245,1,'2022-10-12 20:40:34','Cash on Delivery','Delivery',4036.72,0),(246,1,'2022-12-07 05:39:14','Card Payment','Delivery',3490.11,0),(247,1,'2023-01-31 14:04:24','Cash on Delivery','Delivery',4217.28,0),(248,1,'2023-02-17 13:14:04','Cash on Delivery','Delivery',2149.54,0),(249,1,'2022-10-03 06:48:34','Card Payment','Delivery',2096.80,0),(250,1,'2023-05-15 19:27:26','Cash on Delivery','Delivery',3706.74,0),(251,1,'2022-10-26 04:45:04','Cash on Delivery','Delivery',3925.24,0),(252,1,'2023-04-08 22:46:29','Card Payment','Delivery',2937.06,0),(253,1,'2023-09-11 13:43:41','Cash on Delivery','Delivery',2983.09,0),(254,1,'2022-12-25 03:20:50','Cash on Delivery','Delivery',3346.91,0),(255,1,'2023-08-17 17:08:11','Card Payment','Delivery',1209.04,0),(256,1,'2022-08-16 08:33:54','Cash on Delivery','Delivery',5356.70,0),(257,1,'2023-06-07 06:32:17','Card Payment','Delivery',4892.18,0),(258,1,'2023-04-19 03:49:06','Cash on Delivery','Delivery',743.78,0),(259,1,'2022-09-03 08:57:36','Card Payment','Delivery',1413.40,0),(260,1,'2022-12-25 13:43:44','Cash on Delivery','Delivery',1990.16,0),(261,1,'2023-05-14 16:24:44','Cash on Delivery','Delivery',5051.29,0),(262,1,'2023-01-25 06:19:39','Cash on Delivery','Delivery',4368.55,0),(263,1,'2023-05-04 15:05:09','Card Payment','Delivery',2099.56,0),(264,1,'2022-08-03 04:02:51','Cash on Delivery','Delivery',4013.90,0),(265,1,'2022-12-27 12:30:06','Card Payment','Delivery',3423.82,0),(266,1,'2023-06-10 02:52:27','Card Payment','Delivery',4529.96,0),(267,1,'2023-05-23 12:25:12','Card Payment','Delivery',3953.75,0),(268,1,'2023-05-03 04:00:56','Cash on Delivery','Delivery',2990.92,0),(269,1,'2022-11-03 09:55:22','Card Payment','Delivery',1522.03,0),(270,1,'2023-05-05 13:25:31','Card Payment','Delivery',5008.03,0),(298,1,'2023-08-05 14:08:41','Cash on Delivery','Delivery',3547.86,0),(299,1,'2023-07-24 01:07:26','Cash on Delivery','Delivery',2611.67,0),(300,1,'2023-04-28 20:01:49','Card Payment','Delivery',2141.43,0),(301,1,'2022-08-31 12:06:11','Card Payment','Delivery',4799.29,0),(302,1,'2022-12-20 19:27:17','Cash on Delivery','Delivery',5124.24,0),(303,1,'2022-07-15 05:36:46','Cash on Delivery','Delivery',4358.13,0),(304,1,'2023-06-26 19:45:54','Cash on Delivery','Delivery',4295.95,0),(305,1,'2023-04-20 13:41:17','Card Payment','Delivery',5006.68,0),(306,1,'2022-11-13 09:24:11','Card Payment','Delivery',3543.98,0),(307,1,'2023-10-18 22:41:49','Cash on Delivery','Delivery',2338.25,0),(308,1,'2023-05-17 01:53:43','Cash on Delivery','Delivery',5372.16,0),(309,1,'2022-11-24 18:49:16','Card Payment','Delivery',640.33,0),(310,1,'2023-01-01 14:32:42','Card Payment','Delivery',5178.27,0),(311,1,'2022-10-22 07:27:25','Cash on Delivery','Delivery',972.44,0),(312,1,'2023-01-09 11:52:13','Card Payment','Delivery',1982.11,0),(313,1,'2023-01-07 04:18:29','Cash on Delivery','Delivery',1313.06,0),(314,1,'2023-04-24 00:10:57','Card Payment','Delivery',528.00,0),(315,1,'2022-12-05 18:18:30','Card Payment','Delivery',787.59,0),(316,1,'2023-02-13 19:45:19','Cash on Delivery','Delivery',2751.07,0),(317,1,'2023-06-24 06:07:08','Cash on Delivery','Delivery',2820.50,0),(318,1,'2022-12-01 04:09:07','Cash on Delivery','Delivery',5361.27,0),(319,1,'2022-11-28 22:57:47','Card Payment','Delivery',1748.12,0),(320,1,'2022-12-12 20:58:39','Card Payment','Delivery',4095.37,0),(321,1,'2023-07-02 02:13:39','Card Payment','Delivery',4430.03,0),(322,1,'2022-08-19 19:49:52','Cash on Delivery','Delivery',2827.18,0),(323,1,'2023-08-24 14:22:51','Card Payment','Delivery',563.38,0),(324,1,'2022-11-24 15:03:03','Cash on Delivery','Delivery',2736.53,0),(325,1,'2023-08-05 23:49:06','Card Payment','Delivery',2711.58,0),(326,1,'2023-08-23 11:06:23','Card Payment','Delivery',2040.08,0),(327,1,'2023-04-21 05:26:05','Cash on Delivery','Delivery',3993.33,0),(328,1,'2022-09-28 14:55:27','Card Payment','Delivery',3384.76,0),(329,1,'2023-01-14 15:13:04','Cash on Delivery','Delivery',1960.62,0),(330,1,'2023-03-26 22:29:52','Card Payment','Delivery',4461.28,0),(331,1,'2022-11-18 20:58:12','Cash on Delivery','Delivery',2965.78,0),(332,1,'2022-10-29 14:11:34','Card Payment','Delivery',807.67,0),(333,1,'2022-07-12 17:15:15','Card Payment','Delivery',3537.42,0),(334,1,'2022-10-20 13:08:49','Cash on Delivery','Delivery',5186.21,0),(335,1,'2023-06-11 09:55:56','Card Payment','Delivery',3386.89,0),(336,1,'2023-05-18 07:38:17','Card Payment','Delivery',4923.07,0),(337,1,'2023-06-07 06:53:57','Card Payment','Delivery',1400.03,0),(338,1,'2022-12-07 09:44:05','Cash on Delivery','Delivery',3079.07,0),(339,1,'2022-11-13 16:31:33','Card Payment','Delivery',2525.29,0),(340,1,'2023-02-19 03:15:44','Cash on Delivery','Delivery',2888.07,0),(341,1,'2023-08-12 06:48:30','Card Payment','Delivery',1862.55,0),(342,1,'2022-08-14 00:37:04','Card Payment','Delivery',5026.39,0),(343,1,'2023-04-28 09:36:41','Cash on Delivery','Delivery',822.36,0),(344,1,'2022-09-20 08:15:39','Card Payment','Delivery',4075.91,0),(345,1,'2023-05-10 17:23:36','Cash on Delivery','Delivery',2869.04,0),(346,1,'2022-08-29 16:27:21','Cash on Delivery','Delivery',3473.53,0),(347,1,'2023-01-09 06:52:06','Cash on Delivery','Delivery',4418.58,0),(348,1,'2022-12-11 09:11:05','Cash on Delivery','Delivery',3700.94,0),(349,1,'2022-10-11 21:21:18','Cash on Delivery','Delivery',773.69,0),(350,1,'2023-08-22 20:26:48','Cash on Delivery','Delivery',970.13,0),(351,1,'2022-08-02 03:10:14','Cash on Delivery','Delivery',720.74,0),(352,1,'2022-08-06 13:36:24','Cash on Delivery','Delivery',5465.42,0),(353,1,'2022-10-22 18:57:23','Cash on Delivery','Delivery',1773.62,0),(354,1,'2023-06-05 21:08:57','Card Payment','Delivery',3323.51,0),(355,1,'2023-05-01 04:08:14','Cash on Delivery','Delivery',1992.96,0),(356,1,'2022-09-29 23:58:34','Cash on Delivery','Delivery',3702.08,0),(357,1,'2022-08-09 06:24:32','Cash on Delivery','Delivery',1356.41,0),(358,1,'2023-01-15 09:22:47','Card Payment','Delivery',2557.05,0),(359,1,'2023-02-17 01:21:39','Cash on Delivery','Delivery',1941.00,0),(360,1,'2022-07-06 23:38:12','Cash on Delivery','Delivery',5239.60,0),(361,1,'2022-09-11 06:12:36','Card Payment','Delivery',760.89,0),(362,1,'2023-03-31 02:37:56','Card Payment','Delivery',3401.67,0),(363,1,'2023-10-01 18:55:42','Card Payment','Delivery',589.68,0),(364,1,'2022-09-28 03:13:14','Card Payment','Delivery',4329.23,0),(365,1,'2022-10-25 10:35:52','Card Payment','Delivery',4416.71,0),(366,1,'2022-10-13 16:53:53','Card Payment','Delivery',5447.79,0),(367,1,'2023-07-08 09:43:19','Card Payment','Delivery',572.31,0),(368,1,'2023-02-21 09:32:28','Cash on Delivery','Delivery',2694.59,0),(369,1,'2022-07-29 20:49:06','Card Payment','Delivery',4114.91,0),(370,1,'2023-05-24 15:52:41','Cash on Delivery','Delivery',5438.50,0),(371,1,'2022-12-09 12:10:04','Card Payment','Delivery',2977.58,0),(372,1,'2023-01-02 16:44:09','Cash on Delivery','Delivery',5366.61,0),(373,1,'2023-04-16 02:22:08','Cash on Delivery','Delivery',2934.64,0),(374,1,'2022-11-10 01:39:49','Card Payment','Delivery',3872.63,0),(375,1,'2023-05-26 21:09:23','Cash on Delivery','Delivery',4575.10,0),(376,1,'2023-10-12 15:37:35','Cash on Delivery','Delivery',5446.83,0),(377,1,'2023-08-02 06:54:25','Cash on Delivery','Delivery',1218.68,0),(378,1,'2022-12-23 10:40:52','Cash on Delivery','Delivery',4429.66,0),(379,1,'2023-07-28 20:01:54','Card Payment','Delivery',5468.34,0),(380,1,'2023-09-19 18:09:55','Card Payment','Delivery',1866.39,0),(381,1,'2023-03-26 00:23:41','Card Payment','Delivery',666.27,0),(382,1,'2022-12-19 21:08:03','Card Payment','Delivery',1908.97,0),(383,1,'2023-01-13 00:05:38','Cash on Delivery','Delivery',3728.45,0),(384,1,'2023-06-13 12:54:56','Card Payment','Delivery',734.09,0),(385,1,'2022-12-02 22:44:47','Cash on Delivery','Delivery',2059.11,0),(386,1,'2022-10-05 07:00:45','Cash on Delivery','Delivery',3907.95,0),(387,1,'2022-10-26 18:52:37','Cash on Delivery','Delivery',1040.24,0),(388,1,'2022-07-20 00:51:13','Card Payment','Delivery',1704.81,0),(389,1,'2023-04-13 14:37:30','Cash on Delivery','Delivery',2298.28,0),(390,1,'2022-08-28 18:59:16','Card Payment','Delivery',1832.45,0),(391,1,'2023-07-02 20:09:41','Card Payment','Delivery',3542.83,0),(392,1,'2022-08-27 20:16:16','Card Payment','Delivery',2949.99,0),(393,1,'2022-09-07 21:21:27','Cash on Delivery','Delivery',4342.57,0),(394,1,'2022-08-31 09:18:47','Cash on Delivery','Delivery',1755.88,0),(395,1,'2022-11-13 00:25:16','Card Payment','Delivery',2221.29,0),(396,1,'2023-07-31 22:16:14','Cash on Delivery','Delivery',4294.03,0),(397,1,'2023-05-23 18:17:53','Cash on Delivery','Delivery',2548.06,0),(398,3,'2023-10-31 20:25:20','Cash on Delivery','Delivery',9599.88,0),(399,4,'2023-11-01 11:19:28','Cash on Delivery','Delivery',7999.90,0),(400,4,'2023-11-01 11:25:27','Cash on Delivery','Delivery',7999.90,0),(401,4,'2023-11-01 11:35:38','Cash on Delivery','Delivery',10399.87,0),(402,4,'2023-11-01 12:03:25','Cash on Delivery','Delivery',9599.88,0),(403,4,'2023-11-01 12:14:27','Cash on Delivery','Delivery',9599.88,0),(404,4,'2023-11-01 12:16:15','Cash on Delivery','Delivery',9599.88,0),(405,4,'2023-11-01 12:24:01','Cash on Delivery','Delivery',1599.98,0),(406,4,'2023-11-02 04:57:41','Cash on Delivery','Delivery',10499.87,0),(407,4,'2023-11-02 05:11:21','Cash','Pick up',501.98,0),(408,4,'2023-11-02 06:19:05','Cash on Delivery','Delivery',3199.96,0),(409,4,'2023-11-02 06:27:55','Cash','Pick up',752.97,0),(410,4,'2023-11-02 08:43:19','Cash','Pick up',8470.75,0),(411,4,'2023-11-02 08:50:03','Card Payment','Delivery',2399.97,0),(412,4,'2023-11-02 08:57:33','Cash on Delivery','Delivery',2399.97,0),(413,6,'2023-11-02 09:37:42','Card Payment','Delivery',4799.94,0),(414,4,'2023-11-02 09:41:26','Cash on Delivery','Delivery',1254.95,0),(415,4,'2023-11-02 09:58:24','Cash','Pick up',9599.88,0),(416,4,'2023-11-03 10:09:26','Card Payment','Delivery',3599.96,0),(417,4,'2024-01-02 13:34:06','Cash','Pick up',799.99,0),(418,4,'2024-01-04 18:49:28','Card Payment','Delivery',1050.98,34),(419,4,'2024-01-04 19:02:48','Card Payment','Delivery',250.99,25),(420,4,'2024-01-04 19:16:47','Card Payment','Delivery',250.99,33),(421,4,'2024-01-04 19:21:19','Card Payment','Delivery',799.99,24),(422,4,'2024-01-04 19:24:05','Card Payment','Delivery',799.99,27),(423,4,'2024-01-04 19:26:26','Cash','Pick up',799.99,0),(424,4,'2024-01-04 21:08:48','0','Delivery',250.99,33),(425,4,'2024-01-04 21:28:16','0','Delivery',899.99,33),(426,4,'2024-01-04 22:51:33','15','Delivery',250.99,27),(427,4,'2024-01-04 23:00:37','17','Delivery',799.99,34),(428,4,'2024-01-05 12:27:14','9','Delivery',1050.98,33),(429,10,'2024-01-07 11:26:49','Cash','Pick up',799.99,0),(430,12,'2024-07-09 17:11:03','Cash','Pick up',799.99,0),(431,12,'2024-07-09 17:20:15','Cash','Pick up',799.99,0),(432,12,'2024-07-09 17:21:34','Cash','Pick up',799.99,0),(433,12,'2024-07-09 17:31:42','Cash','Pick up',799.99,0);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment_methods`
--

DROP TABLE IF EXISTS `payment_methods`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment_methods` (
  `payment_method_id` tinyint NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`payment_method_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment_methods`
--

LOCK TABLES `payment_methods` WRITE;
/*!40000 ALTER TABLE `payment_methods` DISABLE KEYS */;
/*!40000 ALTER TABLE `payment_methods` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `Product_Id` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(100) DEFAULT NULL,
  `Description` varchar(255) DEFAULT NULL,
  `Product_Image` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`Product_Id`),
  KEY `product_indx` (`Product_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=114 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'Samsung S21','Samsung Galaxy S21 smartphone with advanced features.','Samsung S21.jpeg'),(2,'iPhone X','Apple iPhone X with cutting-edge technology.','i phone_x.jpeg'),(3,'Google Pixel 6','Google Pixel 6 with the latest Android features.','Google Pixel 6.jpeg'),(4,'OnePlus 9','OnePlus 9 flagship smartphone with high performance.','OnePlus 9.jpeg'),(5,'Huawei P40','Huawei P40 with exceptional camera capabilities.','Huawei P40.jpeg'),(6,'Sony Xperia 1','Sony Xperia 1 with a 4K HDR OLED display.','Sony Xperia 1.jpeg'),(7,'LG G8','LG G8 smartphone with AI capabilities.','LG G8.jpeg'),(8,'Xiaomi Mi 11','Xiaomi Mi 11 with a powerful Snapdragon processor.','Xiaomi Mi 11.jpeg'),(9,'Motorola Moto G Power','Motorola Moto G Power with long-lasting battery.','Motorola Moto G Power.jpeg'),(10,'Oppo Find X3','Oppo Find X3 with a stunning display.','Oppo Find X3.jpeg'),(11,'Asus ZenFone 8','Asus ZenFone 8 with high-performance features.','Asus ZenFone 8.jpeg'),(12,'Nokia 9 PureView','Nokia 9 PureView with a penta-lens camera system.','Nokia 9 PureView.jpeg'),(13,'BlackBerry Key2','BlackBerry Key2 with a physical keyboard.','BlackBerry Key2.jpeg'),(14,'HTC U12+','HTC U12+ smartphone with Edge Sense technology.','HTC U12+.jpeg'),(15,'Lenovo Legion Phone','Lenovo Legion Phone designed for gaming.','Lenovo Legion Phone.jpeg'),(16,'Dell XPS 13','Dell XPS 13 laptop with a high-resolution display.','Dell XPS 13.jpeg'),(17,'HP Spectre x360','HP Spectre x360 2-in-1 laptop with premium design.','HP Spectre x360.jpeg'),(18,'Lenovo ThinkPad X1 Carbon','Lenovo ThinkPad X1 Carbon laptop for business professionals.','ThinkPad X1 Carbon.jpeg'),(19,'Apple MacBook Pro','Apple MacBook Pro with Retina display and powerful performance.','MacBook Pro.jpeg'),(20,'Asus ROG Zephyrus','Asus ROG Zephyrus gaming laptop with high-end graphics.','ROG Zephyrus.jpeg'),(21,'Acer Swift 5','Acer Swift 5 lightweight laptop with long battery life.','Acer Swift 5.jpeg'),(22,'Microsoft Surface Laptop','Microsoft Surface Laptop with a sleek design and touch screen.','Surface Laptop.jpeg'),(23,'Sony Bravia 4K UHD TV','Sony Bravia 4K UHD television with stunning picture quality.','Sony Bravia.jpeg'),(24,'Samsung QLED TV','Samsung QLED television with vibrant colors and HDR.','Samsung QLED.jpeg'),(25,'LG OLED TV','LG OLED television with perfect blacks and smart features.','LG OLED.jpeg'),(26,'Panasonic Viera TV','Panasonic Viera television with advanced sound and connectivity.','Panasonic Viera.jpeg'),(27,'TCL Roku TV','TCL Roku television with a user-friendly interface and streaming apps.','TCL Roku.jpeg'),(28,'Hisense 4K Smart TV','Hisense 4K Smart television with excellent value for money.','Hisense Smart TV.jpeg'),(29,'Vizio 8K TV','Vizio 8K television with high-resolution clarity and modern design.','Vizio 8K.jpeg'),(30,'Sony 5.1 Channel Home Theater System','Sony 5.1 channel home theater system with immersive sound.','Sony Home Theater.jpeg'),(31,'Samsung Soundbar with Subwoofer','Samsung soundbar with wireless subwoofer for enhanced audio.','Samsung Soundbar.jpeg'),(32,'LG Dolby Atmos Home Theater','LG home theater system with Dolby Atmos support for 3D sound.','LG Home Theater.jpeg'),(33,'Bose Lifestyle 650 Home Theater','Bose Lifestyle 650 home theater system with premium audio quality.','Bose Home Theater.jpeg'),(34,'Yamaha 7.2-Channel AV Receiver','Yamaha 7.2-channel AV receiver for a versatile home theater setup.','Yamaha AV Receiver.jpeg'),(35,'Denon 5.1-Channel Home Theater System','Denon 5.1-channel home theater system with HDMI connectivity.','Denon Home Theater.jpeg'),(36,'Klipsch Reference Series Sound System','Klipsch Reference Series sound system for high-fidelity audio.','Klipsch Sound System.jpeg'),(37,'Sony PlayStation 5','Sony PlayStation 5 gaming console for next-gen gaming.','PlayStation 5.jpeg'),(38,'Microsoft Xbox Series X','Microsoft Xbox Series X console with powerful performance.','Xbox Series X.jpeg'),(39,'Nintendo Switch','Nintendo Switch hybrid gaming console for on-the-go gaming.','Nintendo Switch.jpeg'),(40,'Sony PlayStation 4','Sony PlayStation 4 console for a wide range of games.','PlayStation 4.jpeg'),(41,'Microsoft Xbox One X','Microsoft Xbox One X console with 4K gaming.','Xbox One X.jpeg'),(42,'Nintendo Switch Lite','Nintendo Switch Lite compact gaming console.','Switch Lite.jpeg'),(43,'Sony PlayStation Portable (PSP)','Sony PSP for portable gaming on the go.','PSP.jpeg'),(44,'KitchenAid Stand Mixer','KitchenAid stand mixer for baking and cooking needs.','KitchenAid Mixer.jpeg'),(45,'Instant Pot Pressure Cooker','Instant Pot pressure cooker for versatile cooking.','Instant Pot Cooker.jpeg'),(46,'Cuisinart Food Processor','Cuisinart food processor for chopping and blending.','Cuisinart Processor.jpeg'),(47,'Breville Espresso Machine','Breville espresso machine for coffee enthusiasts.','Breville Espresso.jpeg'),(48,'Hamilton Beach Blender','Hamilton Beach blender for smoothies and shakes.','Hamilton Beach Blender.jpeg'),(49,'Keurig Coffee Maker','Keurig coffee maker for quick and convenient brewing.','Keurig Coffee Maker.jpeg'),(50,'Ninja Air Fryer','Ninja air fryer for healthier cooking with less oil.','Ninja Air Fryer.jpeg'),(51,'Samsung Front Load Washer','Samsung front load washer for efficient laundry.','Samsung Washer.jpeg'),(52,'LG Top Load Washer','LG top load washer with multiple washing cycles.','LG Washer.jpeg'),(53,'Whirlpool High-Efficiency Washer','Whirlpool high-efficiency washer with quick wash options.','Whirlpool Washer.jpeg'),(54,'Bosch Compact Washer','Bosch compact washer for small spaces.','Bosch Washer.jpeg'),(55,'Maytag Front Load Washer','Maytag front load washer with extra-large capacity.','Maytag Washer.jpeg'),(56,'Electrolux Stackable Washer/Dryer','Electrolux stackable washer/dryer combo.','Electrolux Washer Dryer.jpeg'),(57,'GE Smart Washer','GE smart washer with Wi-Fi connectivity.','GE Washer.jpeg'),(58,'LG French Door Refrigerator','LG French door refrigerator with ample storage space.','LG Refrigerator.jpeg'),(59,'Samsung Side-by-Side Refrigerator','Samsung side-by-side refrigerator with ice and water dispenser.','Samsung Refrigerator.jpeg'),(60,'Whirlpool Top Freezer Refrigerator','Whirlpool top freezer refrigerator for efficient cooling.','Whirlpool Refrigerator.jpeg'),(61,'GE French Door Refrigerator','GE French door refrigerator with customizable shelving.','GE Refrigerator.jpeg'),(62,'Bosch Counter-Depth Refrigerator','Bosch counter-depth refrigerator for a sleek look.','Bosch Refrigerator.jpeg'),(63,'Fisher-Price Rock-a-Stack','Colorful stacking rings for baby to grasp, shake, and stack.','Fisher-Price Rock-a-Stack.jpeg'),(64,'VTech Sit-to-Stand Learning Walker','Interactive learning walker for toddlers with music and activities.','Sit-to-Stand Walker.jpeg'),(65,'Lamaze Freddie the Firefly','Soft, colorful toy with multiple textures and crinkles for sensory exploration.','Freddie the Firefly.jpeg'),(66,'Melissa & Doug Wooden Building Blocks','Set of wooden blocks for building and imaginative play.','Building Blocks.jpeg'),(67,'Infantino Textured Multi Ball Set','Set of textured balls for baby tactile development.','Multi Ball Set.jpeg'),(68,'Fisher-Price Laugh & Learn Smart Stages Chair','Interactive chair with songs, phrases, and activities for babies.','Smart Stages Chair.jpeg'),(69,'Manhattan Toy Winkel Rattle and Sensory Teether Toy','Rattle and teether toy with colorful loops for infants.','Winkel Rattle.jpeg'),(70,'Fisher-Price Baby Bouncer','Bouncy seat with calming vibrations and playful toys for babies.','Baby Bouncer.jpeg'),(71,'Bright Starts Lots of Links','Linkable toys with various textures for attaching to strollers and more.','Lots of Links.jpeg'),(72,'LeapFrog LeapStart 3D Learning System','Interactive educational learning system for kids.','LeapStart 3D.jpeg'),(73,'VTech Touch and Teach Word Book','Educational word book with interactive features for toddlers.','Touch and Teach Word Book.jpeg'),(74,'Osmo Genius Starter Kit for iPad','Interactive learning kit that connects to an iPad for various educational games.','Genius Starter Kit.jpeg'),(75,'Melissa & Doug See and Spell Learning Toy','Spelling and vocabulary learning toy for children.','See and Spell Learning Toy.jpeg'),(76,'National Geographic Kids Beginner World Atlas','Educational world atlas for young explorers.','World Atlas.jpeg'),(77,'Learning Resources Mathlink Cubes','Mathematical learning cubes for hands-on counting and more.','Mathlink Cubes.jpeg'),(78,'ScienceWiz Electricity Kit','Educational kit for learning about electricity and circuits.','Electricity Kit.jpeg'),(79,'Barbie Dreamhouse','Barbies iconic dreamhouse for imaginative play.','Barbie Dreamhouse.jpeg'),(80,'American Girl Doll','High-quality American Girl doll for young collectors.','American Girl Doll.jpeg'),(81,'L.O.L. Surprise! Doll','Collectible L.O.L. Surprise! doll with hidden surprises.','L.O.L. Surprise! Doll.jpeg'),(82,'KidKraft Disney Princess Cinderella Royal Dreams Dollhouse','Disney Princess-themed dollhouse for storytelling.','Cinderella Dollhouse.jpeg'),(83,'Bratz Doll','Fashionable Bratz doll with stylish outfits and accessories.','Bratz Doll.jpeg'),(84,'Settlers of Catan Board Game','Classic strategy board game for building settlements and trading resources.','Settlers of Catan.jpeg'),(85,'Jigsaw Puzzle - World Map','World map jigsaw puzzle for geography enthusiasts.','World Map Puzzle.jpeg'),(86,'Ticket to Ride Board Game','Railroad adventure board game with strategic play.','Ticket to Ride.jpeg'),(87,'Ravensburger Labyrinth Board Game','Maze-like adventure board game for players of all ages.','Labyrinth Board Game.jpeg'),(88,'Sudoku Puzzle Book','Sudoku puzzle book with a variety of difficulty levels.','Sudoku Puzzle Book.jpeg'),(89,'Musical Mobile','Soothing mobile with cute characters','mobile.jpg'),(90,'Sensory Balls','Textured balls for sensory development','sensory_balls.jpg'),(91,'Baby Blocks','Soft and stackable building blocks','baby_blocks.jpg'),(92,'Bath Toys','Floating toys for bath time fun','bath_toys.jpg'),(93,'Baby Monitor','Video monitor for baby surveillance','baby_monitor.jpg'),(94,'Fisher-Price Rock-a-Stack','Classic stacking toy for babies and toddlers. Helps develop fine motor skills and hand-eye coordination.','fisher_price.jpg'),(95,'VTech Sit-to-Stand Learning Walker','Interactive learning walker with removable play panel. Features multiple activities and encourages early learning.','vtech_walker.jpg'),(96,'Lamaze Freddie the Firefly','Soft, colorful toy with multiple textures. Features a squeaker, crinkly wings, and teether antennae for sensory exploration.','freddie_firefly.jpg'),(97,'Melissa & Doug Wooden Building Blocks','Set of durable wooden blocks in various shapes and sizes. Promotes creative play, spatial skills, and imagination.','wooden_blocks.jpg'),(98,'Infantino Textured Multi Ball Set','Set of textured balls with different shapes and sizes. Perfect for tactile exploration and sensory stimulation.','multi_ball_set.jpg'),(99,'Fisher-Price Rock-a-Stack','Classic stacking toy for babies and toddlers. Helps develop fine motor skills and hand-eye coordination.','fisher_price.jpg'),(100,'VTech Sit-to-Stand Learning Walker','Interactive learning walker with removable play panel. Features multiple activities and encourages early learning.','vtech_walker.jpg'),(101,'Lamaze Freddie the Firefly','Soft, colorful toy with multiple textures. Features a squeaker, crinkly wings, and teether antennae for sensory exploration.','freddie_firefly.jpg'),(102,'Melissa & Doug Wooden Building Blocks','Set of durable wooden blocks in various shapes and sizes. Promotes creative play, spatial skills, and imagination.','wooden_blocks.jpg'),(103,'Infantino Textured Multi Ball Set','Set of textured balls with different shapes and sizes. Perfect for tactile exploration and sensory stimulation.','multi_ball_set.jpg'),(104,'Fisher-Price Rock-a-Stack','Classic stacking toy for babies and toddlers. Helps develop fine motor skills and hand-eye coordination.','fisher_price.jpg'),(105,'VTech Sit-to-Stand Learning Walker','Interactive learning walker with removable play panel. Features multiple activities and encourages early learning.','vtech_walker.jpg'),(106,'Lamaze Freddie the Firefly','Soft, colorful toy with multiple textures. Features a squeaker, crinkly wings, and teether antennae for sensory exploration.','freddie_firefly.jpg'),(107,'Melissa & Doug Wooden Building Blocks','Set of durable wooden blocks in various shapes and sizes. Promotes creative play, spatial skills, and imagination.','wooden_blocks.jpg'),(108,'Infantino Textured Multi Ball Set','Set of textured balls with different shapes and sizes. Perfect for tactile exploration and sensory stimulation.','multi_ball_set.jpg'),(109,'Fisher-Price Rock-a-Stack','Classic stacking toy for babies and toddlers. Helps develop fine motor skills and hand-eye coordination.','fisher_price.jpg'),(110,'VTech Sit-to-Stand Learning Walker','Interactive learning walker with removable play panel. Features multiple activities and encourages early learning.','vtech_walker.jpg'),(111,'Lamaze Freddie the Firefly','Soft, colorful toy with multiple textures. Features a squeaker, crinkly wings, and teether antennae for sensory exploration.','freddie_firefly.jpg'),(112,'Melissa & Doug Wooden Building Blocks','Set of durable wooden blocks in various shapes and sizes. Promotes creative play, spatial skills, and imagination.','wooden_blocks.jpg'),(113,'Infantino Textured Multi Ball Set','Set of textured balls with different shapes and sizes. Perfect for tactile exploration and sensory stimulation.','multi_ball_set.jpg');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_category`
--

DROP TABLE IF EXISTS `product_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_category` (
  `Product_Category_Id` int NOT NULL,
  `Parent_Product_Category_Id` int DEFAULT NULL,
  `Category_Name` varchar(25) DEFAULT NULL,
  `Category_Image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Product_Category_Id`),
  KEY `fk1` (`Parent_Product_Category_Id`),
  CONSTRAINT `fk1` FOREIGN KEY (`Parent_Product_Category_Id`) REFERENCES `product_category` (`Product_Category_Id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_category`
--

LOCK TABLES `product_category` WRITE;
/*!40000 ALTER TABLE `product_category` DISABLE KEYS */;
INSERT INTO `product_category` VALUES (1,NULL,'Electronics','electronics.jpeg'),(2,NULL,'Toys','toys.jpeg'),(3,1,'Smart Phones','smartphones.jpeg'),(4,1,'Lap Tops','laptops.jpeg'),(5,1,'Home Entertainment','homeentertainment.jpeg'),(6,5,'Televisions','televisions.jpeg'),(7,5,'Home theater systems','hometheatersystems.jpeg'),(8,5,'Gaming Consoles','gamingconsoles.jpeg'),(9,1,'Home Appliances','homeappliances.jpeg'),(10,9,'Kitchen Appliances','kitchenappliances.jpeg'),(11,9,'Washing Machines','washingmachine.jpeg'),(12,9,'Refrigerators','refrigerators.jpeg'),(13,2,'Baby Toys','babytoys.jpeg'),(14,2,'Educational Toys','educationaltoys.jpeg'),(15,2,'Dolls and Dollhouses','dollsanddollhouses.jpeg'),(16,2,'Board Games and Puzzles','boardgamesandpuzzles.jpeg');
/*!40000 ALTER TABLE `product_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_category_configuration`
--

DROP TABLE IF EXISTS `product_category_configuration`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_category_configuration` (
  `Product_Id` int NOT NULL,
  `Product_Category_Id` int NOT NULL,
  PRIMARY KEY (`Product_Id`,`Product_Category_Id`),
  KEY `Product_Id` (`Product_Id`),
  KEY `Product_Category_Id` (`Product_Category_Id`),
  CONSTRAINT `product_category_configuration_ibfk_1` FOREIGN KEY (`Product_Id`) REFERENCES `product` (`Product_Id`),
  CONSTRAINT `product_category_configuration_ibfk_2` FOREIGN KEY (`Product_Category_Id`) REFERENCES `product_category` (`Product_Category_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_category_configuration`
--

LOCK TABLES `product_category_configuration` WRITE;
/*!40000 ALTER TABLE `product_category_configuration` DISABLE KEYS */;
INSERT INTO `product_category_configuration` VALUES (1,1),(1,3),(2,1),(2,3),(3,1),(3,3),(4,1),(4,3),(5,1),(5,3),(6,1),(6,3),(7,1),(7,3),(8,1),(8,3),(9,1),(9,3),(10,1),(10,3),(11,1),(11,3),(12,1),(12,3),(13,1),(13,3),(14,1),(14,3),(15,1),(15,3),(16,1),(16,4),(17,1),(17,4),(18,1),(18,4),(19,1),(19,4),(20,1),(20,4),(21,1),(21,4),(22,1),(22,4),(23,1),(23,5),(23,6),(24,1),(24,5),(24,6),(25,1),(25,5),(25,6),(26,1),(26,5),(26,6),(27,1),(27,5),(27,6),(28,1),(28,5),(28,6),(29,1),(29,5),(29,6),(30,1),(30,5),(30,7),(31,1),(31,5),(31,7),(32,1),(32,5),(32,7),(33,1),(33,5),(33,7),(34,1),(34,5),(34,7),(35,1),(35,5),(35,7),(36,1),(36,5),(36,7),(37,1),(37,5),(37,8),(38,1),(38,5),(38,8),(39,1),(39,5),(39,8),(40,1),(40,5),(40,8),(41,1),(41,5),(41,8),(42,1),(42,5),(42,8),(43,1),(43,5),(43,8),(44,1),(44,9),(44,10),(45,1),(45,9),(45,10),(46,1),(46,9),(46,10),(47,1),(47,9),(47,10),(48,1),(48,9),(48,10),(49,1),(49,9),(49,10),(50,1),(50,9),(50,10),(51,1),(51,9),(51,11),(52,1),(52,9),(52,11),(53,1),(53,9),(53,11),(54,1),(54,9),(54,11),(55,1),(55,9),(55,11),(56,1),(56,9),(56,11),(57,1),(57,9),(57,11),(58,1),(58,9),(58,12),(59,1),(59,9),(59,12),(60,1),(60,9),(60,12),(61,1),(61,9),(61,12),(62,1),(62,9),(62,12),(63,2),(63,13),(64,2),(64,13),(65,2),(65,13),(66,2),(66,13),(67,2),(67,13),(68,2),(68,13),(69,2),(69,13),(70,2),(70,13),(71,2),(71,13),(72,2),(72,14),(73,2),(73,14),(74,2),(74,14),(75,2),(75,14),(76,2),(76,14),(77,2),(77,14),(78,2),(78,14),(79,2),(79,15),(80,2),(80,15),(81,2),(81,15),(82,2),(82,15),(83,2),(83,15),(84,2),(84,16),(85,2),(85,16),(86,2),(86,16),(87,2),(87,16),(88,2),(88,16);
/*!40000 ALTER TABLE `product_category_configuration` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `User_Id` int NOT NULL AUTO_INCREMENT,
  `Email` varchar(50) DEFAULT NULL,
  `Phone_Number` char(10) DEFAULT NULL,
  `First_Name` varchar(15) DEFAULT NULL,
  `Last_Name` varchar(20) DEFAULT NULL,
  `Password` char(200) DEFAULT NULL,
  `Is_Logged_In` int DEFAULT '0',
  `User_Type` varchar(50) NOT NULL DEFAULT 'customer',
  PRIMARY KEY (`User_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'irash@gmail.com','0716669164','irash','perera','bbae46acd62923546d4a192f152656ee637ba0bee4ad11b800c2c9644a2d4dae',1,'customer'),(2,'nisithdivantha@gmail.com','1234567890','Nisith','Doe','bbae46acd62923546d4a192f152656ee637ba0bee4ad11b800c2c9644a2d4dae',0,'admin'),(3,'dinithi.adithya@gmail.com','9876543210','Dinithi','Smith','1d0812692a30fed9096007ff1b0ae7a2e7daeb6d7b7536b3e8d42f63857cc4d1',1,'admin'),(4,'sanjanakumarasingha1@gmail.com','5551234567','Sanjana','Kumarasinghe','d08a3a32b9d8416f3cf4142fb0758ff7898a5528abd7a82c0cbc186b82fb11d0',0,'admin'),(5,'ashen60438@gmail.com','4445556666','ashen','sandeep','5d63de8f7aa786ffa76e87e4766d99b1d07d744ca16eb5c306630b3ef6d638e0',0,'admin'),(6,'guest@gmail.com','9990001111','Guest','User','e3847a3fea3a83d27797da22d25844668ce84f004321e4f9e537c47fceb8f7fc',0,'customer'),(7,'charuka@gmail.com','0716669164','Charuka','Dissanayake','494b8a09257bfd3f48ce90f2f312e1fe324655664823ed574011b42d6fa8acce',1,'customer'),(8,'tony.stark@yahoo.com','2345678901','Tony','Stark','cd180e43a6b65d582387012c1f9ee828116e87b892030a4068c03d4dd1ef90d3',1,'customer'),(9,'thisara.weerakon@gmail.com','1234567834','Thisara','Weerakon','7459bf7fb6c706c92a3459960cde46df66ca2bafe6157f784f22d4c23495a18f',0,'admin'),(10,'taylor.gates@gmail.com','1234876543','Taylor','Gates','25860844f4ea1126744a3977310c348e74fd6cb90eab9758a5f4d5a191551dae',1,'customer'),(11,'peter.start@gmail.com','0771046523','Peter','Stark','dba63dbb2eb6fbe58548a5dd5c270a73d33ddd02884914a7f838e06ce9d8d0fa',1,'customer'),(12,'peter.lewis@gmail.com','0773207085','Peter','Lewis','f4ca58ae0536ba1410c774b7815a32223802a46e2e18106e4844706df9aaca80',1,'customer'),(13,'dean.medes@gmail.com','0773209085','Dean','Medes','f6654501aed6e8f0f6ab91d702a6fa15da0651113dbbd7728e27ac7266455c6d',0,'admin'),(14,'tony.lion@gmail.com','0993207085','Tony','Lion','ebd79c1d04e4a3d1c9726afb64f2a39919f518f8a4fcc322f57e0c0bdcc4c1b3',1,'admin'),(15,'peter@gmail.com','1789098765','Peter','Lewis','a36a80947b91bb104760a5915b15b50518f527e7663810a9b855176c384b269d',1,'customer'),(16,'lasith.malinga@gmail.com','0771046532','Lasith','Malinga','7d2743720be660d40f1dbbdd56eaa348f11c02744277ba9dd6059825ed8ce9be',1,'customer'),(17,'finalcheck@gmail.com','0771046532','Final','Check','eea385aa8a0c2074e105a39ed3212535eeb482e148e26a00b2ccecd103e68cc8',1,'customer'),(18,'sunilfernando@gmail.com','0716958005','Sunil','Fernando','ceb9aeaac8612c0f2713638549048548faf96b0653ba4b0b24353baf4da8380e',1,'customer');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_unicode_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'IGNORE_SPACE,ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `user_insert_trigger` AFTER INSERT ON `user` FOR EACH ROW BEGIN
    INSERT INTO cart (User_Id) VALUES (NEW.User_Id);
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `user_address`
--

DROP TABLE IF EXISTS `user_address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_address` (
  `User_Id` int NOT NULL,
  `Address_Id` int NOT NULL AUTO_INCREMENT,
  `Is_Default` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`Address_Id`,`User_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_address`
--

LOCK TABLES `user_address` WRITE;
/*!40000 ALTER TABLE `user_address` DISABLE KEYS */;
INSERT INTO `user_address` VALUES (10,24,'1'),(10,25,'1'),(10,26,'0'),(10,27,'1'),(10,33,'1'),(10,34,'1'),(10,35,'1'),(16,36,'1');
/*!40000 ALTER TABLE `user_address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_payment_method`
--

DROP TABLE IF EXISTS `user_payment_method`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_payment_method` (
  `Payment_Method_Id` int NOT NULL AUTO_INCREMENT,
  `User_Id` int NOT NULL,
  `Payment_Type` varchar(50) DEFAULT NULL,
  `Provider` varchar(50) DEFAULT NULL,
  `Account_Number` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Expiry_Date` date DEFAULT NULL,
  `Is_Default` bit(1) DEFAULT NULL,
  PRIMARY KEY (`Payment_Method_Id`,`User_Id`),
  KEY `user_payment_method_ibfk_1` (`User_Id`),
  CONSTRAINT `user_payment_method_ibfk_1` FOREIGN KEY (`User_Id`) REFERENCES `user` (`User_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_payment_method`
--

LOCK TABLES `user_payment_method` WRITE;
/*!40000 ALTER TABLE `user_payment_method` DISABLE KEYS */;
INSERT INTO `user_payment_method` VALUES (1,2,'cash','aa','122333','2024-01-01',NULL),(2,7,'Platinum cards','Fifth Third Bank','203948523455','2023-09-28',_binary ''),(3,1,'Mastercard','TD Bank','203948523455','2023-06-21',_binary ''),(4,10,'Platinum cards','Wells Fargo','4096 2340 1289 9804','2023-11-10',_binary ''),(5,12,'Platinum cards','Capital One','1234 1234 1234 4567','2023-11-14',_binary ''),(6,10,'Mastercard','Fifth Third Bank','2345234523452345','2024-01-27',_binary ''),(7,10,'Visa','TD Bank','4096 2340 1289 9856','2032-05-03',_binary ''),(8,10,'Mastercard','U.S. Bank','4096 2367 1289 9856','2024-01-26',_binary ''),(9,10,'Mastercard','PNC Bank','4096 2340 1289 9856','2024-01-31',_binary ''),(10,10,'Platinum cards','Santander Bank','1234 1234 1234 4556','2024-04-18',_binary ''),(11,10,'Mastercard','SunTrust Bank','1234 1234 1234 4598','2024-08-12',_binary ''),(12,10,'Mastercard','U.S. Bank','1234 1234 1234 4567','2024-02-10',_binary ''),(13,10,'Platinum cards','Citibank','4096 2340 1289 9856','2024-02-03',_binary ''),(14,10,'Mastercard','Ally Bank','4096 2340 1289 9823','2026-12-18',_binary ''),(15,10,'Mastercard','Charles Schwab Bank','1234 1234 1234 4556','2024-02-10',_binary ''),(16,10,'Platinum cards','JPMorgan Chase','4096 2340 1289 9804','2024-01-19',_binary ''),(17,10,'Platinum cards','U.S. Bank','4096 2340 1289 9856','2024-08-14',_binary '');
/*!40000 ALTER TABLE `user_payment_method` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `variant`
--

DROP TABLE IF EXISTS `variant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `variant` (
  `Variant_Id` int NOT NULL AUTO_INCREMENT,
  `Product_Id` int NOT NULL,
  `SKU` char(10) DEFAULT '1234567890',
  `Weight` int DEFAULT NULL,
  `Quantity` int DEFAULT NULL,
  `Price` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`Variant_Id`),
  KEY `Product_Id` (`Product_Id`),
  CONSTRAINT `variant_ibfk_1` FOREIGN KEY (`Product_Id`) REFERENCES `product` (`Product_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `variant`
--

LOCK TABLES `variant` WRITE;
/*!40000 ALTER TABLE `variant` DISABLE KEYS */;
INSERT INTO `variant` VALUES (1,1,'s211001',150,-42,799.99),(2,1,'s211002',150,28,799.99),(3,1,'s211003',150,48,799.99),(4,1,'s211004',150,43,899.99),(5,1,'s211005',150,50,899.99),(6,1,'s211006',150,50,899.99),(7,2,'X1001',140,45,1999.00),(8,2,'X1002',140,60,1998.00),(9,2,'X1003',140,60,1997.80),(10,2,'X1004',140,60,1996.60),(11,89,'SKU123',100,50,190.99),(12,89,'SKU124',120,40,210.99),(13,90,'SKU126',130,30,160.99),(14,90,'SKU127',140,35,170.99),(15,91,'SKU129',220,181,250.99),(16,91,'SKU130',215,0,260.99),(17,92,'SKU132',310,18,310.99),(18,92,'SKU133',305,20,33.99),(19,93,'SKU135',55,70,120.99),(20,93,'SKU136',60,65,130.99),(21,89,'Ele123',100,50,190.99),(22,90,'Rat123',130,30,160.99),(23,91,'Bla123',200,20,220.99),(24,92,'Mob123',150,40,180.99),(25,93,'Teeth123',90,60,150.99),(26,15,'Ele123',100,50,190.99),(27,16,'Rat123',130,30,160.99),(28,17,'Bla123',200,20,220.99),(29,18,'Mob123',150,40,180.99),(30,19,'Teeth123',90,60,150.99),(31,15,'Ele123',100,50,190.99),(32,16,'Rat123',130,30,160.99),(33,17,'Bla123',200,20,220.99),(34,18,'Mob123',150,40,180.99),(35,19,'Teeth123',90,60,150.99),(36,15,'Ele123',100,50,190.99),(37,16,'Rat123',130,30,160.99),(38,17,'Bla123',200,20,220.99),(39,18,'Mob123',150,40,180.99),(40,19,'Teeth123',90,60,150.99);
/*!40000 ALTER TABLE `variant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `variant_type`
--

DROP TABLE IF EXISTS `variant_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `variant_type` (
  `Variant_Type_Id` int NOT NULL AUTO_INCREMENT,
  `Product_Category_Id` int DEFAULT NULL,
  `Variation_Name` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`Variant_Type_Id`),
  KEY `Product_Category_Id` (`Product_Category_Id`),
  CONSTRAINT `Product_Category_Id` FOREIGN KEY (`Product_Category_Id`) REFERENCES `product_category` (`Product_Category_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `variant_type`
--

LOCK TABLES `variant_type` WRITE;
/*!40000 ALTER TABLE `variant_type` DISABLE KEYS */;
INSERT INTO `variant_type` VALUES (1,3,'Color'),(2,3,'Storage'),(3,3,'Ram'),(25,13,'Color'),(26,13,'Size');
/*!40000 ALTER TABLE `variant_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `variation_configuration`
--

DROP TABLE IF EXISTS `variation_configuration`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `variation_configuration` (
  `Variant_Id` int NOT NULL,
  `Variation_Option_Id` int NOT NULL,
  PRIMARY KEY (`Variant_Id`,`Variation_Option_Id`),
  KEY `Variation_Option_Id` (`Variation_Option_Id`),
  CONSTRAINT `variation_configuration_ibfk_1` FOREIGN KEY (`Variant_Id`) REFERENCES `variant` (`Variant_Id`),
  CONSTRAINT `variation_configuration_ibfk_2` FOREIGN KEY (`Variation_Option_Id`) REFERENCES `variation_option` (`Variation_Option_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `variation_configuration`
--

LOCK TABLES `variation_configuration` WRITE;
/*!40000 ALTER TABLE `variation_configuration` DISABLE KEYS */;
INSERT INTO `variation_configuration` VALUES (1,1),(4,1),(2,2),(5,2),(3,3),(6,3),(1,4),(2,4),(3,4),(4,5),(5,5),(6,5),(1,7),(2,7),(3,7),(4,7),(5,7),(6,7),(15,9),(17,9),(19,9),(25,9),(27,9),(29,9),(31,9),(33,9),(16,10),(18,10),(26,10),(28,10),(30,10),(32,10),(34,10),(15,11),(17,11),(19,11),(25,11),(27,11),(29,11),(31,11),(33,11),(16,12),(18,12),(26,12),(28,12),(30,12),(32,12),(34,12);
/*!40000 ALTER TABLE `variation_configuration` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `variation_option`
--

DROP TABLE IF EXISTS `variation_option`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `variation_option` (
  `Variation_Option_Id` int NOT NULL AUTO_INCREMENT,
  `Variant_Type_Id` int DEFAULT NULL,
  `Variation_Option_Name` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`Variation_Option_Id`),
  KEY `Variant_Type_Id` (`Variant_Type_Id`),
  CONSTRAINT `variation_option_ibfk_1` FOREIGN KEY (`Variant_Type_Id`) REFERENCES `variant_type` (`Variant_Type_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `variation_option`
--

LOCK TABLES `variation_option` WRITE;
/*!40000 ALTER TABLE `variation_option` DISABLE KEYS */;
INSERT INTO `variation_option` VALUES (1,1,'Phantom Gray'),(2,1,'Phantom White'),(3,1,'Phantom Pink'),(4,2,'128GB'),(5,2,'256GB'),(6,2,'512GB'),(7,3,'8GB RAM'),(8,3,'12GB RAM'),(9,26,'Size Small'),(10,26,'Size medium'),(11,25,'Red'),(12,25,'Black');
/*!40000 ALTER TABLE `variation_option` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `variation_options_with_types`
--

DROP TABLE IF EXISTS `variation_options_with_types`;
/*!50001 DROP VIEW IF EXISTS `variation_options_with_types`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `variation_options_with_types` AS SELECT 
 1 AS `Variant_Type_Id`,
 1 AS `Variation_Name`,
 1 AS `Variation_Option_Id`,
 1 AS `Variation_Option_Name`,
 1 AS `Product_Category_Id`*/;
SET character_set_client = @saved_cs_client;

--
-- Dumping events for database 'ecommerce_platform'
--

--
-- Dumping routines for database 'ecommerce_platform'
--
/*!50003 DROP FUNCTION IF EXISTS `getDeliveryEstimate` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_unicode_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'IGNORE_SPACE,ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` FUNCTION `getDeliveryEstimate`(Variant_Id INT, Order_Id INT) RETURNS int
    DETERMINISTIC
BEGIN
    DECLARE estimatedDays INT;
    DECLARE productStock INT;
    DECLARE city VARCHAR(20);

    SELECT DISTINCT a.City INTO city
    FROM orders o
    -- JOIN order_item oi ON o.Order_Id = oi.Order_Id
    -- JOIN cart c ON o.Cart_Id = c.Cart_Id
    -- JOIN user u ON c.User_Id = u.User_Id
    -- JOIN user_address ua ON u.User_Id = ua.User_Id
    JOIN address a ON o.Address_Id = a.Address_Id
    WHERE o.Order_Id = Order_Id;

    SELECT v.Quantity INTO productStock
    FROM variant v
    WHERE v.Variant_Id = Variant_Id;

    IF productStock > 0 THEN
        IF city IN ('Los Angeles', 'New York', 'Chicago', 'San Francisco', 'lila') THEN

            SET estimatedDays = 5;
        ELSE
            SET estimatedDays = 7;
        END IF;
    ELSE
        IF city IN ('Los Angeles', 'New York', 'Chicago', 'San Francisco', 'lila') THEN
            SET estimatedDays = 5 + 3;
        ELSE
            SET estimatedDays = 7 + 3;
        END IF;
    END IF;

    RETURN estimatedDays;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `InsertCartItem` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_unicode_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'IGNORE_SPACE,ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` FUNCTION `InsertCartItem`(UserId INT, VariantId INT, Quantity INT) RETURNS int
    DETERMINISTIC
BEGIN
  DECLARE CartId INT;

  
  SELECT Cart_Id INTO CartId FROM cart WHERE User_Id = UserId;

  
  INSERT INTO cart_item(Cart_Id, Variant_Id, Cart_Item_Quantity)
  VALUES (CartId, VariantId, Quantity);

  RETURN 1; 
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `FindCategoryBasedOrders` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_unicode_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'IGNORE_SPACE,ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `FindCategoryBasedOrders`()
BEGIN
    SELECT pc.Category_Name, COUNT(DISTINCT o.Order_Id) AS OrderCount
    FROM order_item oi 
    JOIN orders o ON oi.Order_Id = o.Order_Id
    JOIN variant v ON oi.Variant_Id = v.Variant_Id
    JOIN product p ON v.Product_Id = p.Product_Id
    JOIN product_category_configuration pcc ON p.Product_Id = pcc.Product_Id
    JOIN product_category pc ON pcc.Product_Category_Id = pc.Product_Category_Id
    WHERE pc.Parent_Product_Category_Id IS NULL
    GROUP BY pc.Product_Category_Id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `FindCategoryOrders` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_unicode_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'IGNORE_SPACE,ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `FindCategoryOrders`()
BEGIN
    SELECT pc.Category_Name, COUNT(DISTINCT o.Order_Id) AS OrderCount
    FROM product_category pc
    JOIN product_category_configuration pcc ON pc.Product_Category_Id = pcc.Product_Category_Id
    JOIN product p ON p.Product_Id = pcc.Product_Id
    JOIN order_item oi ON oi.Variant_Id = p.Product_Id
    JOIN orders o ON oi.Order_Id = o.Order_Id
    GROUP BY pc.Product_Category_Id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `FindTopSellingProducts` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_unicode_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'IGNORE_SPACE,ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `FindTopSellingProducts`(IN startDate DATE, IN endDate DATE)
BEGIN
    -- Create a temporary table to store the results
    CREATE TEMPORARY TABLE TempTopSellingProducts AS
    SELECT
        p.Product_Id,
        p.Name,
        IFNULL(SUM(oi.Quantity), 0) AS TotalSales
    FROM
        variant v
    LEFT JOIN
        order_item oi ON v.Variant_Id = oi.Variant_Id
    LEFT JOIN
        orders o ON oi.Order_Id = o.Order_Id
    RIGHT JOIN 
        product p ON v.Product_Id = p.Product_Id
    WHERE
        o.Order_Date BETWEEN startDate AND  endDate
    GROUP BY
        p.Product_Id
    ORDER BY
        TotalSales DESC;
    -- Select the results from the temporary table
    SELECT * FROM TempTopSellingProducts;
    -- Drop the temporary table
    DROP TEMPORARY TABLE IF EXISTS TempTopSellingProducts;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GenerateOrderItemsReport` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_unicode_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'IGNORE_SPACE,ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GenerateOrderItemsReport`(IN Order_Id INT)
BEGIN
    SELECT oi.order_item_id,
           p.name, 
           oi.quantity, 
           (oi.quantity * v.price) AS sub_total
    FROM order_item oi
    JOIN variant v ON oi.Variant_Id = v.Variant_Id
    JOIN product p ON v.Product_Id = p.Product_Id
	WHERE oi.Order_Id = Order_Id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetVariantsByOptions` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_unicode_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'IGNORE_SPACE,ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetVariantsByOptions`(
    IN OptionIds VARCHAR(255)
)
BEGIN
    DECLARE OptionCount INT;
    IF OptionIds = '' THEN
        SELECT NULL AS Variant_Id;
    ELSE
        
        SET OptionCount = LENGTH(OptionIds) - LENGTH(REPLACE(OptionIds, ',', '')) + 1;
        SET @sql = CONCAT(
            'SELECT Variant_Id
             FROM variation_configuration
             WHERE Variation_Option_Id IN (', OptionIds, ')
             GROUP BY Variant_Id
             HAVING COUNT(DISTINCT Variation_Option_Id) = ', OptionCount
        );
        PREPARE dynamic_sql FROM @sql;
        EXECUTE dynamic_sql;
        DEALLOCATE PREPARE dynamic_sql;
    END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `QuarterlySales` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_unicode_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'IGNORE_SPACE,ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `QuarterlySales`(SelectedYear int)
begin
	select
	SUM(o.Order_Total) as Sales,
	year(o.Order_Date) as SalesYear,
	CONCAT('Q', QUARTER(min_date.min_date)) as Sales_QUARTER,
	MAX(DATE_FORMAT(o.Order_Date, '%M')) as Sales_MONTH
	from
		orders o
	join (
		select
			year(Order_Date) as year,
			QUARTER(Order_Date) as quarter,
			MIN(Order_Date) as min_date
		from
			orders
		group by
			year(Order_Date),
			QUARTER(Order_Date)
	) min_date
	on
		year(o.Order_Date) = min_date.year
		and QUARTER(o.Order_Date) = min_date.quarter
	WHERE
		year(Order_Date) = IFNULL(SelectedYear, year(Order_Date))
	group by
		SalesYear,
		Sales_QUARTER
	order by
		SalesYear,
		Sales_QUARTER;
end ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Final view structure for view `all_product_in_store`
--

/*!50001 DROP VIEW IF EXISTS `all_product_in_store`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `all_product_in_store` AS select `v`.`SKU` AS `SKU`,`p`.`Name` AS `product`,`pc`.`Category_Name` AS `Category_Name`,`vt`.`Variation_Name` AS `Variation_Name`,`vo`.`Variation_Option_Name` AS `Variation_Option_Name`,`v`.`Weight` AS `Weight`,`v`.`Quantity` AS `Quantity` from ((((((`product` `p` join `product_category_configuration` `pcc` on((`p`.`Product_Id` = `pcc`.`Product_Id`))) join `product_category` `pc` on((`pcc`.`Product_Category_Id` = `pc`.`Product_Category_Id`))) join `variant_type` `vt` on((`pc`.`Product_Category_Id` = `vt`.`Product_Category_Id`))) join `variation_option` `vo` on((`vt`.`Variant_Type_Id` = `vo`.`Variant_Type_Id`))) join `variation_configuration` `vc` on((`vo`.`Variation_Option_Id` = `vc`.`Variation_Option_Id`))) join `variant` `v` on((`vc`.`Variant_Id` = `v`.`Variant_Id`))) where (`v`.`Product_Id` = `p`.`Product_Id`) order by `v`.`SKU` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `cartview`
--

/*!50001 DROP VIEW IF EXISTS `cartview`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `cartview` AS select `ci`.`Cart_Item_Id` AS `Cart_Item_Id`,`c`.`User_Id` AS `User_Id`,`p`.`Name` AS `Product_Name`,`ci`.`Cart_Item_Quantity` AS `Quantity`,`v`.`Price` AS `Price`,(`v`.`Price` * `ci`.`Cart_Item_Quantity`) AS `Sub_Total` from (((`cart_item` `ci` join `variant` `v` on((`ci`.`Variant_Id` = `v`.`Variant_Id`))) join `product` `p` on((`v`.`Product_Id` = `p`.`Product_Id`))) join `cart` `c` on((`ci`.`Cart_Id` = `c`.`Cart_Id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `orderhistory`
--

/*!50001 DROP VIEW IF EXISTS `orderhistory`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `orderhistory` AS select `oi`.`Variant_Id` AS `Variant_Id`,`oi`.`Order_Id` AS `Order_id`,`oi`.`Quantity` AS `Quantity`,`v`.`Product_Id` AS `Product_Id`,`p`.`Name` AS `Product_Name`,`o`.`Cart_Id` AS `Cart_Id`,`o`.`Order_Date` AS `Order_Date`,`c`.`User_Id` AS `user_ID`,(`oi`.`Quantity` * `v`.`Price`) AS `Price` from ((((`order_item` `oi` left join `orders` `o` on((`oi`.`Order_Id` = `o`.`Order_Id`))) left join `cart` `c` on((`o`.`Cart_Id` = `c`.`Cart_Id`))) left join `variant` `v` on((`oi`.`Variant_Id` = `v`.`Variant_Id`))) left join `product` `p` on((`v`.`Product_Id` = `p`.`Product_Id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `orderreport`
--

/*!50001 DROP VIEW IF EXISTS `orderreport`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_unicode_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `orderreport` AS select `u`.`First_Name` AS `First_Name`,`u`.`Last_Name` AS `Last_Name`,`u`.`Email` AS `Email`,`o`.`Order_Id` AS `Order_Id`,`o`.`Order_Date` AS `Order_Date`,`o`.`Payment_Method` AS `Payment_Method`,`o`.`Delivery_Method_Name` AS `Delivery_Method_Name`,`a`.`City` AS `City`,`a`.`Region` AS `Region`,`o`.`Order_Total` AS `Order_Total` from ((((`orders` `o` join `cart` `c` on((`o`.`Cart_Id` = `c`.`Cart_Id`))) join `user` `u` on((`c`.`User_Id` = `u`.`User_Id`))) join `user_address` `ua` on((`u`.`User_Id` = `ua`.`User_Id`))) join `address` `a` on((`ua`.`Address_Id` = `a`.`Address_Id`))) order by `o`.`Order_Date` desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `variation_options_with_types`
--

/*!50001 DROP VIEW IF EXISTS `variation_options_with_types`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_unicode_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `variation_options_with_types` AS select distinct `variant_type`.`Variant_Type_Id` AS `Variant_Type_Id`,`variant_type`.`Variation_Name` AS `Variation_Name`,`variation_option`.`Variation_Option_Id` AS `Variation_Option_Id`,`variation_option`.`Variation_Option_Name` AS `Variation_Option_Name`,`variant_type`.`Product_Category_Id` AS `Product_Category_Id` from (`variant_type` join `variation_option`) where (`variant_type`.`Variant_Type_Id` = `variation_option`.`Variant_Type_Id`) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-09 18:15:30
