// js/services/assitants.js
angular.module('assistantsService', [])

    // super simple service
    // each function returns a promise object 
    .factory('Assistants', function ($http) {
        return {
            get: function () {
                return $http.get('/assistants');
            },
            create: function (newAssistants) {
                return $http.post('/assistants', newAssistants);
            },
            delete: function (id) {
                console.log(id);
                return $http.delete('/delete/' + id);
            },
            edit: function (editAssistants) {
                return $http.put('/edit/', editAssistants);
            }

        }
    });