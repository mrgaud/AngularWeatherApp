angular.module('myApp').controller('appCtrl',function($scope, appSrvc){
    $scope.getWeather = function(zip){
        event.preventDefault();
        $scope.weatherData = appSrvc.getWeather(zip).then(function(response){
            console.log(response);
            $scope.weatherData = response.data
        })
    }
    $scope.getWeather(95383);
})
