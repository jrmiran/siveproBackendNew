var mysql = require('mysql');

module.exports = function(){
    
    return mysql.createConnection({
        connectionLimit : 25,
        host: "br954.hostgator.com.br",
        user: "belart72_belartte",
        port: 2083,
        password: "Mdcjjh13!@",  
        database: "belart72_belartte",
        multipleStatements: true
    });
    
    /*return mysql.createConnection({
        connectionLimit : 25,
        host: "mysql669.umbler.com",
        user: "belartte",
        port: 41890,
        password: "mdcjjh13",  
        database: "belartte",
        multipleStatements: true
    });*/
    
    
}


