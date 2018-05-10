angular.module("CraiTpp")
/*
.directive("buscaLibro",function(){
    function link(scope,element,attrs){
        $(element).autocomplete({
            source: scope[attrs.buscaLibro],
            select: function(ev,ui){
                ev.preventDefault();
                if(ui.item){
                    $scope.optionSelected(ui.item.value);
                }
            },
            focus: function(ev,ui){
                ev.preventDefault();
                $(this).val(ui.item.label);
            }
        });
    };
    return {
        link: link
    };
})
*/
.controller("MainController",["$scope","PersonaResource","LibroResource","PrestamosResource","$http",function($scope,PersonaResource,LibroResource,PrestamosResource,$http){
    $scope.libros = LibroResource.query();
    $scope.personas = PersonaResource.query();
    $scope.prestamos = PrestamosResource.query();
    $scope.newPrestamo = {};
    var f = new Date();
    var dd = f.getDate();
    var mm = f.getMonth()+1;
    var yyyy = f.getFullYear();

    if(dd<10){
        dd = '0'+dd;
    }

    if(mm<10){
        mm = '0'+mm;
    }
    var fecha = dd+'/'+mm+'/'+yyyy;


    $scope.addLibro = function(lib){
        $scope.newPrestamo.id_libro = lib.id_libro;
        $scope.newPrestamo.nombre_libro = lib.nombre;
        $scope.newPrestamo.autor = lib.autor;
        $scope.newPrestamo.fecha_salida = fecha;
    }

    $scope.add_persona = function(per){
        $scope.newPrestamo.id_persona = per.id_persona;
        $scope.newPrestamo.nombre_persona = per.nombre+' '+per.app_paterno+' '+per.app_materno;
        $scope.newPrestamo.cod_univ = per.codigo_universitario;
        $scope.newPrestamo.estado = "0";
    }
    console.log("Hola Mundo");
    $scope.removeLibro = function(librito){
        console.log(librito);
        $http.delete("http://localhost:3010/api/libro/"+librito.id_libro)
        .then(
            function(response){
                $scope.libros = response.data;
           },
           function(response){
               console.log("ocurrio un error al eliminar el libro");
           }
        );
    }

    $scope.savePrestamo = function(){
        $http.post("http://localhost:3010/api/prestamo/", {data:$scope.newPrestamo})
           .then(
               function(response){
                   $scope.newPrestamo = {};
                   console.log(response.data);
                   $scope.prestamos = response.data;
               },
               function(response){
                 // failure callback
               }
            );
    }


}])
.controller("LibroController",["$scope","LibroResource","$routeParams","$http",function($scope,LibroResource,$routeParams,$http){
    $scope.libro = LibroResource.get({cod: $routeParams.cod});
    $scope.titulo = "Datos Libro";
    $scope.saveLibro = function(){
        //console.log("dentro de la funcion saveLibro antes de hacer rest full");
        $http.put("http://localhost:3010/api/libro/"+$scope.libro.id_libro, {data:$scope.libro})
           .then(
               function(response){
                   //console.log("dentro de la respuesta correcta");
                   //console.log(response);
                 location.href = "#/" ;
               },
               function(response){
                  // console.log("dentro de la respuesta errada");
                  // console.log(response);
               }
            );
    }
}])
.controller("NewLibroController",["$scope","LibroResource",function($scope,LibroResource){
    $scope.libro = {};
    $scope.titulo = "Agregar Libro";
    $scope.saveLibro = function(){
        LibroResource.save({data:$scope.libro}, function(data){
            if(data.$resolved){
                console.log(data);
                location.href = "#/" ;
                //console.log("Se agrego correctamente");
            }else{
                //console.log("Error al eliminar");
            }
        });
    }
}])

.controller("PersonaController",["$scope","PersonaResource","$routeParams","$http",function($scope,PersonaResource,$routeParams,$http){
    $scope.persona = PersonaResource.get({cod: $routeParams.cod});
	//console.log($scope.persona);
    $scope.titulo = "Datos Persona";
    $scope.savePersona = function(){
        $http.put("http://localhost:3010/api/persona/"+$scope.persona.id_persona, {data:$scope.persona})
           .then(
               function(response){
                   //console.log("dentro de la respuesta correcta");
                   //console.log(response);
                 location.href = "#/" ;
               },
               function(response){
                  // console.log("dentro de la respuesta errada");
                  // console.log(response);
               }
            );
    }
}])
.controller("NewPersonaController",["$scope","PersonaResource",function($scope,PersonaResource){
    $scope.persona = {};
    $scope.titulo = "Agregar Persona";
    $scope.savePersona = function(){
        PersonaResource.save({data: $scope.persona}, function(data){
            if(data.$resolved){
                console.log("Se agrego correctamente Persona");
                 location.href = "#/" ;

            }else{
                console.log("Error al eliminar");
            }
        });
    }
}])

.controller("PrestamoController",["$scope","PrestamosResource","$http","$routeParams",function($scope,PrestamosResource,$http,$routeParams){
    $scope.prestamo = PrestamosResource.get({cod: $routeParams.cod});
    $scope.updatePrestamo = function(){
        $http.put("http://localhost:3010/api/prestamo/"+$scope.prestamo.id_prestamo, {data:$scope.prestamo})
           .then(
               function(response){
                   //console.log("dentro de la respuesta correcta");
                   //console.log(response);
                 location.href = "#/" ;
               },
               function(response){
                  // console.log("dentro de la respuesta errada");
                  // console.log(response);
               }
            );
    }
    $scope.removePrestamo = function(){
        $http.delete("http://localhost:3010/api/prestamo/"+$scope.prestamo.id_prestamo)
        .then(
            function(response){
                console.log("hola estoy eliminado");
                location.href = "#/";
           },
           function(response){
               console.log("ocurrio un error al eliminar el prestamo");
           }
        );
    }

}])
;
