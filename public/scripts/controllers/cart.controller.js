myApp.controller('cartCtrl', function($scope, $state, $stateParams, DataService) {



    var allData = [];


$scope.selectedData = function(all){
        $scope.displayData = [];
            $scope.amount = 0;
       $scope.selected = DataService.getCartData();
       if(all){
              for(var k in all){
            for(let i = 0 ; i < all[k].length ; i++){
                      if($scope.selected[all[k][i].uid]){
                       $scope.amount += ( $scope.selected[all[k][i].uid].count * all[k][i].price );
                  
                        $scope.displayData.push(all[k][i]);
                      }
            }
          }
       }
        
}

$scope.loadCart = function() {

        DataService.getAllData().then(function(data) {
             allData = data ;
             $scope.selectedData(data);
        })


}

$scope.removeItem = function(id) {

//console.log('in removeItem');
DataService.removeFromCart(id);
$scope.selectedData(allData);

}

$scope.decreaseCount = function(id){
    $scope.selected[id].count-- ;
    if($scope.selected[id].count){   

     DataService.updateCartData(id,$scope.selected[id].count); 
     $scope.selectedData(allData);

    }else{
        $scope.selected[id].count++ ;
    }
    }

$scope.increaseCount = function(id){
    $scope.selected[id].count++ ;
    if($scope.selected[id].count > 5){
            $scope.selected[id].count-- ;   
    }
    else{
     DataService.updateCartData(id,$scope.selected[id].count); 
     $scope.selectedData(allData);
    }
    }

$scope.updateQuantity = function(id){
        if($scope.selected[id].count < 6 && $scope.selected[id].count > 0){
            DataService.updateCartData(id,$scope.selected[id].count); 
            $scope.selectedData(allData);
        }
        else{
            alert('Quantity selected is not correct');
            
            $scope.selectedData(allData);
        }
    }

$scope.goToHome = function(){
  $state.go('homeState');
}

})
