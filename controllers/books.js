// Controller for /book route
const Book = require('../model/Book');
const { capitalize } = require('../lib/helper');

exports.get_all_books = async (_req, res) => {
	try {
		const data = await Book.find({});
		res.status(200).send(data);
	} catch (error) {
		res.status(404);
	}
};

exports.get_book_by_name = async (req, res) => {
	// console.log(req.params.name);
	try {
		const data = await Book.find({
			name: capitalize(req.params.name),
		});
		if (data.length) {
			res.status(200).send(data);
		} else {
			res.status(404).send('Book Not Found');
		}
	} catch (error) {
		res.status(404).send('Something went wrong');
	}
};

exports.get_book_by_author = async (req, res) => {
	// console.log(req.params.name);
	try {
		const data = await Book.find({
			author: capitalize(req.params.author),
		});
		if (data.length) {
			res.status(200).send(data);
		} else {
			res.status(404).send('Book Not Found');
		}
	} catch (error) {
		res.status(404).send('Something went wrong');
	}
};

exports.create_book = async (req, res) => {
	data = req.body;
	const book = new Book({
		name: capitalize(data.name),
		author: capitalize(data.author),
		imgUrl: data.imgUrl,
		pages: data.pages,
		price: data.price,
	});
	try {
		const status = await book.save();
		// console.log(status);
		res.status(201).send(`Book ${capitalize(data.name)} Added Succesfully`);
	} catch (error) {
		res.status(400).end(error);
	}
};

exports.update_book_with_name = async (req, res) => {
	try {
		const key = req.params.key;
		const toUpdate = req.body;

		const result = await Book.findOneAndUpdate(
			key,
			{ $set: toUpdate },
			{ useFindAndModify: false }
		);

		if (result.length != 0) {
			// console.log(key1);
			res.status(200).send(`Book with name ${key} updated`);
		} else {
			res.status(404).send();
		}
	} catch (error) {
		res.status(404).end('Something went wrong');
	}
};

exports.delete_book_by_name = async (req, res) => {
	try {
		const toDelete = req.params.name;
		const result = await Book.deleteOne({ name: toDelete });

		if (result.deletedCount > 0) {
			res.status(200).send(`Book, ${toDelete} deleted successfully`);
		} else {
			res.status(404).send('Book Not Found');
		}
	} catch (e) {
		res.status(404).send();
		console.log(e);
	}
};
