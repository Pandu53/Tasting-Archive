var express = require("express");
var router = express.Router();

//gibt aller Tastings zurück
router.get('/', (req,res) => {
    res.send('List aller Tastings');
});

//gibt das tasting mit einer bestimmten ID zurück
router.get('/id/:id', (req,res) => {
    res.send('Das ist ein Tasting mit der id: ' + req.params.id);
});

//gibnt das tatsing von einem bestimmten Datum zurück ( dd-mm-yy )
router.get('/date/:date', (req,res) => {
    res.send('Das ist das Tasting, das am ' + req.params.date + ' stattgefunden hat.')
});

module.exports =  router; 