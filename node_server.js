var http = require('http');
var express = require('express');
var MongoClient = require('mongoose');
var bodyParser = require('body-parser');
var db = MongoClient.createConnection('mongodb://localhost/test', { useNewUrlParser: true });
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(8900, '0.0.0.0');
var Schema = MongoClient.Schema;
var collection = new Schema({
    pitanje: String,
    odgovor1: String,
    odgovor2: String,
    odgovor3: String,
    odgovor4: String,
    tacanOdgovor: Number
});

app.post('/insert', function(req, res, next) {
    insertData(req.body);
    sendResponse(res, req.body);

});
app.get('/all', function(req, res) {
    vratiSve(res);
});

function insertData(data) {
    //console.log(data);
    db.collection('pitanjcee', collection).insertOne(data);
}

function sendResponse(res, data) {
    //console.log(data);
    res.write(JSON.stringify(data));
    res.end();
}

function vratiSve(res) {
    var dbFind = [];
    db.collection('pitanjcee').find().toArray((err, data) => {
        for (let x in data) {
            dbFind.push(data[x]);
        }
        var resData = JSON.stringify(dbFind);
        res.write(resData);
        res.end();
    });
}


// var collect = db.createCollection('nekakol', {
//     pitanje: String,
//     odgovor1: String,
//     odgovor2: String,
//     odgovor3: String,
//     odgovor4: String,
//     tacanOdgovor: Number
// });