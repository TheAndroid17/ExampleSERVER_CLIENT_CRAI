angular.module("CraiTpp",["lumx","ngRoute","ngResource"])
.config(function($routeProvider){
    $routeProvider
        .when("/",{
            controller: "MainController",
            templateUrl: "templates/home.html"
        })
        .when("/libro/:cod",{
            controller: "LibroController",
            templateUrl: "templates/libro.html"
        })
        .when("/newlibro",{
            controller: "NewLibroController",
            templateUrl: "templates/libro_form.html"
        })
        .when("/editLibro/:cod",{
            controller: "LibroController",
            templateUrl: "templates/libro_form.html"
        })
		.when("/persona/:cod",{
            controller: "PersonaController",
            templateUrl: "templates/persona.html"
        })
        .when("/newpersona",{
            controller: "NewPersonaController",
            templateUrl: "templates/persona_form.html"
        })
        .when("/editpersona/:cod",{
            controller: "PersonaController",
            templateUrl: "templates/persona_form.html"
        })
        .when("/prestamo/:cod",{
            controller: "PrestamoController",
            templateUrl: "templates/prestamo.html"
        })
        .when("/editprestamo/:cod",{
            controller: "PrestamoController",
            templateUrl: "templates/prestamo_form.html"
        });

});
