myApp.service('DataService',function($http,$q) {
	
  var  descriptionPage = [] ;    
  var cartPage = [] ;

this.getAllData = function() {
         
     var deferred = $q.defer();

    $http.get('assets/data.json').then(function (response) {
       // console.log(response.data.electronics);
        deferred.resolve(response.data);
    });

     return deferred.promise;
  }

	this.getAllElectronics = function() {
         
     var deferred = $q.defer();

		$http.get('assets/data.json').then(function (response) {
       // console.log(response.data.electronics);
        deferred.resolve(response.data.electronics);
    });

     return deferred.promise;
	}

    this.getAllAdds = function() {
         
        var deferred = $q.defer();

        $http.get('assets/data.json').then(function (response) {
        console.log(response.data.adds);
        deferred.resolve(response.data.adds);
    });

     return deferred.promise;
    }

	this.getAllFashion = function() {
         
        var deferred = $q.defer();
		$http.get('assets/data.json').then(function (response) {
       // console.log(response.data.electronics);
        deferred.resolve(response.data.fashion);
    });

     return deferred.promise;
	}

	this.getAllCycles = function() {
         
        var deferred = $q.defer();

		$http.get('assets/data.json').then(function (response) {
        console.log(response.data.cycles);
        deferred.resolve(response.data.cycles);
    });

     return deferred.promise;
	}

    this.getAllSports = function() {
         
        var deferred = $q.defer();

        $http.get('assets/data.json').then(function (response) {
       // console.log(response.data.cycles);
        deferred.resolve(response.data.sports);
    });

     return deferred.promise;
    }
/*-----------------------earliew setElectronicsDescription-------------------------------------------*/
    this.setDescription = function(id,type) {
       console.log(id);
       console.log(type);
       localStorage.setItem(type,id);
     }
  /*----------------earliew getElectronicsDescription------------------------------*/
     this.getDescription = function(type) {
         console.log(type);
        return (localStorage.getItem(type));  
     }

     this.addItemToCart = function(uid,type){
        var cart = {} ;
        if(localStorage.getItem('cart')){
       cart = JSON.parse(localStorage.getItem('cart'));
       //console.log(cart);
       if(cart[uid]){

       }
       else
       {
        cart[uid] = {count:1 , category: type} ;
       }
      }
          cart[uid] = {count:1 , category: type}  ;
         
         localStorage.setItem('cart',JSON.stringify(cart));
    }

    this.getCartData = function(){
        

       if(localStorage.getItem('cart')){
         return  JSON.parse(localStorage.getItem('cart'));
        
       }
    
    }

    this.removeFromCart = function(id){
      if(localStorage.getItem('cart')){
           let temp = JSON.parse(localStorage.getItem('cart'));
           //console.log(temp[id]);
           delete temp[id] ;
           localStorage.setItem('cart',JSON.stringify(temp));
      }
    }

    this.updateCartData = function(id,count){
      let temp = JSON.parse(localStorage.getItem('cart'));
      temp[id].count = count ;
      localStorage.setItem('cart',JSON.stringify(temp));
    }

});

