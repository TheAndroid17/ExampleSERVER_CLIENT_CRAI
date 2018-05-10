'use strict'
var mprestamo= require('../Model/MPrestamo.js');

exports.createPrestamo = function(req, res){
    mprestamo.prestamo.create({
    id_prestamo: "",
    id_persona: req.body.data.id_persona,
    id_libro: req.body.data.id_libro,
    fecha_salida: req.body.data.fecha_salida,
    fecha_entrega: req.body.data.fecha_entrega,
    estado: req.body.data.estado
    });
    //res.send(200, "Los datos se han guardado")
    return readPrestamo(req,res);
}

var readPrestamo = function(req,res){
  return mprestamo.registro_prestamo.findAll().then(function(result){
      res.status(200).send(result)
  },function(err){
     res.send(err);
  }) ;
}
module.exports.readPrestamo = readPrestamo;

exports.updatePrestamo = function (req, res){
    mprestamo.prestamo.update({
    id_persona: req.body.data.id_persona,
    id_libro: req.body.data.id_libro,
    fecha_salida: req.body.data.fecha_salida,
    fecha_entrega: req.body.data.fecha_entrega,
    estado: req.body.data.estado
  },{
        where: {id_prestamo: req.params.id_prestamo}
    });
    //res.send(200, "Los datos se han actualizado")
    return readPrestamo(req,res);
}

exports.deletePrestamo = function (req, res){
    console.log("llegue delete");
     mprestamo.prestamo.destroy({
        where: {
        id_prestamo: req.params.id_prestamo
        }
    });
    res.status(200).send("eliminado");
}

exports.findOnePrestamo = function(req, res) {
    var id_persona = req.params.id_persona;
    return mprestamo.registro_prestamo.findById(id_persona).then(function(result) {
         res.status(200).send(result)
        //if(result) res.status(200).send({message:'encontrado'});
        }, function(err){
        res.send(500, err);
    });
}
