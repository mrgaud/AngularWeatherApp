angular.module('myApp').controller('appCtrl', function($scope, appSrvc) {
    $scope.getWeather = function(zip) {
        event.preventDefault();
        $scope.weatherData = appSrvc.getWeather(zip).then(function(response) {
            console.log(response);
            $scope.weatherData = response.data
        })
    }
    $scope.getLocalWeather = function(lat, lon){
        appSrvc.getLocalWeather(lat,lon).then(function(result){
            $scope.weatherData = result.data
        })
    }
    $scope.lat;
    $scope.lon;
    $scope.location = navigator.geolocation.getCurrentPosition(function(position) {
        console.log(position);
        var counter = setInterval(function() {
            if (position) {
                clearInterval(counter)
                $scope.lat=position.coords.latitude;
                $scope.lon=position.coords.longitude;
                $scope.getLocalWeather($scope.lat,$scope.lon)
            }
        },500)
    });
})
