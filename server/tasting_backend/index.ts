var express = require("express");
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

//Import Routes
var consumableRoutes = require('./components/consumables/consumableRoutes.ts');
var tastingRoutes = require('./components/tastings/tastingsRoutes.ts');
var loginRoutes = require('./components/login/loginRoutes.ts');

app.use(express.json());
app.use(cors());
app.use('/whiskeys', consumableRoutes);
app.use('/tastings', tastingRoutes);
app.use('/login', loginRoutes);


app.listen(process.env.SERVER_PORT, () => {
    console.log("Backend for Whiskey Tasing Project is running on port " + process.env.SERVER_PORT );
});