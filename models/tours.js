const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const toursSchema = new Schema({
	city: { type: String, required: true },
	state: { type: String, required: true },
	country: { type: String, required: true }
});

const Tours = mongoose.model("Tours", toursSchema);

module.exports