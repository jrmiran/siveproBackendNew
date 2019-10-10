var dbConnection = require('../../config/dbConnection');

module.exports = function(app, l, q){
    var con = dbConnection();
    
    app.get(l, function(req, res){  
        setInterval(function () { con.query(q); }, 5000);
    });
}