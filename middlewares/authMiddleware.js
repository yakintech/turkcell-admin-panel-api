const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    try {
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({ message: 'No token, authorization denied' });
        }

        const decoded = jwt.verify(token, "my_secret_key");
        req.user = decoded.user;
        console.log("decoded", decoded)
        next();
    } catch (err) {
        res.status(401).json({ message: 'Token is not valid' });
    }
};


module.exports = authMiddleware;