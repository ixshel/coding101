// js/services/assitants.js
angular.module('assistantsService', [])

    // super simple service
    // each function returns a promise object 
    .factory('Assitants', function ($http) {
        return {
            get: function () {
                return $http.get('/assistants');
            },
            // create: function (todoData) {
            //     return $http.post('/api/todos', todoData);
            // },
            // delete: function (id) {
            //     return $http.delete('/api/todos/' + id);
            // }
        }
    });