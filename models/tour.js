const mongoose = require('mongoose');
const slugify = require('slugify');

const tourSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, 'A title is required for a tour'],
		unique: true
	},
	description: String,
	itenerary: [{
		day: Number,
		location: String,
		details: String
	}],
	startLocation: {
		type: String,
		required: [true, 'A tour must have a start location']
	},
	price: {
		type: Number,
		required: [true, 'A tour must have a price']
	},
	slug: {
		type: String,
		unique: true
	},
	createdOn: {
		type: Date,
		default: Date.now()
	},
	lastEdited: {
		type: Date,
		default: Date.now()
	},
	createdBy: {
		type: mongoose.Schema.ObjectId,
		ref:'User',
		required: [true, 'A tour must be created by a user']
	}
});

tourSchema.pre('save', function(next) {
	this.slug = slugify(this.title, { lower: true });
	next();
});

tourSchema.pre(/^find/, function(next) {
	this.populate({ path: 'createdBy' });
	next();
})

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;

