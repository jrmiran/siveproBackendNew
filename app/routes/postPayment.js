//var dbConnection = require('../../config/dbConnection');

module.exports = function(app, postPayment, dbConnection){
    var con = dbConnection();
    
    app.post(`/${postPayment}`, function(req, res){
        let sql = `SELECT * FROM Pagamento`;
        con.query(sql, function(err, result){
            res.send(result);
        });
    });
}