var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AstroLogSchema = new Schema({
	name: String,
	comments: String
 });

var AstroLog = mongoose.model('AstroLog', AstroLogSchema);
module.exports = AstroLog;






 