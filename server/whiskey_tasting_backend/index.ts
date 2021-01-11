var express = require("express");
var app = express();

//Import Routes
var whiskeyRoutes = require('./components/whiskeys.ts');
var tastingRoutes = require('./components/tastings.ts');

app.use('/whiskeys', whiskeyRoutes);
app.use('/tastings', tastingRoutes);


app.listen(3000, () => {
    console.log("Backend for Whiskey Tasing Project is running on port 3000");
});