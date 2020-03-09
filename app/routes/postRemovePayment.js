//var dbConnection = require('../../config/dbConnection');

module.exports = function(app, postRemovePayment, dbConnection){
    var con = dbConnection();
    
    app.post(`/${postRemovePayment}`, function(req, res){
        let sql = `DELETE FROM Pagamento WHERE Pagamento.id in (${req.body.paymentId})`;
        con.query(sql, function(err, result){
            res.send(result);
        });
    });
}