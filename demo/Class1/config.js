var fs = require('fs');
var json = require('jsonfile');
var path = require('path');

exports.getSettingsFile = function () {

    var sf = path.join(__dirname, "config.json");
    if (fs.existsSync(sf)) {
        return JSON.parse(fs.readFileSync(sf, 'utf8'));
    }
    else {
        fs.writeFileSync(sf,JSON.stringify(Settings, null, 2),'utf8');
        return JSON.parse(fs.readFileSync(sf, 'utf8'));

    }
}

var Settings = {
    username : "ilia",
    password : "ilia1234",
    endpoint : "@ds125273.mlab.com:25273/nodejs-course"

}
