const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const toursSchema = new Schema({
	title: { type: String, required: true },
	duration: { type: String, required: true },

	date: { type: String, required: true },
	price: { type: Number, required: true },
	details: { type: String, required: true },
	itinerary: { type: String, required: true },
	image: { type: String, required: true }
});

const Tours = mongoose.model("Tours", toursSchema);

module.exports