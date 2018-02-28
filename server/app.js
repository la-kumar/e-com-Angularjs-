var express = require('express');
var app = express();
var path = require('path');

var router = require('./routes');

var server = app.listen(5555, function (err){
	if(err){ console.log(err); }
	else {
  var host = server.address().address;
  var port = server.address().port;
  console.log('gem-cart app listening at http://%s:%s', host, port);
}
});

var staticPath = path.join(__dirname , '../public');


app.use(express.static(staticPath));

app.use('/',router);


