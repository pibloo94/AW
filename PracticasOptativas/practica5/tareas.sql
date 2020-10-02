SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Base de datos: `tareas`
-- 

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tag`
--

CREATE OR REPLACE TABLE `tag` (
  `taskId` int(11) NOT NULL,
  `tag` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `task`
--

CREATE  OR REPLACE TABLE `task` (
  `id` int(11) NOT NULL,
  `user` varchar(100) NOT NULL,
  `text` text NOT NULL,
  `done` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE  OR REPLACE TABLE `user` (
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `img` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tag`
--
ALTER TABLE `tag`
  ADD PRIMARY KEY (`taskId`,`tag`);

--
-- Indices de la tabla `task`
--
ALTER TABLE `task`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user` (`user`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `task`
--
ALTER TABLE `task`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `tag`
--
ALTER TABLE `tag`
  ADD CONSTRAINT `tag_ibfk_1` FOREIGN KEY (`taskId`) REFERENCES `task` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `task`
--
ALTER TABLE `task`
  ADD CONSTRAINT `task_ibfk_1` FOREIGN KEY (`user`) REFERENCES `user` (`email`) ON DELETE CASCADE ON UPDATE CASCADE;


--
-- Insercciones tabla `user`
--
INSERT INTO `user` (`email`, `password`, `img`) VALUES ('usuario@ucm.es', '1234', 'practica5\\profile_imgs\\profile_logo.png');
INSERT INTO `user` (`email`, `password`, `img`) VALUES ('nuevo@ucm.es', '1234', 'practica5\\profile_imgs\\friend.png');
INSERT INTO `user` (`email`, `password`, `img`) VALUES ('prueba@ucm.es', '1234', NULL);

--
-- Insercciones tabla `task`
--
INSERT INTO `task` (`id`, `user`, `text`, `done`) VALUES ('1', 'usuario@ucm.es', 'PREPARAR PRACTICA AW', '0');
INSERT INTO `task` (`id`, `user`, `text`, `done`) VALUES ('2', 'usuario@ucm.es', 'MIRAR FECHAS CONGRESO', '1');
INSERT INTO `task` (`id`, `user`, `text`, `done`) VALUES ('3', 'usuario@ucm.es', 'IR AL SUPERMERCADO', '0');
INSERT INTO `task` (`id`, `user`, `text`, `done`) VALUES ('4', 'usuario@ucm.es', 'MUDANZA', '0');

--
-- Insercciones tabla `tag`
--
INSERT INTO `tag` (`taskId`, `tag`) VALUES ('1', 'AW');
INSERT INTO `tag` (`taskId`, `tag`) VALUES ('1', 'PRACTICA');
INSERT INTO `tag` (`taskId`, `tag`) VALUES ('3', 'PERSONAL');
INSERT INTO `tag` (`taskId`, `tag`) VALUES ('4', 'PERSONAL');

COMMIT;
