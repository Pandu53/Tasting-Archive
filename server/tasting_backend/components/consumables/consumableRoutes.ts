var express = require("express");
var router = express.Router();
var controller = require('./consumableController.ts')
var auth = require('../../authentification/authentification.ts')

//-------------GET--------------------------

//retunrs a list of all whiskeys
router.get('/', controller.all_consumables);

// returns data for one specific whiskey
router.get('/id/:id', controller.consumable_by_id);

// returns list of whiskeys  
router.get('/search/:searchPhrase', controller.consumable_search);
router.get('/search/', controller.all_consumables);

//returns all whiskeys related to an specific tasting
router.get('/tasting/:tastingId',controller.consumables_by_tasting);

//--------------POST-------------------------

//saves a new Whiskey to the database
router.post('/', auth.checkAuth , controller.save_consumable);

module.exports =  router; 