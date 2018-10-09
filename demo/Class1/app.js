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
        console.log('got \'im! HA!');
    });
}
function CreateUser() {
   
}
function ChangeUser() {
   
}
function DeleteUser() {
   
}
function GetUsers() {
    app.get('/', function (res, req) {
        console.log('got \'im! HA!');
    });
}

function StartServicesAndConnect() {
    console.log(`connecting to: mongodb://${conf.username}:${conf.password}${conf.endpoint}`);
    db.connect(`mongodb://${conf.username}:${conf.password}${conf.endpoint}`, { useNewUrlParser: true });

    app.listen(conf.port, function () {
        console.log(`Running on port ${conf.port}...`);
    });
}
