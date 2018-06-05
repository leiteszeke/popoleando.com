-- MySQL dump 10.13  Distrib 5.7.22, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: popoleando
-- ------------------------------------------------------
-- Server version	5.6.39

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `image` text COLLATE utf8_spanish_ci,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Pizzas Tradicionales',NULL,'2018-06-04 12:11:06','2018-06-04 12:11:06',NULL),(2,'Pizzas Rellenas',NULL,'2018-06-04 12:11:06','2018-06-04 12:11:06',NULL),(3,'Calzones',NULL,'2018-06-04 12:11:06','2018-06-04 12:11:06',NULL),(4,'Empanadas Horno',NULL,'2018-06-04 12:11:06','2018-06-04 12:11:06',NULL),(5,'Empanadas Fritas',NULL,'2018-06-04 12:11:06','2018-06-04 12:11:06',NULL),(6,'Bebidas',NULL,'2018-06-04 12:11:06','2018-06-04 12:11:06',NULL),(7,'Promos',NULL,'2018-06-04 12:11:06','2018-06-04 12:11:06',NULL),(8,'Pizzas Tradicionales',NULL,'2018-06-04 12:11:09','2018-06-04 12:11:09',NULL),(9,'Pizzas Rellenas',NULL,'2018-06-04 12:11:09','2018-06-04 12:11:09',NULL),(10,'Calzones',NULL,'2018-06-04 12:11:09','2018-06-04 12:11:09',NULL),(11,'Empanadas Horno',NULL,'2018-06-04 12:11:09','2018-06-04 12:11:09',NULL),(12,'Empanadas Fritas',NULL,'2018-06-04 12:11:09','2018-06-04 12:11:09',NULL),(13,'Bebidas',NULL,'2018-06-04 12:11:09','2018-06-04 12:11:09',NULL),(14,'Promos',NULL,'2018-06-04 12:11:09','2018-06-04 12:11:09',NULL);
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_items`
--

DROP TABLE IF EXISTS `order_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `order_items` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `quantity` decimal(10,2) NOT NULL,
  `unit_price` decimal(10,2) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_items`
--

LOCK TABLES `order_items` WRITE;
/*!40000 ALTER TABLE `order_items` DISABLE KEYS */;
INSERT INTO `order_items` VALUES (1,4,1,12,1.00,25.00,'2018-06-04 14:50:32','2018-06-04 15:08:26',NULL),(4,4,1,10,1.00,25.00,'2018-06-04 14:50:32','2018-06-04 14:50:32',NULL),(6,10,1,12,3.00,25.00,'2018-06-04 15:07:53','2018-06-04 15:08:26',NULL),(7,1,1,1,4.00,25.00,'2018-06-04 20:55:06','2018-06-05 10:54:38',NULL),(8,7,1,1,22.00,25.00,'2018-06-04 20:56:11','2018-06-05 10:48:00',NULL),(9,8,1,1,6.00,25.00,'2018-06-04 22:04:15','2018-06-04 22:04:15',NULL),(10,2,1,1,1.00,25.00,'2018-06-04 22:28:13','2018-06-05 10:54:37',NULL),(11,3,1,1,1.00,25.00,'2018-06-05 10:47:33','2018-06-05 10:47:33',NULL);
/*!40000 ALTER TABLE `order_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_status`
--

DROP TABLE IF EXISTS `order_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `order_status` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_status`
--

LOCK TABLES `order_status` WRITE;
/*!40000 ALTER TABLE `order_status` DISABLE KEYS */;
INSERT INTO `order_status` VALUES (1,'En Progreso','2018-06-04 12:21:34','2018-06-04 12:21:34',NULL),(2,'Enviado','2018-06-04 12:21:34','2018-06-04 12:21:34',NULL),(3,'Entregado','2018-06-04 12:21:34','2018-06-04 12:21:34',NULL),(4,'Cancelado','2018-06-04 12:21:34','2018-06-04 12:21:34',NULL);
/*!40000 ALTER TABLE `order_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `status_id` int(11) DEFAULT '1',
  `date` date NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,1,'2018-06-04','2018-06-04 14:03:33','2018-06-04 15:12:20',NULL);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category_id` int(11) NOT NULL,
  `name` varchar(100) CHARACTER SET utf8 NOT NULL,
  `image` text COLLATE utf8_spanish_ci,
  `code` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `sales_unit` varchar(45) COLLATE utf8_spanish_ci DEFAULT NULL,
  `unit_price` decimal(10,2) NOT NULL,
  `description` text COLLATE utf8_spanish_ci,
  `fractionable` tinyint(4) NOT NULL DEFAULT '0',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,4,'Acelga con Salsa Blanca',NULL,'VB','1 u',25.00,NULL,0,'2018-06-04 12:18:28','2018-06-04 15:40:54',NULL),(2,4,'Acelga con Queso',NULL,'VQ','1 u',25.00,NULL,0,'2018-06-04 12:18:28','2018-06-04 15:40:54',NULL),(3,4,'Anana con Jamon y Queso',NULL,'A','1 u',25.00,NULL,0,'2018-06-04 12:18:28','2018-06-04 15:40:54',NULL),(4,4,'Carne Suave',NULL,'CS','1 u',25.00,NULL,0,'2018-06-04 12:18:28','2018-06-04 15:40:54',NULL),(5,4,'Carne Picante',NULL,'CP','1 u',25.00,NULL,0,'2018-06-04 12:18:28','2018-06-04 15:40:54',NULL),(6,4,'Carne Dulce',NULL,'CD','1 u',25.00,NULL,0,'2018-06-04 12:18:28','2018-06-04 15:40:54',NULL),(7,4,'Champignon y Queso',NULL,'CQ','1 u',25.00,NULL,0,'2018-06-04 12:18:28','2018-06-04 15:40:54',NULL),(8,4,'Jamon y Queso',NULL,'JQ','1 u',25.00,NULL,0,'2018-06-04 12:18:28','2018-06-04 15:40:54',NULL),(9,4,'Jamon, Queso y Morron',NULL,'M','1 u',25.00,NULL,0,'2018-06-04 12:18:28','2018-06-04 15:40:54',NULL),(10,4,'Jamon, Queso, Cebolla y Huevo',NULL,'CH','1 u',25.00,NULL,0,'2018-06-04 12:18:28','2018-06-04 15:40:54',NULL),(11,4,'Humita',NULL,'H','1 u',25.00,NULL,0,'2018-06-04 12:18:28','2018-06-04 15:40:54',NULL),(12,4,'Calabaza con Queso',NULL,'C','1 u',25.00,NULL,0,'2018-06-04 12:18:28','2018-06-04 15:40:54',NULL),(13,4,'Caprese',NULL,'T','1 u',25.00,NULL,0,'2018-06-04 12:18:28','2018-06-04 15:40:54',NULL),(14,4,'Pollo',NULL,'P','1 u',25.00,NULL,0,'2018-06-04 12:18:28','2018-06-04 15:40:54',NULL),(15,4,'Queso y Cebolla',NULL,'QC','1 u',25.00,NULL,0,'2018-06-04 12:18:28','2018-06-04 15:40:54',NULL),(16,4,'Queso al Oreganato',NULL,'O','1 u',25.00,NULL,0,'2018-06-04 12:18:28','2018-06-04 15:40:54',NULL),(17,4,'Queso, Salchicha y Mostaza',NULL,'CM','1 u',25.00,NULL,0,'2018-06-04 12:18:28','2018-06-04 15:40:54',NULL),(18,4,'Queso, Salchicha y Huevo',NULL,'QH','1 u',25.00,NULL,0,'2018-06-04 12:18:28','2018-06-04 15:40:54',NULL),(19,4,'Chorizo Colorado y Muzzarela',NULL,NULL,'1 u',25.00,NULL,0,'2018-06-04 12:18:28','2018-06-04 15:40:54',NULL),(20,4,'Roquefort con Jamon',NULL,'RJ','1 u',25.00,NULL,0,'2018-06-04 12:18:28','2018-06-04 15:40:54',NULL),(21,4,'Roquefort, Apio y Nuez',NULL,'RA','1 u',25.00,NULL,0,'2018-06-04 12:18:28','2018-06-04 15:40:54',NULL),(22,4,'Longaniza, Papa y Muzzarella',NULL,'LP','1 u',25.00,NULL,0,'2018-06-04 12:18:28','2018-06-04 15:40:54',NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stars`
--

DROP TABLE IF EXISTS `stars`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `stars` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `value` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stars`
--

LOCK TABLES `stars` WRITE;
/*!40000 ALTER TABLE `stars` DISABLE KEYS */;
INSERT INTO `stars` VALUES (1,7,1,1,'0000-00-00 00:00:00','0000-00-00 00:00:00',NULL),(2,7,2,3,'0000-00-00 00:00:00','0000-00-00 00:00:00',NULL),(3,7,3,5,'0000-00-00 00:00:00','0000-00-00 00:00:00',NULL);
/*!40000 ALTER TABLE `stars` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-06-05  8:01:00
