'use strict'
var Sequelize = require('sequelize');
var sequelize = new Sequelize('crai', 'postgres', 'system',{
    dialect: "postgres",
    port: 5432,
    define: {
        timestamps: false,
        freezeTableName: true
    },
    pool:{
        maxConnections: 5,
        maxIdleTime:30
    },
    language: 'es'
});

module.exports.sequelize=sequelize;