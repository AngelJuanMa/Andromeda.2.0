'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = Schema({
		name: String,
		nick: String,
		email: String,
		password: String,
		description: String,
		role: String,
		created_at: String,
		image: String,
		politics: Boolean
});

module.exports = mongoose.model('User', UserSchema);