//mongodb://ilia:ilia1234@ds125273.mlab.com:25273/nodejs-course
var mongoose = require('mongoose');
var Schemea = mongoose.Schema;
UserScema = new Schemea({
    username:String,
    password:String,
    phone:Number,
    city:String
});

module.exports = mongoose.model('user',UserScema);

