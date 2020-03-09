//var dbConnection = require('../../config/dbConnection');

module.exports = function(app, postSearchPaymentType, dbConnection){
    var con = dbConnection();
    app.post(`/${postSearchPaymentType}`, function(req, res){
        let sql = `SELECT * FROM TipoPagamento`;
        con.query(sql, function(err, result){
            res.send(result);
        });
    });
}