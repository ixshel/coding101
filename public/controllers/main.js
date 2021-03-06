// js/controllers/main.js

angular.module('assistantsController', [])

    .controller('mainController', function ($scope, Assitants) {

        getAssistants();

        function getAssistants() {
            Assitants.get()
                .success(function (data) {
                    $scope.assistants = data;
                })
                .error(function (error) {
                    $scope.status = 'Error...';
                })
        }

        $scope.new = function (newCourse) {
            Assitants.create(newCourse)
                .success(function () {
                    getAssistants();
                    $scope.course = {};
                })
                .error(function (error) {
                    $scope.status = 'something is wrong you dont create anything...' + error.message;
                })
        }

        $scope.remove = function (id) {
            console.log('id of item to remove...', id);
            Assitants.delete(id)
                .success(function () {
                    getAssistants();
                })
                .error(function (err) {
                    console.log('not working...');
                })
        }

        $scope.edit = function (index) {
            $scope.oldData = $scope.assistants[index];
        }

        $scope.save = function (newData) {
            Assitants.edit(newData)
                .success(function () {
                    getAssistants();
                    $scope.oldData = {};
                })
                .error(function (err) {
                    console.log('Err', err);
                })

        }

    });