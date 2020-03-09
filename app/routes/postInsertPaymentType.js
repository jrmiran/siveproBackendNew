//var dbConnection = require('../../config/dbConnection');

module.exports = function(app, postInsertPaymentType, dbConnection){
    var con = dbConnection();
    app.post(`/${postInsertPaymentType}`, function(req, res){
        console.log(req.body);
        let sql = `INSERT INTO TipoPagamento (tipoPagamento) VALUES (${req.body.query})`;
        con.query(sql, function(err, result){
            res.send(result);
        });
    });
}