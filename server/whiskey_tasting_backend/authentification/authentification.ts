import { decode } from "querystring";
const jwt = require('jsonwebtoken');
import { sha256 } from 'js-sha256';
var select = require('../database/select.ts');


exports.checkAuth = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.SALT);
        const userId = decodedToken.userid;
        if (req.body.userId && req.body.userid !== userId) {
            throw 'Invalid user ID';
        } else {
            next();
        }
    } catch (error) {
        res.status(401).json({
            error: new Error('Invalid request!')
        });
    }
}

exports.login = (req, res, next) => {
    try {
        const userName: string = req.body.body.user;
        const password: string = req.body.body.password + process.env.PEPPER;
        const hashedPassword: string = sha256(password);
        console.log(userName + "  " + password);
        select.isUserInDb(userName, hashedPassword, (error, results, fields) => {

            if (results.length > 0) {
                const token = jwt.sign({ 'userId': results[0].id }, process.env.SALT, { expiresIn: '1h' });
                res.status(200).send(JSON.stringify({ 'token': token, 'userId': results[0].id }));
            } else {
                res.status(401).json({
                    error: new Error('Login Failed')
                });
            }
        });
    } catch (error) {
        res.status(401).json({
            error: new Error('Login Failed')
        });
    }
}