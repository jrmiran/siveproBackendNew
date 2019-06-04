var mysql = require('mysql');

/*module.exports = function(){
    return mysql.createConnection({
        host: "belartte.mysql.uhserver.com",
        user: "belartte",
        password: "mdcjjh13!@",  
        database: "belartte"
    });*/
    
    module.exports = function(){
    return mysql.createConnection({
        host: "db4free.net",
        user: "belartte",
        password: "mdcjjh13!@",  
        database: "belartte"
    });
    
    /*module.exports = function(){
    return mysql.createConnection({
        host: "162.241.2.215",
        user: "belart72_belartt",
        password: "mdcjjh13!@",  
        database: "belart72_belartte"
    });*/
}