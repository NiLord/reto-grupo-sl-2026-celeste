create database maquina;

use maquina;

create table Productos (
	producto_id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    precio DECIMAL(10,2) NOT NULL,
    cantidad INT NOT NULL
);

create table Denominaciones (
	denominacion_id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    valor DECIMAL(10,2) NOT NULL
);

create table Bandeja (
	bandeja_id INT AUTO_INCREMENT PRIMARY KEY,
    cantidad INT NOT NULL,
    denominacion INT NOT NULL,
    FOREIGN KEY (denominacion) REFERENCES Denominaciones(denominacion_id)
);

insert into Productos (nombre, precio, cantidad)
values 
("agua 500ml", 1.50, 14),
("gaseosa 350ml", 2.50, 8),
("snack salado", 3.00, 21),
("chocolate", 2.50, 9),
("galletas", 2.25, 14),
("jugo", 2.00, 1),
("gomitas", 1.00, 22),
("chicle", 1.50, 19),
("energizante", 2.50, 4);

insert into Denominaciones (nombre, valor)
values
("1.00",1),
("5.00",5),
("10.00",10),
("20.00",20),
("50.00",50),
("0.50",0.50),
("0.25",0.25),
("0.10",0.10),
("0.05",0.05);

insert into Bandeja (cantidad, denominacion)
values
(40,1),
(5,2),
(3,3),
(2,4),
(1,5),
(60,6),
(80,7),
(100,8),
(100,9);