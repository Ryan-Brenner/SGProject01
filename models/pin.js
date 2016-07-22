var mongoose = require('mongoose'),
var Schema = mongoose.Schema;

var PinSchema = new Schema ({

	locationName: String,
	coordinates:{longitude: Number , latitude: Number},
	date_created: Date
	time created: {type:Date, default: newTime() },
	averagerating: Number 
	share: Boolean,
	groupId: Number
});

var Pin = mongoose.model ('Pin', PinSchema);

module.exports = Pin;