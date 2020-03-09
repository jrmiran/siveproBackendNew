//var dbConnection = require('../../config/dbConnection');

module.exports = function(app, postInsertPayment, dbConnection){
    var con = dbConnection();
    app.post(`/${postInsertPayment}`, function(req, res){
        console.log(req.body);
        let sql = `INSERT INTO Pagamento (conta, data, entrada, numeroCheque, status, valor, formaPagamento_formaPagamento, observacao, tipoPagamento_tipoPagamento, orcamento_id) VALUES ${req.body.query}`;
        con.query(sql, function(err, result){
            res.send(result);
        });
    });
}