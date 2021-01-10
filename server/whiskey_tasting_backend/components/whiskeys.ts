var express = require("express");
var router = express.Router();

router.get('/whiskeys', (req, res) => {
    console.log("Es werden alle Whiskeys angefragt");
    res.send({
        'whiskeys': [
            "whiskey1",
            "whiskey2"
        ]
    });
});

export default router; 