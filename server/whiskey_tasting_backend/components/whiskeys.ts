var express = require("express");
var router = express.Router();


//retunrs a list of all whiskeys
router.get('/', (req, res) => {
    console.log("Es werden alle Whiskeys angefragt");
    res.send();
});

// returns data for one specific whiskey
router.get('/id/:id', (req, res) => {
    res.send(req.params.id);
});

// returns list of whiskeys  
router.get('/search/name/:searchPhrase', (req,res) => {
    res.send('Liste aller Whiskes die "' + req.params.searchPhrase + '" im Namen haben.');
});


module.exports =  router; 