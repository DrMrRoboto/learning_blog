var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var index = require('./routes/index');
var path = require('path');
//var mongodb = require("mongodb");
//
//var ObjectID = mongodb.ObjectID;
//var CONTACTS_COLLECTION = "contacts";
//
//var db;

var mongoURI = 'mongodb://BenMargis:12Bongresin78!@ds013456.mlab.com:13456/dev_goals';

app.use(express.static(path.join(__dirname, '/public')));

 //Connect to the database before starting the application server.
mongodb.MongoClient.connect(process.env.MONGODB_URI, function (err, database) {
    if (err) {
        console.log(err);
        process.exit(1);
    }
});

// Save database object from the callback for reuse.
//db = database;
//console.log("Database connection ready");



var server = app.listen(process.env.PORT || 3000, function(){
    var port = server.address().port;
    console.log('Listening on port: ', port);
});



app.use(bodyParser.json());
app.use('/', index);
module.exports = app;