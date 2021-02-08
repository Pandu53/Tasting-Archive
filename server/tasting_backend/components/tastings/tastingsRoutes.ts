var express = require("express");
var router = express.Router();
var controller = require('./tastingController.ts')

//gibt aller Tastings zurück
router.get('/', controller.all_tastings);

//gibt das tasting mit einer bestimmten ID zurück
router.get('/id/:id', (req,res) => {
    res.send('NOT IMPLEMENTED YET');
});

//gibnt das tatsing von einem bestimmten Datum zurück ( dd-mm-yy )
router.get('/date/:date', controller.tasting_by_date );
router.get('/date/', controller.all_tastings );

module.exports =  router; 