var select = require('../../database/select.ts');
var insert = require('../../database/insert.ts');
var consumableHelper = require('./consumableHelper.ts')

exports.all_consumables = function(req,res){
    select.allConsumables((error,results,fields) => {
         res.send(JSON.stringify(results));
    });
};

exports.consumable_by_id = function(req,res){
    select.consumableById(req.params.id, (error,results,fields)=>{
        res.send(JSON.stringify(results));
    });
};

exports.consumable_search = function(req,res){
    select.consumableSearchByName(req.params.searchPhrase, (error,results,fields)=>{
        res.send(JSON.stringify(results));
    });
};

exports.consumables_by_tasting = function(req,res){
    select.consumablesByTastingId(req.params.tastingId, (error,result,fields)=>{
        res.send(JSON.stringify(result));
    })
}

exports.save_consumable = function(req,res){
    //(name,age,vol,total_ratin,taste_rating,presentation_rating,TASTING_ID,DESTILLERY_ID)
    const consumableData = req.body.consumable;
    const consumableDataString = consumableHelper.consumableObjectToQueryString(consumableData);
    insert.consumable(consumableDataString,(err,result,fields)=>{
        res.send(JSON.stringify(result));
    })
}