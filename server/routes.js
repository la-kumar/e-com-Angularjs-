var express = require('express');
//var controller = require('./controller');
var url = require('url');
var bodyParser = require('body-parser');
var q = require('q');

var router = express.Router();
router.use(bodyParser.json());

router.get('/',function(req,res) {
   console.log("home");
  res.sendFile(staticPath+'/index.html');	
});

module.exports = router ;
