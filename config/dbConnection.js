var mysql = require('mysql');

/*module.exports = function(){
    return mysql.createConnection({
        host: "belartte.mysql.uhserver.com",
        user: "belartte",
        password: "mdcjjh13!@",  
        database: "belartte",
        multipleStatements: true
    });*/
    
    /*module.exports = function(){
    return mysql.createConnection({
        host: "db4free.net",
        user: "belartte",
        password: "mdcjjh13!@",  
        database: "belartte",
        multipleStatements: true
    });
    }*/

module.exports = function(){
    return mysql.createConnection({
        host: "belarttenew.mysql.uhserver.com",
        user: "belarttenew",
        password: "mdcjjh13!@",  
        database: "belarttenew",
        multipleStatements: true,
        connectionLimit : 1000
    });
}
    
    /*module.exports = function(){
    return mysql.createConnection({
        host: "162.241.2.215",
        user: "belart72_belartt",
        password: "mdcjjh13!@",  
        database: "belart72_belartte",
        multipleStatements: true
    });
    }*/