const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const toursSchema = new Schema({
	title: { type: String, required: true },
	duration: { type: String, required: true },
	location: { type: String, required: true },
	date: String,
	price: Number,
	details: String,
	itinerary: String,
	image: String
});

const Tours = mongoose.model("Tours", toursSchema);

module.exports