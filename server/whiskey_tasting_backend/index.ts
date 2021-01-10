var express = require("express");
var app = express();
var path = require("path");

//Import Routes
var whiskeyRoutes = require(path.join(__dirname,'/components/whiskeys.ts'));

app.use('/whiskeys', whiskeyRoutes);

app.listen(3000, () => {
    console.log("Backend for Whiskey Tasing Project is running on port 3000");
});