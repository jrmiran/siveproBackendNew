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
const pool = mysql.createConnection({
        connectionLimit,
        host: "belarttenew.mysql.uhserver.com",
        user: "belarttenew",
        password: "mdcjjh13!@",  
        database: "belarttenew",
        multipleStatements: true
    });

console.log("pool criado");

pool.on('release', () => console.log('pool => conexão retornada'));

process.on('SIGINT', () => 
    pool.end(err => {
        if(err) return console.log(err);
        console.log('pool => fechado');
        process.exit(0);
    })
);

module.exports = pool;

/*module.exports = function(){
    return mysql.createConnection({
        host: "belarttenew.mysql.uhserver.com",
        user: "belarttenew",
        password: "mdcjjh13!@",  
        database: "belarttenew",
        multipleStatements: true,
        connectionLimit : 100
    });
}*/
    
    /*module.exports = function(){
    return mysql.createConnection({
        host: "162.241.2.215",
        user: "belart72_belartt",
        password: "mdcjjh13!@",  
        database: "belart72_belartte",
        multipleStatements: true
    });
    }*/