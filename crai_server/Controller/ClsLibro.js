'use strict'
var mlibro= require('../Model/MLibro.js');

exports.createLibro = function(req, res){
    mlibro.libro.create({
        id_libro: "",
        nombre: req.body.data.nombre,
        editorial: req.body.data.editorial,
        autor: req.body.data.autor,
        anio: req.body.data.anio,
        rama: req.body.data.rama
    });
   //return readLibro(req, res);
   res.status(200).send(req.body.data);
}

var readLibro = function(req,res){
  return mlibro.libro.findAll().then(function(result){
      res.status(200).send(result)
  },function(err){
     res.send(err);
  }) ;
}
module.exports.readLibro = readLibro;

exports.updateLibro = function (req, res){
    mlibro.libro.update({
    nombre: req.body.data.nombre,
    editorial: req.body.data.editorial,
    autor: req.body.data.autor,
    anio: req.body.data.anio,
    rama: req.body.data.rama
    },{
        where: {id_libro: req.params.id_libro}
    });
    res.status(200).send(req.body.data);
}

exports.deleteLibro = function (req, res){
    console.log("delete libro exitoso");
    mlibro.libro.destroy({
        where: {
        id_libro: req.params.id_libro
        }
    });
     return readLibro(req, res);
}

exports.findOneLibro = function(req, res) {
    var id_libro = req.params.id_libro;
    return mlibro.libro.findById(id_libro).then(function(result) {
             res.status(200).send(result)
        //if(result) res.status(200).send({message:'encontrado'});
        }, function(err){
        res.send(err);
    });
}
