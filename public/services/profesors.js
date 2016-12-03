// js/services/assitants.js
angular.module('profesorsService', [])

    // super simple service
    // each function returns a promise object 
    .factory('Profesors', function ($http) {
        return {
            getProfesors: function () {
                return $http.get('/profesores');
            },

            createProfesor: function (newProfesor) {
                return $http.post('/newProfesor', newProfesor);
            },

            deleteProfesor: function (id) {
                return $http.delete('/delete/' + id);
            }
        }
    });