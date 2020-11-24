const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'A name is required to create an account']
	},
	email: {
		type: String,
		required: [true, 'An email address is required to created an account'],
		unique: [true, 'An account with this email address already exists']
	},
	password: {
		type: String,
		required: [true, ' A password is required'],
		minlength: 8,
		select: false
	},
	registeredOn: {
		type: Date,
		default: Date.now()
	}
});

userSchema.pre('save', async function(next) {
	this.password = await bcrypt.hash(this.password, 12);
	next();
});

userSchema.methods.isPasswordCorrect = async function(canditate, actual) {
	
	return await bcrypt.compare(canditate, actual);

};

const User = mongoose.model('User', userSchema);

module.exports = User;