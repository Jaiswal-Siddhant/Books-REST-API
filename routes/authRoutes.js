const router = require('express').Router();
const jwt = require('jsonwebtoken');

// route: host/login
// Type: Open
// Method: GET
// Route Info: pass user and pass with request body. Returns JWT token
router.get('/login', (req, res) => {
	if (req.body.user === 'admin' && req.body.pass === 'admin') {
		// res.send('Logged In');
		const token = jwt.sign('admin', process.env.SECRET);
		res.header('auth-token', token).send(token);
	} else {
		res.status(403).end('Invalid user or password');
	}
});

module.exports = router;
