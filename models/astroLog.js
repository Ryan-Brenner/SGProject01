var mongoose = require("mongoose");
	 Schema = mongoose.Schema;

var AstroLogSchema = new Schema({
	logGroupId: { type: Number , default: 1 },//pin id
	userId: String,
	date: { type: Date, default: Date.now()},
	weather: Object,	
	visibility: Number,
	rating: Number,
	viewing_tool: String,
	comments: String
 });

var AstroLog = mongoose.model('AstroLog', AstroLogSchema);
module.exports = AstroLog;




 