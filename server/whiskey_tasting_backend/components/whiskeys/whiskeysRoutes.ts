var express = require("express");
var router = express.Router();
var controller = require('./whiskeyController.ts')

//retunrs a list of all whiskeys
router.get('/', controller.all_whiskeys);

// returns data for one specific whiskey
router.get('/id/:id', controller.whiskey_by_id);

// returns list of whiskeys  
router.get('/search/:searchPhrase', controller.whiskey_search);

//returns all whiskeys related to an specific tasting
router.get('/tasting/:tastingId',controller.whiskeys_by_tasting);


module.exports =  router; 