var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PinSchema = new Schema ({

	locationName: String,
	coordinates:{longitude: Number , latitude: Number},
	dateTimeCreated: {type:Date, default: Date.now()},
	averageRating: Number ,
	share: Boolean,
	groupId: Number
});

var Pin = mongoose.model ('Pin', PinSchema);

module.exports = Pin;