
CREATE OR REPLACE TABLE `Contactos` (
  `Id` int(11) NOT NULL,
  `Nombre` varchar(100) NOT NULL,
  `Apellidos` varchar(100) NOT NULL,
  `FechaNac` Date,
  `Foto` BLOB
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE OR REPLACE TABLE `Telefonos` (
  `Id` int(11) NOT NULL,
  `Numero` varchar(9) NOT NULL,
  `Tipo` ENUM ('Casa', 'Móvil','Oficina', 'Otro') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE OR REPLACE TABLE `Correos` (
  `Id` int(11) NOT NULL,
  `Correo` varchar(50) NOT NULL,
  `Tipo` ENUM ('Personal', 'Trabajo') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


  ALTER TABLE `Contactos`
  ADD PRIMARY KEY (`Id`);

  ALTER TABLE `Contactos`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;


  ALTER TABLE `Telefonos`
  ADD PRIMARY KEY (`Numero`);

  ALTER TABLE `Correos`
  ADD PRIMARY KEY (`Correo`);

  ALTER TABLE `Telefonos`
  ADD CONSTRAINT `Telefonos_fk_1` FOREIGN KEY (`Id`) REFERENCES `Contactos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
  
  ALTER TABLE `Correos`
  ADD CONSTRAINT `Correos_fk_1` FOREIGN KEY (`Id`) REFERENCES `Contactos` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE;
  
INSERT INTO contactos ( nombre, Apellidos, FechaNac, Foto) VALUES
("Javier","Fernández Montoro", "1980-03-21", LOAD_FILE("C:/images.jpg")),
("Estela", "Hernández de la Fuente", "1979-03-15", LOAD_FILE("C:/images.jpg")),
("Gloria", "Ruiz Sánchez", "1983-10-01",LOAD_FILE("C:/images.jpg") ),
("Fermín", "Córdoba Moreno", NULL, LOAD_FILE("C:/images.jpg"));

INSERT INTO telefonos (id, numero, tipo) VALUES
(1, "606320123", "Móvil"),
(2, "680200100", "Móvil"),
(1, "916140583", "Casa"),
(4, "916151032", "Oficina");

INSERT INTO correos (id, correo, tipo) VALUES
(1, "androx80@hotmail.com", "Personal"),
(3, "gloria.martinez@atm.es", "Trabajo"),
(1, "javier.fernandez@gmail.com", "Trabajo"),
(1, "jfm@telefonica.es", "Trabajo"),
(2, "wall_es@yahoo.es", "Personal");


