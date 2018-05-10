angular.module("CraiTpp")
.factory("LibroResource",function($resource){
    return $resource("http://localhost:3010/api/libro/:cod",{cod: "@cod"},{update: {method: "PUT",   isArray: true}});
})
.factory("PersonaResource",function($resource){
        return $resource("http://localhost:3010/api/persona/:cod",{cod: "@cod"},{update: {method: "PUT"}});
})
.factory("PostResource",function($resource){
    return $resource("http://jsonplaceholder.typicode.com/posts/:cod",{cod: "@cod"},{update: {method: "PUT"}});
})
.factory("PrestamosResource",function($resource){
    return $resource("http://localhost:3010/api/prestamo/:cod",{cod: "@cod"},{update: {method: "PUT"}});
})
