'use strict';

let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/e-comDatabase', function(err) {
    if (err) {
        console.log("cant connect to formDatabase");
        throw err;
    } else {
        console.log("connection established with db");
    }
});


var websiteSchema = new mongoose.Schema({

    mobile: [{
        name: String,
        brand: String,
        image: Buffer,
        price: Number,
        screen: Number,
        processor: String,
        os: String,
        battery: String,
        camera: String,
        ram: String,
        rom: String,
        warrenty: String,
        color: String,
        desc: String
    }],

    laptop: [{
        name: String,
        desc: String,
        image: Buffer,
        price: Number,
        brand: String,
        screen: Number,
        processor: String,
        os: String,
        ram: String,
        rom: String,
        warrenty: String,
        color: String
      }],

    tv: [{
    	name: String,
    	brand: String,
    	price: Number,
    	screen: Number,
    	os: String,
    	warrenty: String,
    	color: String,
    	desc: String,
    	image: Buffer
    }],
    
    speaker: [{
    	name: String,
    	brand: String,
    	price: Number,
    	warrenty: String,
    	color: String,
    	desc: String,
    	image: Buffer
    }],

    headphone: [{
    	name: String,
    	brand: String,
    	price: Number,
    	cableLength: Number,
    	warrenty: String,
    	color: String,
    	desc: String,
    	image: Buffer
    }]

});



var itemModel = mongoose.model('itemModel',websiteSchema);

module.exports = itemModel ;