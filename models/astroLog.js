var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var AstroLogSchema = new Schema({
	logId: String
	logGroupId: String //pin id
	userId: String
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




 