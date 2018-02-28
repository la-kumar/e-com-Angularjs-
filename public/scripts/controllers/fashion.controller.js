myApp.controller('fashionCtrl', function($scope,$state,$stateParams,DataService) {

var allData = [] ;


   $scope.genderArray = [];

    $scope.priceSlider = {
        minValue: 479,
        maxValue: 2159,
        options: {
            floor: 479,
            ceil: 2159
        }
    }

    var gender = ['male', 'female'];

    $scope.genders = gender;


$scope.displayData = function(){

DataService.getAllFashion().then(function(response) {

allData = response ;
$scope.allFashion = response ;
//console.log($scope.allFashion);
})
}

$scope.priceRange = function(item) {
        return (item.price >= $scope.priceSlider.minValue && item.price <= $scope.priceSlider.maxValue);
    }

    $scope.viewDetails = function(destination) {
        DataService.setDescription(destination,'fashion');
        $state.go('descFashion');
    }

})



myApp.filter('customFilterFashion', function() {
    return function(data, gender) {
        return data.filter(function(data) {
            if (gender[0] || gender[1] ) {
                for (var i in data) {
                    if (gender.indexOf(data.gender) != -1) {
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