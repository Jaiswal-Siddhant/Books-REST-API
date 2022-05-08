const jwt = require('jsonwebtoken');

// Authorization Header: auth-token <jwt_token>
function authenticate(req, res, next) {
	if (!req.header('auth-token')) {
		return res.status(401).send('Access Denied');
	}

	try {
		const verify = jwt.verify(req.header('auth-token'), process.env.SECRET);
		req.user = verify;
		next();
	} catch (error) {
		res.status(400).send('Invalid Token');
	}
}

module.exports = authenticate;
