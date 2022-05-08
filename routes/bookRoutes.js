const router = require('express').Router();
const authenticate = require('../middlewares/verifyToken');
const booksController = require('../controllers/books');

// Route: host/book/
// Type: Protected
// Method: GET
// Route info: GET all books
router.get('/', authenticate, booksController.get_all_books);

// Route: host/book/findByName/<book_name>
// Type: Protected
// Method: GET
// Route Info: Find book by Book name
router.get('/findByName/:name', authenticate, booksController.get_book_by_name);

// Route: host/book/findByAuthor/<author_name>
// Type: Protected
// Method: GET
// Route Info: Find book by Author
router.get(
	'/findByAuthor/:author',
	authenticate,
	booksController.get_book_by_author
);

// Route: host/book/create
// Type: Protected
// Method: POST
// Route Info: Create Book
router.post('/create', authenticate, booksController.create_book);

// Route: host/book/<book_name>
// Type: Protected
// Method: PATCH
// Route Info: Update book with name
router.patch('/:key', authenticate, booksController.update_book_with_name);

// Route: host/book/<book_name>
// Type: Protected
// Method: DELETE
// Route Info: Delete book with name
router.delete('/:name', authenticate, booksController.delete_book_by_name);

module.exports = router;
