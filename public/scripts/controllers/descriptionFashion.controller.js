myApp.controller('descriptionFashionCtrl', function($scope,$state,$stateParams,DataService) {


DataService.getAllFashion().then(function(response) {

id = DataService.getDescription('fashion');


for(var i = 0 ; i < response.length ; i++){

if(response[i].uid == id){
	$scope.item = response[i];
	//console.log($scope.item);
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
	DataService.addItemToCart($scope.item.uid,'fashion') ;
	$state.go('cartState');
}

})