const jwt = require('jsonwebtoken');

module.exports = function auth(req, res, next) {
    const token = req.header('authToken');
    if (!token) return res.status(401).send('Access Denied');

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = jwt.verify;
        next();
    } catch (err) {
        res.status(400).send('Invalid Token');
    }
};