'use strict'
var mpersona= require('../Model/MPersona.js');

exports.createPersona = function(req, res){
    mpersona.persona.create({
         id_persona: "",
    nombre: req.body.data.nombre,
    app_paterno: req.body.data.app_paterno,
    app_materno: req.body.data.app_materno,
    dni: req.body.data.dni,
    codigo_universitario: req.body.data.codigo_universitario
    });
    res.status(200).send(req.body.data);
}

var readPersona = function(req,res){
  return mpersona.persona.findAll().then(function(result){
      res.status(200).send(result)
  },function(err){
     res.send(err);
  }) ;
}

module.exports.readPersona = readPersona;

exports.updatePersona = function (req, res){
    mpersona.persona.update({
    nombre: req.body.data.nombre,
    app_paterno: req.body.data.app_paterno,
    app_materno: req.body.data.app_materno,
    dni: req.body.data.dni,
    codigo_universitario: req.body.data.codigo_universitario
    },{
        where: {id_persona: req.params.id_persona}
    });
    res.status(200).send(req.body.data);
}

exports.deletePersona = function (req, res){
    console.log("llegue delete");
    mpersona.persona.destroy({
        where: {
        id_persona: req.params.id_persona
        }
    });
     return  readPersona(req, res);
}

exports.findOnePersona = function(req, res) {
    var id_persona = req.params.id_persona;
    return mpersona.persona.findById(id_persona).then(function(result){
         res.status(200).send(result)
        //if(result) res.status(200).send({message:'encontrado'});
        }, function(err){
        res.send(err);
    });
}
