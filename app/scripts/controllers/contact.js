'use strict';

/**
 * @ngdoc function
 * @name angularSeedApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularSeedApp
 */
angular.module('angularSeedApp')
    .controller('ContactCtrl', function($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });
