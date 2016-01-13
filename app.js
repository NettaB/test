
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){
  $routeProvider

  
  .when('/about', {
    templateUrl: 'about.html',
    controller: 'aboutCtrl'
  })
  
    .when('/contact', {
    templateUrl: 'contact.html',
    controller: 'contactCtrl'
  })
}])

myApp.controller('homeCtrl',['$scope', function($scope){
  $scope.hello = "It\'s alive!";
}]);

myApp.controller('aboutCtrl', ['$scope', function($scope){
  
}]);

myApp.controller('contactCtrl', ['$scope', function($scope){
  
}]);
