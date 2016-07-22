var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/space_be_what_it_do");




module.exports.AstroLog = require('./astroLog');
module.exports.Pin = require('./pin');
module.exports.Apod = require('./apod');

