var rx = require('rxjs');
var express = require('express');
var db = require('mongoose');
var bp = require('body-parser');
var setfile = require('./config.js');
var userModel = require('./userModel');

var conf = setfile.getSettingsFile();
var app = express();

Start();

function Start() {
    SetupInfrastructure();
    SetupAPI();
    StartServicesAndConnect();

}
function SetupInfrastructure() {
    app.use('/assets', express.static(__dirname + '/public'));
    console.log(__dirname + '/public');
    app.use(bp.urlencoded({ "extended": true }));
    app.use(bp.json());
}

function SetupAPI() {
    GetUsers();
    CreateUser();
    ChangeUser();
    DeleteUser();
}
function GetUsers() {
    app.get('/', function (res, req) {
        
    });
}
function CreateUser() {
   app.post('/create', (req, res) => {
    let requestJson = req.body;
    console.log(requestJson);
    let newItem = new userModel(requestJson);
    newItem.save(function (err, item) {
    if (err) {
    console.log(err);

    return next(err);
    }
    res.json({item});
    });
   });
}

function ChangeUser() {
   
}
function DeleteUser() {
   
}
function GetUsers() {
    app.get('/getUsers',function (req, res, next) {
        userModel.find({})
        .then(function (data)
        {
        res.json(data);
        }, function (err) {
        next(err)
        });
       });
}

function StartServicesAndConnect() {
    console.log(`connecting to: mongodb://${conf.username}:${conf.password}${conf.endpoint}`);
    db.connect(`mongodb://${conf.username}:${conf.password}${conf.endpoint}`, { useNewUrlParser: true });

    app.listen(conf.port, function () {
        console.log(`Running on port ${conf.port}...`);
    });
}
