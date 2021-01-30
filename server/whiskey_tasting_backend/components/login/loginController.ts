var auth = require('../../authentification/authentification.ts');

exports.login = function (res,req,callback){
    auth.login(res,req,(err,token) => {
        console.log(res);
    });
}