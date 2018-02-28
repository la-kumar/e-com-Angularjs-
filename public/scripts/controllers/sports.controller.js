myApp.controller('sportsCtrl', function($scope,$state,DataService) {

   $scope.sportArray = [];

    $scope.priceSlider = {
        minValue: 272,
        maxValue: 2729,
        options: {
            floor: 272,
            ceil: 2729
        }
    }

    var sport = ['cricket', 'football', 'tennis'];

    $scope.sports = sport;


DataService.getAllSports().then(function(response) {

//console.log(response);

$scope.allSports = response ;

})

 $scope.viewDetails = function(destination) {
        DataService.setDescription(destination,'sports');
        $state.go('descSports');
    }

    $scope.priceRange = function(item) {
        return (item.price >= $scope.priceSlider.minValue && item.price <= $scope.priceSlider.maxValue);
    }


})


myApp.filter('customFilterSport', function() {
    return function(data, sport) {
        return data.filter(function(data) {
            if (sport[0] || sport[1] || sport[2]) {
                for (var i in data) {
                    if (sport.indexOf(data.sport) != -1) {
                        return true;
                    }
                }
                return false;
            } else {
                return true;
            }
        });
    };
})