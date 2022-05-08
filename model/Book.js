const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		min: 4,
	},
	imgUrl: {
		type: String,
		required: true,
	},
	author: {
		type: String,
		required: true,
		min: 3,
	},
	pages: {
		type: Number,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
});

module.exports = mongoose.model('Book', bookSchema);
