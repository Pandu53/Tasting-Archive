var express = require("express");
var router = express.Router();
var controller = require('./loginController.ts')

//requests jwt-Token
router.post('/', controller.login);

module.exports =  router; 