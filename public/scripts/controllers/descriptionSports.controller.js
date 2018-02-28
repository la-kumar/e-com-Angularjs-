myApp.controller('descriptionSportsCtrl', function($scope,$state,$stateParams,DataService) {
 
 //console.log("sports controller");

DataService.getAllSports().then(function(response) {

id = DataService.getDescription('sports');

//console.log(id);
//console.log(response);

for(var i = 0 ; i < response.length ; i++){

if(response[i].uid == id){
	$scope.item = response[i];

	$scope.main = $scope.item.image[0];
	break ;
}

}

})


$scope.changeMainImage = function(index) {

$scope.main = $scope.item.image[index];

}


$scope.addToCart = function(){
	//console.log($scope.item.uid);
	DataService.addItemToCart($scope.item.uid,'sports') ;
	$state.go('cartState');
}

})