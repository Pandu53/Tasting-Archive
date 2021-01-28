import { decode } from "querystring";

const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.SALT);
        const userId = decodedToken.userid;
        if (req.body.userId && req.body.userid !== userId) {
            throw 'Invalif user ID';
        } else {
            next();
        }
    } catch (error) {
        res.status(401).json({
            error: new Error('Invalid request!')
        });
    }
}