var dbConnection = require('../../config/dbConnection');

module.exports = function(app, postSearchAllRequests){
    var con = dbConnection();
    
    app.post(`/${postSearchAllRequests}`, function(req, res){
        let sql = `SELECT * FROM Pedido`;
        con.query(sql, function(err, result){
            res.send(result);
        });
    });
}