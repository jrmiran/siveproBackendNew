var dbConnection = require('../../config/dbConnection');


module.exports = function(app, l, q){
    var con = dbConnection();
    
    app.get(l, function(req, res){  
        //con.connect();
        setInterval(function () { con.query(q); }, 5000);
        //con.end();
    });
    
}