// Instantiate the Bootstrap carousel

myApp.controller('homeCtrl', function($scope,$state,DataService) {

  

    $scope.myInterval = 13000;

    var slideElectronics = [];
   
    $scope.viewAll = function(where) {
        $state.go(where);
    }

    $scope.getSecondIndex = function(index) {
        // if (index - slide.length >= 0)
        //     return index - slide.length;
        // else
        //     return index;
        if(index >= slideElectronics.length){
            index = index-slideElectronics.length ;
        }
        return index  ;
    }

    $scope.getSecondIndex1 = function(index) {
        // if (index - slide.length >= 0)
        //     return index - slide.length;
        // else
        //     return index;
        if(index >= slideFashion.length){
            index = index-slideFashion.length ;
        }
        return index  ;
    }
     

    DataService.getAllElectronics().then(function(data) {
        slideElectronics = data;
       // console.log(slideElectronics);
        $scope.slidesMobiles = slideElectronics;
    });

        DataService.getAllAdds().then(function(data) {
        $scope.adds = data;
       // console.log($scope.adds);
    });

        DataService.getAllFashion().then(function(data) {
        slideFashion = data;
      //  console.log(slideFashion);
        $scope.slidesClothes = slideFashion;
    });

        DataService.getAllCycles().then(function(data) {
        slideCycle = data;
     //   console.log(slideCycle);
        $scope.slidesCycles = slideCycle;
    });
        DataService.getAllSports().then(function(data) {
        slideSport = data;
//      console.log(slideSport);
        $scope.slidesSports = slideSport;
    });



$scope.descriptionStateElectronics = function(destination) {
    DataService.setDescription(destination,'electronics');
    $state.go('descElectronics');
}
$scope.descriptionStateFashion = function(destination) {
    DataService.setDescription(destination,'fashion');
    $state.go('descFashion');
}
$scope.descriptionStateSports = function(destination) {
    DataService.setDescription(destination,'sports');
    $state.go('descSports');
}
$scope.descriptionStateCycles = function(destination) {
   
    DataService.setDescription(destination,'cycles');
    $state.go('descCycles');
}



});


