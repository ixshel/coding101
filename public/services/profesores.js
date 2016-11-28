angular.module('profesoresService', [])
.factory('Profesores', function ($http) {
    return{
      get: function(){
        return $http.get('/profesores');
         // create: function (todoData) {
            //     return $http.post('/api/todos', todoData);
            // },
            // delete: function (id) {
            //     return $http.delete('/api/todos/' + id);
            // }
      },
    }
  });