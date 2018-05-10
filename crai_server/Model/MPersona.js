'use strict'
var Sequelize = require('sequelize');
var cx = require('../Config/connectDB.js');

var persona = cx.sequelize.define('persona', {
    id_persona: {
		primaryKey:true,
		type:Sequelize.INTEGER,
		autoIncrement:true
	},
    nombre: Sequelize.STRING,
    app_paterno: Sequelize.STRING,
    app_materno: Sequelize.STRING,
    dni: Sequelize.STRING,
    codigo_universitario: Sequelize.STRING
});

module.exports.persona = persona;
