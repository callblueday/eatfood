-- phpMyAdmin SQL Dump
-- version 2.10.3
-- http://www.phpmyadmin.net
-- 
-- 主机: localhost
-- 生成日期: 2013 年 07 月 12 日 09:47
-- 服务器版本: 5.0.51
-- PHP 版本: 5.2.6

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

-- 
-- 数据库: `order`
-- 
CREATE DATABASE `order` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `order`;

-- --------------------------------------------------------

-- 
-- 表的结构 `menu`
-- 

CREATE TABLE `menu` (
  `id` int(5) NOT NULL auto_increment COMMENT '菜品id编号',
  `name` varchar(20) collate utf8_unicode_ci NOT NULL default '无' COMMENT '菜名',
  `price` int(5) NOT NULL default '0' COMMENT '单价',
  `pic` varchar(50) collate utf8_unicode_ci NOT NULL default '/pic/example.png' COMMENT '菜品图片',
  `active` int(1) NOT NULL default '1' COMMENT '是否可用',
  `meat` int(1) NOT NULL default '0',
  `color` int(1) NOT NULL default '0',
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=94 ;

-- 
-- 导出表中的数据 `menu`
-- 

INSERT INTO `menu` VALUES (48, '家常豆腐     ', 12, '/pic/example.png', 1, 0, 0);
INSERT INTO `menu` VALUES (46, '青炒土豆丝', 7, '/pic/example.png', 1, 0, 0);
INSERT INTO `menu` VALUES (45, '麻婆豆腐   ', 8, '/pic/example.png', 1, 0, 0);
INSERT INTO `menu` VALUES (47, '干锅包菜', 16, '/pic/example.png', 1, 0, 0);
INSERT INTO `menu` VALUES (49, '肥肠鱼', 28, '/pic/example.png', 1, 2, 0);
INSERT INTO `menu` VALUES (50, '酸菜鱼', 25, '/pic/example.png', 1, 2, 0);
INSERT INTO `menu` VALUES (52, '韭菜炒鸡蛋', 10, '/pic/example.png', 1, 0, 1);
INSERT INTO `menu` VALUES (53, '韭菜豆腐丝', 10, '/pic/example.png', 1, 0, 1);
INSERT INTO `menu` VALUES (55, '丝瓜炒鸡蛋', 12, '/pic/example.png', 1, 0, 1);
INSERT INTO `menu` VALUES (57, '雪菜香干炒肉丝', 12, '/pic/example.png', 1, 1, 1);
INSERT INTO `menu` VALUES (58, '肉末涨蛋', 12, '/pic/example.png', 1, 1, 1);
INSERT INTO `menu` VALUES (62, '香菇青菜', 10, '/pic/example.png', 1, 0, 2);
INSERT INTO `menu` VALUES (63, '干煸四季豆', 12, '/pic/example.png', 1, 0, 2);
INSERT INTO `menu` VALUES (65, '酸菜鸡', 12, '/pic/example.png', 1, 1, 2);
INSERT INTO `menu` VALUES (68, '青椒香干炒肉', 12, '/pic/example.png', 1, 1, 2);
INSERT INTO `menu` VALUES (69, '豇豆炒肉', 12, '/pic/example.png', 1, 1, 2);
INSERT INTO `menu` VALUES (70, '西红柿炒鸡蛋', 10, '/pic/example.png', 1, 0, 3);
INSERT INTO `menu` VALUES (71, '宫保鸡丁', 15, '/pic/example.png', 1, 1, 3);
INSERT INTO `menu` VALUES (72, '鱼香肉丝', 15, '/pic/example.png', 1, 1, 3);
INSERT INTO `menu` VALUES (73, '毛血旺', 28, '/pic/example.png', 1, 1, 3);
INSERT INTO `menu` VALUES (74, '糖醋里脊', 18, '/pic/example.png', 1, 2, 3);
INSERT INTO `menu` VALUES (76, '大盘鸡', 30, '/pic/example.png', 1, 2, 3);
INSERT INTO `menu` VALUES (77, '水煮牛柳', 22, '/pic/example.png', 1, 2, 3);
INSERT INTO `menu` VALUES (78, '孜然牛柳', 22, '/pic/example.png', 1, 2, 3);
INSERT INTO `menu` VALUES (79, '爆炒牛肚', 22, '/pic/example.png', 1, 2, 3);
INSERT INTO `menu` VALUES (80, '回锅肉', 16, '/pic/example.png', 1, 2, 3);
INSERT INTO `menu` VALUES (82, '爆炒猪肝', 12, '/pic/example.png', 1, 2, 3);
INSERT INTO `menu` VALUES (84, '油淋茄子', 10, '/pic/example.png', 1, 0, 4);
INSERT INTO `menu` VALUES (85, '鱼香茄子', 12, '/pic/example.png', 1, 1, 4);
INSERT INTO `menu` VALUES (87, '木须肉', 15, '/pic/example.png', 1, 2, 5);

-- --------------------------------------------------------

-- 
-- 表的结构 `orderdetail`
-- 

CREATE TABLE `orderdetail` (
  `id` int(10) NOT NULL default '0',
  `time0` int(10) NOT NULL default '0',
  `amount` int(10) NOT NULL default '0',
  `name` varchar(20) NOT NULL default '0',
  KEY `id` (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='每次订单的详细信息';

-- 
-- 导出表中的数据 `orderdetail`
-- 

INSERT INTO `orderdetail` VALUES (0, 1373176778, 1, '爆炒猪肝');
INSERT INTO `orderdetail` VALUES (0, 1373176778, 1, '肥肠鱼');
INSERT INTO `orderdetail` VALUES (0, 1373176778, 1, '肉末涨蛋');
INSERT INTO `orderdetail` VALUES (0, 1373176778, 1, '毛血旺');
INSERT INTO `orderdetail` VALUES (0, 1373176478, 1, '肉末涨蛋');
INSERT INTO `orderdetail` VALUES (0, 1373176478, 1, '酸菜鱼');
INSERT INTO `orderdetail` VALUES (0, 1373176478, 1, '西红柿炒鸡蛋');
INSERT INTO `orderdetail` VALUES (0, 1373176478, 1, '干煸四季豆');
INSERT INTO `orderdetail` VALUES (0, 1373176478, 1, '丝瓜炒鸡蛋');
INSERT INTO `orderdetail` VALUES (0, 1373176478, 1, '干锅包菜');
INSERT INTO `orderdetail` VALUES (0, 1373176478, 1, '豇豆炒肉');
INSERT INTO `orderdetail` VALUES (0, 1373176478, 1, '肉末涨蛋');
INSERT INTO `orderdetail` VALUES (0, 1373176478, 1, '雪菜香干炒肉丝');
INSERT INTO `orderdetail` VALUES (0, 1373176871, 1, '干锅包菜    ');
INSERT INTO `orderdetail` VALUES (0, 1373176871, 1, '丝瓜炒鸡蛋');
INSERT INTO `orderdetail` VALUES (0, 1373176871, 1, '干煸四季豆');
INSERT INTO `orderdetail` VALUES (0, 1373176871, 1, '西红柿炒鸡蛋');
INSERT INTO `orderdetail` VALUES (0, 1373176871, 1, '酸菜鱼');
INSERT INTO `orderdetail` VALUES (0, 1373176871, 1, '肉末涨蛋');
INSERT INTO `orderdetail` VALUES (0, 1373178845, 1, '鱼香肉丝');
INSERT INTO `orderdetail` VALUES (0, 1373178845, 1, '回锅肉');
INSERT INTO `orderdetail` VALUES (0, 1373178845, 1, '孜然牛柳');
INSERT INTO `orderdetail` VALUES (0, 1373178845, 1, '水煮牛柳');
INSERT INTO `orderdetail` VALUES (0, 1373178845, 1, '木须肉');
INSERT INTO `orderdetail` VALUES (0, 1373182006, 1, '爆炒猪肝');
INSERT INTO `orderdetail` VALUES (0, 1373182006, 1, '酸菜鱼');
INSERT INTO `orderdetail` VALUES (0, 1373182006, 1, '肥肠鱼');
INSERT INTO `orderdetail` VALUES (0, 1373182006, 1, '糖醋里脊');
INSERT INTO `orderdetail` VALUES (0, 1373186841, 1, '孜然牛柳');
INSERT INTO `orderdetail` VALUES (0, 1373186841, 1, '糖醋里脊');
INSERT INTO `orderdetail` VALUES (0, 1373186841, 1, '回锅肉');
INSERT INTO `orderdetail` VALUES (0, 1373186841, 1, '爆炒牛肚');
INSERT INTO `orderdetail` VALUES (0, 1373186841, 1, '大盘鸡');
INSERT INTO `orderdetail` VALUES (0, 1373189157, 1, '鱼香肉丝');
INSERT INTO `orderdetail` VALUES (0, 1373189157, 1, '丝瓜炒鸡蛋');
INSERT INTO `orderdetail` VALUES (0, 1373189157, 1, '干锅包菜    ');
INSERT INTO `orderdetail` VALUES (0, 1373189157, 1, '青炒土豆丝 ');
INSERT INTO `orderdetail` VALUES (0, 1373189305, 1, '油淋茄子');
INSERT INTO `orderdetail` VALUES (0, 1373189305, 1, '干锅包菜    ');
INSERT INTO `orderdetail` VALUES (0, 1373189305, 1, '干煸四季豆');
INSERT INTO `orderdetail` VALUES (0, 1373189305, 1, '西红柿炒鸡蛋');
INSERT INTO `orderdetail` VALUES (0, 1373189305, 1, '酸菜鱼');
INSERT INTO `orderdetail` VALUES (0, 1373189305, 1, '肉末涨蛋');
INSERT INTO `orderdetail` VALUES (0, 1373190049, 1, '油淋茄子');
INSERT INTO `orderdetail` VALUES (0, 1373190049, 1, '干锅包菜    ');
INSERT INTO `orderdetail` VALUES (0, 1373190049, 1, '丝瓜炒鸡蛋');
INSERT INTO `orderdetail` VALUES (0, 1373190049, 1, '西红柿炒鸡蛋');
INSERT INTO `orderdetail` VALUES (0, 1373190049, 1, '酸菜鱼');
INSERT INTO `orderdetail` VALUES (0, 1373190049, 1, '肉末涨蛋');
INSERT INTO `orderdetail` VALUES (0, 1373333315, 1, '干锅包菜    ');
INSERT INTO `orderdetail` VALUES (0, 1373333315, 1, '韭菜炒鸡蛋');
INSERT INTO `orderdetail` VALUES (0, 1373333315, 1, '韭菜豆腐丝');
INSERT INTO `orderdetail` VALUES (0, 1373333315, 1, '麻婆豆腐   ');
INSERT INTO `orderdetail` VALUES (0, 1373333315, 1, '油淋茄子');
INSERT INTO `orderdetail` VALUES (0, 1373333315, 1, '青炒土豆丝');
INSERT INTO `orderdetail` VALUES (0, 1373333315, 1, '豇豆炒肉');
INSERT INTO `orderdetail` VALUES (0, 1373333315, 1, '鱼香茄子');
INSERT INTO `orderdetail` VALUES (0, 1373333519, 1, '韭菜炒鸡蛋');
INSERT INTO `orderdetail` VALUES (0, 1373333519, 1, '韭菜豆腐丝');
INSERT INTO `orderdetail` VALUES (0, 1373333519, 1, '干锅包菜    ');
INSERT INTO `orderdetail` VALUES (0, 1373333519, 1, '麻婆豆腐   ');
INSERT INTO `orderdetail` VALUES (0, 1373333519, 1, '油淋茄子');
INSERT INTO `orderdetail` VALUES (0, 1373333519, 1, '青炒土豆丝 ');
INSERT INTO `orderdetail` VALUES (0, 1373333519, 1, '豇豆炒肉');
INSERT INTO `orderdetail` VALUES (0, 1373333519, 1, '鱼香茄子');
INSERT INTO `orderdetail` VALUES (0, 1373333955, 1, '干锅包菜    ');
INSERT INTO `orderdetail` VALUES (0, 1373333955, 1, '丝瓜炒鸡蛋');
INSERT INTO `orderdetail` VALUES (0, 1373333955, 1, '干煸四季豆');
INSERT INTO `orderdetail` VALUES (0, 1373333955, 1, '西红柿炒鸡蛋');
INSERT INTO `orderdetail` VALUES (0, 1373333955, 1, '酸菜鱼');
INSERT INTO `orderdetail` VALUES (0, 1373333955, 1, '肉末涨蛋');
INSERT INTO `orderdetail` VALUES (0, 1373334211, 1, '干锅包菜    ');
INSERT INTO `orderdetail` VALUES (0, 1373334211, 1, '丝瓜炒鸡蛋');
INSERT INTO `orderdetail` VALUES (0, 1373334211, 1, '干煸四季豆');
INSERT INTO `orderdetail` VALUES (0, 1373334211, 1, '西红柿炒鸡蛋');
INSERT INTO `orderdetail` VALUES (0, 1373334211, 1, '酸菜鱼');
INSERT INTO `orderdetail` VALUES (0, 1373334211, 1, '肉末涨蛋');
INSERT INTO `orderdetail` VALUES (0, 1373334573, 1, '干锅包菜    ');
INSERT INTO `orderdetail` VALUES (0, 1373334573, 1, '丝瓜炒鸡蛋');
INSERT INTO `orderdetail` VALUES (0, 1373334573, 1, '干煸四季豆');
INSERT INTO `orderdetail` VALUES (0, 1373334573, 1, '西红柿炒鸡蛋');
INSERT INTO `orderdetail` VALUES (0, 1373334573, 1, '酸菜鱼');
INSERT INTO `orderdetail` VALUES (0, 1373334573, 1, '肉末涨蛋');
INSERT INTO `orderdetail` VALUES (0, 1373335380, 1, '豇豆炒肉');
INSERT INTO `orderdetail` VALUES (0, 1373335380, 1, '韭菜炒鸡蛋');
INSERT INTO `orderdetail` VALUES (0, 1373335380, 1, '雪菜香干炒肉丝');
INSERT INTO `orderdetail` VALUES (0, 1373335380, 1, '丝瓜炒鸡蛋');
INSERT INTO `orderdetail` VALUES (0, 1373335380, 1, '青炒土豆丝');
INSERT INTO `orderdetail` VALUES (0, 1373335380, 1, '木须肉');
INSERT INTO `orderdetail` VALUES (0, 1373335380, 1, '油淋茄子');
INSERT INTO `orderdetail` VALUES (0, 1373345710, 1, '油淋茄子');
INSERT INTO `orderdetail` VALUES (0, 1373345710, 1, '木须肉');
INSERT INTO `orderdetail` VALUES (0, 1373345710, 1, '青炒土豆丝 ');
INSERT INTO `orderdetail` VALUES (0, 1373345710, 1, '丝瓜炒鸡蛋');
INSERT INTO `orderdetail` VALUES (0, 1373345710, 1, '韭菜炒鸡蛋');
INSERT INTO `orderdetail` VALUES (0, 1373345710, 1, '豇豆炒肉');
INSERT INTO `orderdetail` VALUES (0, 1373345710, 1, '肉末涨蛋');
INSERT INTO `orderdetail` VALUES (0, 1373424156, 1, '青椒香干炒肉');
INSERT INTO `orderdetail` VALUES (0, 1373424156, 1, '木须肉');
INSERT INTO `orderdetail` VALUES (0, 1373424156, 1, '豇豆炒肉');
INSERT INTO `orderdetail` VALUES (0, 1373424156, 1, '香菇青菜');
INSERT INTO `orderdetail` VALUES (0, 1373424156, 1, '干锅包菜    ');
INSERT INTO `orderdetail` VALUES (0, 1373424156, 1, '油淋茄子');
INSERT INTO `orderdetail` VALUES (0, 1373424156, 1, '青炒土豆丝 ');
INSERT INTO `orderdetail` VALUES (0, 1373514275, 1, '豇豆炒肉');
INSERT INTO `orderdetail` VALUES (0, 1373514275, 1, '雪菜香干炒肉丝');
INSERT INTO `orderdetail` VALUES (0, 1373514275, 1, '香菇青菜');
INSERT INTO `orderdetail` VALUES (0, 1373514275, 1, '韭菜炒鸡蛋');
INSERT INTO `orderdetail` VALUES (0, 1373514275, 1, '青炒土豆丝');
INSERT INTO `orderdetail` VALUES (0, 1373514275, 1, '油淋茄子');
INSERT INTO `orderdetail` VALUES (0, 1373514275, 1, '木须肉');
INSERT INTO `orderdetail` VALUES (0, 1373595552, 1, '木须肉');
INSERT INTO `orderdetail` VALUES (0, 1373595552, 1, '回锅肉');
INSERT INTO `orderdetail` VALUES (0, 1373595552, 1, '油淋茄子');
INSERT INTO `orderdetail` VALUES (0, 1373595552, 1, '香菇青菜');
INSERT INTO `orderdetail` VALUES (0, 1373595552, 1, '丝瓜炒鸡蛋');
INSERT INTO `orderdetail` VALUES (0, 1373595552, 1, '青炒土豆丝');
INSERT INTO `orderdetail` VALUES (0, 1373595552, 1, '豇豆炒肉');

-- --------------------------------------------------------

-- 
-- 表的结构 `orderlist`
-- 

CREATE TABLE `orderlist` (
  `pnum` int(5) NOT NULL default '0',
  `dnum` int(5) NOT NULL default '0',
  `time0` int(20) NOT NULL default '0',
  `place` varchar(10) NOT NULL default '0',
  `id` int(10) NOT NULL default '0',
  `sum` int(10) NOT NULL default '0',
  KEY `id` (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='每次订单的基础信息';

-- 
-- 导出表中的数据 `orderlist`
-- 

INSERT INTO `orderlist` VALUES (10, 7, 1373424156, '利佳餐馆', 0, 82);
INSERT INTO `orderlist` VALUES (10, 7, 1373335380, '利佳餐馆', 0, 78);
INSERT INTO `orderlist` VALUES (10, 7, 1373595552, '利佳餐馆', 0, 82);
INSERT INTO `orderlist` VALUES (10, 7, 1373514275, '利佳餐馆', 0, 76);
