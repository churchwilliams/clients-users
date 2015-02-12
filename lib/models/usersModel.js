var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var schema = new Schema({
	name: {type: String, required: true},
	email: {type: String, required: true, uniqueness: true},
	addresses: [{
		address: {type: String, uniqueness: true},
		city: {type: String, uppercase: true},
		state: {type: String, uppercase: true},
		zip: {type: String,},
}],
		age: {type: Number, required: true, min: 13},
});

module.exports = Mongoose.model('User', schema);