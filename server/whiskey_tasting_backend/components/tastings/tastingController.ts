var select = require('../../database/select.ts');

exports.all_tastings = function(req,res){
    select.allTastings((error,results,fields) => {
        res.send(results);
    });
};

exports.tasting_by_date = function(req,res){
    select.tastingByDate(req.params.date,(error,results,fields) => {
         res.send(results);
    });
};