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

/*module.exports = function(){
    return mysql.createConnection({
        connectionLimit : 10,
        host: "belarttenew.mysql.uhserver.com",
        user: "belarttenew",
        password: "mdcjjh13!@",  
        database: "belarttenew",
        multipleStatements: true
    });
}*/

module.exports = function(){
    return mysql.createConnection({
        connectionLimit : 10,
        host: "35.247.234.28",
        user: "belartte",
        password: "mdcjjh13!@",  
        database: "belartte",
        multipleStatements: true
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