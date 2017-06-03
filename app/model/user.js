var mongoose = require('mongoose');

module.exports = mongoose.model('user', {
	name: {
		type: String
	},
	email: {
		type: String
	},
	password: {
		type: String
	}
});
