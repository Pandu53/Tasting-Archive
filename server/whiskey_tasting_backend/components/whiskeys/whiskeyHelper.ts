import { query } from "express";

exports.whiskeyObjectToQueryString = function(whiskey){
    //(name,age,vol,total_ratin,taste_rating,presentation_rating,TASTING_ID,DESTILLERY_ID)
    let queryString: string = '';
    queryString += '"'+ whiskey.name +'",';
    queryString += whiskey.age + ",";
    queryString += whiskey.vol + ",";
    queryString += whiskey.total_rating + ",";
    queryString += whiskey.taste_rating + ",";
    queryString += whiskey.presentation_rating + ",";
    queryString += whiskey.TASTING_ID + ",";
    queryString += whiskey.DESTILLERY_ID;

    return queryString;
}