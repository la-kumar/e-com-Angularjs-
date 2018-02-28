myApp.controller('electronicsCtrl', function($scope, $state, $stateParams, DataService) {


   $scope.brandArray = [];

    $scope.priceSlider = {
        minValue: 7990,
        maxValue: 67300,
        options: {
            floor: 7990,
            ceil: 67300
        }
    }

    var allData = [];

    var brand = ['samsung', 'apple', 'htc'];

    $scope.brands = brand;



    $scope.displayAllData = function() {

        DataService.getAllElectronics().then(function(response) {

            allData = response;
            //console.log(allData);
            $scope.allElectronics = response;

        })
    }

    $scope.priceRange = function(item) {
        return (item.price >= $scope.priceSlider.minValue && item.price <= $scope.priceSlider.maxValue);
    }

    $scope.viewDetails = function(destination) {
        DataService.setDescription(destination,'electronics');
        $state.go('descElectronics');
    }
});



myApp.filter('customFilterEle', function() {
    return function(data, brand) {
        return data.filter(function(data) {
            //console.log(brand);
            if (brand[0] || brand[1] || brand[2]) {
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