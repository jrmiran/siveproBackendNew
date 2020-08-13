var mysql = require('mysql');

module.exports = function(){
    
    
    return mysql.createConnection({
        connectionLimit : 25,
        host: "mysql669.umbler.com",
        user: "belartte",
        port: 41890,
        password: "mdcjjh13",  
        database: "belartte",
        multipleStatements: true
    });
    
    
}


