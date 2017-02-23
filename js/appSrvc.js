angular.module('myApp').service('appSrvc',function($http){
    this.getWeather = function(zip){
        return $http({
            method:"GET",
            url:"http://api.openweathermap.org/data/2.5/weather?zip="+zip+",us&appid=2edf39f8fc8ce9a73b31166143c5fa9a&units=imperial"
        })
    }
})
