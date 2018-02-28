var service = require('./service');
var q = require('q');

module.exports.addDataAdmin = function(dataToAdd) {
    console.log("addDataAdmin() of controler");
    //console.log(dataToAdd);
	service.addData(dataToAdd) ;
}


// module.exports.getFunc = function() {

// 	var deferred = q.defer();
//     console.log("getFunc of servercontroler");
//     serverService.formGetService().then(function(temp) {
//    // console.log("temp in controller");
//   //  console.log(temp);
//     //return temp ;
//        deferred.resolve(temp);
//     },function(err) {
//     	console.log("error "+err);
//     }) ;
   
//     return deferred.promise ;
   

// }