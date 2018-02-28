var myApp = angular.module('gemCart', ['ui.router','rzModule','ui.bootstrap']);


myApp.config(function($stateProvider, $locationProvider, $urlRouterProvider) {

    $stateProvider.state("homeState", {
            url: "/",
            templateUrl: "views/home.view.html",
            controller: "homeCtrl"
        })
        .state('electronicsState', {
            url: "/electronics",
            templateUrl: 'views/electronics.view.html',
            controller: 'electronicsCtrl'
        })
        .state('fashionState', {
            url: "/fashion",
            templateUrl: 'views/fashion.view.html',
            controller: "fashionCtrl"
        })
        .state('cyclesState', {
            url: "/cycles",
            templateUrl: "views/cycles.view.html",
            controller: "cyclesCtrl"
        })
        .state('sportsState', {
            url: "/sports",
            templateUrl: "views/sports.view.html",
            controller: "sportsCtrl"
        })
        .state('cartState', {
            url: "/cart",
            templateUrl: "views/cart.view.html",
            controller: "cartCtrl"
        })
        .state('descElectronics', {
            url: "/electronics-description",
            templateUrl: "views/descriptionElectronics.view.html",
            controller: "descriptionElectronicsCtrl"
        })
        .state('descFashion', {
            url: "/fashion-description",
            templateUrl: "views/descriptionFashion.view.html",
            controller: "descriptionFashionCtrl"
        })
        .state('descSports', {
            url: "/sports-description",
            templateUrl: "views/descriptionSports.view.html",
            controller: "descriptionSportsCtrl"
        })
        .state('descCycles', {
            url: "/cycles-description",
            templateUrl: "views/descriptionCycles.view.html",
            controller: "descriptionCycleCtrl"
        })
           .state('adminState', {
            url: "/admin",
            templateUrl: "views/admin.view.html",
            controller: "adminCtrl"
        })


});



myApp.controller('indexCtrl', ['$scope', '$state', function($scope, $state) {

    $scope.initFunction = function() {
        $state.go('homeState');
    }

}]);

