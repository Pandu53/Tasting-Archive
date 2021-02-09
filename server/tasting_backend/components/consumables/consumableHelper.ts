import { query } from "express";

exports.consumableObjectToQueryString = function(consumable){
    //(name,age,vol,total_ratin,taste_rating,presentation_rating,TASTING_ID,DESTILLERY_ID)
    let queryString: string = '';
    queryString += '"'+ consumable.name +'",';
    queryString += consumable.age + ",";
    queryString += consumable.vol + ",";
    queryString += consumable.total_rating + ",";
    queryString += consumable.taste_rating + ",";
    queryString += consumable.presentation_rating + ",";
    queryString += consumable.TASTING_ID + ",";
    queryString += consumable.DESTILLERY_ID;

    return queryString;
}