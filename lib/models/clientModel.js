var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var schema = new Schema({
	name: {type: String, required: true},
	value: {type: Number, required: true},
	contract_length_years: {type: Number, required: true}
});

module.exports = Mongoose.model('Client', schema);

