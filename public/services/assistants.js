// js/services/assitants.js
angular.module('assistantsService', [])

    // super simple service
    // each function returns a promise object 
    .factory('Assitants', function ($http) {
        return {
            get: function () {
                return $http.get('/assistants');
            },

            create: function (newCourse) {
                return $http.post('/newAssistant', newCourse);
            },

            edit: function (newData) {
                return $http.put('/edit/', newData);
            },
            
            delete: function (id) {
                return $http.delete('/delete/' + id);
            }
        }
    });