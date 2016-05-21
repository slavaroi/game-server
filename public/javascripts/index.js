var app = angular.module('mysite', ['ngResource', 'ngRoute']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'partials/home.html',
            controller:'HomeCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);

app.controller('HomeCtrl', ['$scope', '$resource',
    function($scope, $resource){
      var player = document.getElementById('player');

      var Videos = $resource('/api/images');
       Videos.query(function(images){
           $scope.images = images;

           $scope.play = function(src){
             var flag = parseInt(Math.random() * 10);
             if (flag >=7){
               src= 'chinhow';
             }
             player.setAttribute('src','sounds/' + src + '.m4a');
             player.currentTime = 0;
             player.play();
           };
       });
    }]);
