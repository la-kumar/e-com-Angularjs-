var models = require('./models');
var q = require('q');
module.exports.addData = function(dataToAdd) {


 console.log("addData() in Service");
 console.log(dataToAdd);
 
console.log("++++++++++++++++++++++models below +++++++++++++++++++++++++++++");


 var instance = new models({});

 console.log(typeof(models));
 console.log(instance.mobile);
 
// instance.findOneAndUpdate(
//    { _id: '5a844e7f64e39566f8d244ba' },
//    { $push: { mobile: {
//         name: dataToAdd.name,
//         brand: dataToAdd.brand,
//         image: Buffer,
//         price: dataToAdd.price,
//         screen: dataToAdd.screen,
//         processor: dataToAdd.processor,
//         os: dataToAdd.os,
//         battery: dataToAdd.battery,
//         camera: dataToAdd.camera,
//         ram: dataToAdd.ram,
//         rom: dataToAdd.rom,
//         warrenty: dataToAdd.warrenty,
//         color: dataToAdd.color,
//         desc: dataToAdd.desc
//     } } },function (err, doc) {
//     // doc contains the modified document

//   console.log(err);
//   console.log(doc);

// // }
// ) ;
 
/* 
db.students.update(
   { _id: 1 },
   { $push: { scores: 89 } }
)

MyModel.findOneAndUpdate({_id: 1}, {$inc: {count: 1}}, {new: true}, function (err, doc) {
    // doc contains the modified document
});

Tank.update({ _id: id }, { $set: { size: 'large' }}, callback);

  instance.save(function(err) {
   if (err) throw err;

   console.log('data saved successfully!');

 });

 models.create(dataToAdd,function(err,data) {
 	console.log(err);
    console.log(data);
 })
*/
}


// module.exports.formGetService = function() {

//  var deferred = q.defer();
   
//  console.log("formGETService of serverService");
// myDatabase.find({}, function(err,data) {
//  //console.log(err);
//  console.log("service to get data from db");
// // console.log(data);
//  deferred.resolve(data);
//   });

//  return deferred.promise ;
//  // console.log(dataObtained);
//   //return dataObtained ;
// }