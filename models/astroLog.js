var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var AstroLogSchema = new Schema({
	logID: String
	userID: String
	date: Date
	time: Date
	weather: Object	
	visibility: Number
	rating: Number
	viewing tool: String
	comments: String
 });

var AstroLog = mongoose.model('AstroLog', AstroLogSchema);
module.exports = AstroLog;




 