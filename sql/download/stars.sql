-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Фев 09 2020 г., 11:08
-- Версия сервера: 10.4.11-MariaDB
-- Версия PHP: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `home_task_1`
--

-- --------------------------------------------------------

--
-- Структура таблицы `stars`
--

CREATE TABLE `stars` (
  `id` int(2) NOT NULL,
  `name` varchar(10) DEFAULT NULL,
  `place` varchar(15) DEFAULT NULL,
  `id_phones` int(2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `stars`
--

INSERT INTO `stars` (`id`, `name`, `place`, `id_phones`) VALUES
(1, 'kate', 'berlin', 4),
(2, 'james', 'london', NULL),
(3, 'homer', 'springfield', 6),
(4, 'adriano', 'rome', 1),
(5, 'hillary', 'new york', 1),
(6, 'vera', 'poltava', 5),
(7, 'tina', 'kiev', 3),
(8, 'leonardo', 'los angeles', 2);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `stars`
--
ALTER TABLE `stars`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `stars`
--
ALTER TABLE `stars`
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
