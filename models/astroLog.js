var mongoose = require('mongoose'),
 Schema = mongoose.Schema;

var AstroLogSchema = new Schema({
	
	comments: String,
	name: String
 });

var AstroLog = mongoose.model('AstroLog', AstroLogSchema);
module.exports = AstroLog;






 