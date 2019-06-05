var dbConnection = require('../../config/dbConnection');


module.exports = function(app, l, q){
    var con = dbConnection();
    con.connect();
    app.get(l, function(req, res){  
        con.query(q, function(err, result){
            res.send(result);
        });
    });
    con.end();
}