myApp.controller('cyclesCtrl', function($scope,$state, DataService) {

 $scope.brandArray = [];
 $scope.countDisplay = 0 ;
    $scope.priceSlider = {
        minValue: 1513,
        maxValue: 3700,
        options: {
            floor: 1513,
            ceil: 3700
        }
    }

    var allData = [];

    var brand = ['hero', 'hercules'];

    $scope.brands = brand;
    
    $scope.increaseCount = function(){
       // console.log('increasing count');
        countDisplay++ ;
    }

    DataService.getAllCycles().then(function(response) {


       allData = response;

        $scope.allCycles = response;

    })



      $scope.priceRange = function(item) {
        return (item.price >= $scope.priceSlider.minValue && item.price <= $scope.priceSlider.maxValue);
    }
 $scope.viewDetails = function(destination) {
        DataService.setDescription(destination,'cycles');
        $state.go('descCycles');
    }

});




myApp.filter('customFilterCycle', function() {
    return function(data, brand) {
        return data.filter(function(data) {
            if (brand[0] || brand[1] ) {
                for (var i in data) {
                    if (brand.indexOf(data.brand) != -1) {
                        return true;
                    }
                }
                return false;
            } else {
               
                return true;
            }
        });
    };
});