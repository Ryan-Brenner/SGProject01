var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/space_be_what_it_do");

var AstroLog= require('./astroLog');

module.exports.AstroLog = AstroLog;

