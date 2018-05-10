'use strict'
var Sequelize = require('sequelize');
var cx = require('../Config/connectDB.js');

var libro = cx.sequelize.define('libro', {
    id_libro: {
		    primaryKey:true,
		    type:Sequelize.INTEGER,
		    autoIncrement:true
	},
    nombre: Sequelize.STRING,
    editorial: Sequelize.STRING,
    autor: Sequelize.STRING,
    anio: Sequelize.STRING,
    rama: Sequelize.STRING
});

module.exports.libro = libro;
