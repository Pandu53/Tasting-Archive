var db = require('./connection.ts');

//WHISKEY SELECTS

exports.allWhiskeys = function (callback){
    let query = 'SELECT * FROM whiskeys';
    let result = db.query(query, callback);
    return result;
}

exports.whiskeyById = function (id,callback){
    let query = 'SELECT * FROM whiskeys WHERE id=' + id;
    let result = db.query(query, callback);
    return result;
}

exports.whiskeySearchByName = function(searchPhrase, callback){
    let query = 'SELECT * FROM whiskeys WHERE name LIKE "%'+ searchPhrase +'%"';
    console.log('searching for : ' + searchPhrase);
    let result = db.query(query,callback);
    return result;
}


//TASTING SELECTS 

exports.allTastings = function(callback){
    let query = 'SELECT * FROM tasting';
    let results = db.query(query,callback);
    return results;
}

exports.tastingByDate = function(date,callback){
    let query = 'SELECT id, DATE_FORMAT(date, "%a %d.%m.%Y") AS date FROM tasting ORDER BY ABS( DATEDIFF( date , "'+ date +'" ) ) LIMIT 1';
    let result = db.query(query,callback);
    return result;
}