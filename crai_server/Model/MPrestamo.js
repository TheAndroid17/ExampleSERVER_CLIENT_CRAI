'use strict'
var Sequelize = require('sequelize');
var cx = require('../Config/connectDB.js');
var registro_prestamo = cx.sequelize.define('registro_prestamo', {
    id_prestamo: {
		primaryKey:true,
		type:Sequelize.INTEGER,
		autoIncrement:true
	},
    fecha_entrega: Sequelize.STRING,
    fecha_salida: Sequelize.STRING,
    id_libro: Sequelize.INTEGER,
    id_persona: Sequelize.INTEGER,
    nombre_persona: Sequelize.STRING,
    dni: Sequelize.STRING,
    codigo_universitario: Sequelize.STRING,
    nombre_libro: Sequelize.STRING,
    autor: Sequelize.STRING,
    anio: Sequelize.STRING,
    editorial: Sequelize.STRING,
    rama: Sequelize.STRING,
    estado: Sequelize.STRING,
    nombre_estado: Sequelize.STRING
});
module.exports.registro_prestamo = registro_prestamo;

exports.prestamo = cx.sequelize.define('prestamo', {
    id_prestamo: {
		primaryKey:true,
		type:Sequelize.INTEGER,
		autoIncrement:true
	},
    fecha_entrega: Sequelize.STRING,
    fecha_salida: Sequelize.STRING,
    id_libro: Sequelize.INTEGER,
    id_persona: Sequelize.INTEGER,
    estado:Sequelize.STRING
});
