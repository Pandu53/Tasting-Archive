var db = require('./connection.ts');

//WHISKEY SELECTS

exports.allWhiskeys = function (callback: Function) : Array<object> {
    let query: string = 'SELECT * FROM whiskeys ORDER BY name';
    let result: Array<object> = db.query(query, callback);
    return result;
}

exports.whiskeyById = function (id: number, callback: Function) : Array<object> {
    let query: string = 'SELECT * FROM whiskeys WHERE id=' + id;
    let result: Array<object> = db.query(query, callback);
    return result;
}

exports.whiskeySearchByName = function (searchPhrase: string, callback: Function) : Array<object> {
    let query: string = 'SELECT * FROM whiskeys WHERE name LIKE "%' + searchPhrase + '%"';
    console.log('searching for : ' + searchPhrase);
    let result: Array<object> = db.query(query, callback);
    return result;
}

exports.whiskeyByTastingId = function (tastingId: number, callback: Function) : Array<object> {
    let query: string = 'SELECT * FROM whiskeys WHERE TASTING_ID = ' + tastingId + ' ORDER BY total_rating desc';
    console.log('requesting whiskeys for tasting with id: ' + tastingId);
    let result: Array<object> = db.query(query, callback);
    return result;
}


//TASTING SELECTS 

exports.allTastings = function (callback: Function ) : Array<Object> {
    let query: string = 'SELECT id, DATE_FORMAT(date, "%Y %m %d") AS date FROM tasting ORDER BY date desc';
    console.log('requesting all tastings');
    let results: Array<Object> = db.query(query, callback);
    return results;
}

exports.tastingByDate = function (date: string, callback: Function) : object {
    let query: string = 'SELECT id, DATE_FORMAT(date, "%a %d.%m.%Y") AS date FROM tasting ORDER BY ABS( DATEDIFF( date , "' + date + '" ) ) LIMIT 1';
    console.log('requesting a tasting that is the nearest to the date: ' + date);
    let result: Array<object> = db.query(query, callback);
    if (result.length > 0) {
        return result[0];
    }
    return {};

}

//USER SELECT

exports.isUserInDb = function(username:string, hashedPassword:string, callback: Function) {
    let query: string =  'SELECT * FROM user WHERE username ="'+ username +'" AND password ="' + hashedPassword +'"';
    console.log('someone is trying to login');
    let result: Array<object> = db.query(query, callback);
    if(result.length > 0 ){
        return result[0];
    }
    return {};
}