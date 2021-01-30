var db = require('./connection.ts');

//inserts a Whiskey into Database
exports.whiskey = function (whiskeyData: string,callback: Function) : Array<object> {
    try{
    console.log('someone trys to save a whiskey to database. ' + whiskeyData);
    let query: string = 'INSERT INTO whiskeys (name,age,vol,total_rating,taste_rating,presentation_rating,TASTING_ID,DESTILLERY_ID) VALUES (' + whiskeyData + ')' ;
    let result: Array<object> = db.query(query, callback);
    return result;
    }catch(error){
        return [{"error":"insert whiskey into database failed (" + error + ")"}];
    }
} 