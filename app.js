(function (){
  'use strict';

  var myApp = angular.module('myFirstApp', [])
    .controller('myFirstController', function($scope) {
    $scope.name="Evelyn";
    $scope.sayYourName = function(){
      return "my name is Evelyn";
    };
  });
})();
