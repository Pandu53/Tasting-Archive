var select = require('../../database/select.ts');

exports.all_whiskeys = function(req,res){
    select.allWhiskeys((error,results,fields) => {
         res.send(JSON.stringify(results));
    });
};

exports.whiskey_by_id = function(req,res){
    select.whiskeyById(req.params.id, (error,results,fields)=>{
        res.send(JSON.stringify(results));
    });
};

exports.whiskey_search = function(req,res){
    select.whiskeySearchByName(req.params.searchPhrase, (error,results,fields)=>{
        res.send(JSON.stringify(results));
    });
};

exports.whiskeys_by_tasting = function(req,res){
    select.whiskeyByTastingId(req.params.tastingId, (error,result,fields)=>{
        res.send(JSON.stringify(result));
    })
}