//var dbConnection = require('../../config/dbConnection');

module.exports = function(app, postInsertBudgetItems, dbConnection){
    var con = dbConnection();
    
    app.post(`/${postInsertBudgetItems}`, function(req, res){
        let sql = `UPDATE Pagamento SET conta = '${req.body.bill}', data = '${req.body.date}', numeroCheque = '${req.body.check}', status = '${req.body.status}', valor = '${req.body.value}', formaPagamento_formaPagamento = '${req.body.paymentForm}', observacao = '${req.body.note}', tipoPagamento_tipoPagamento = '${req.body.paymentType}' , entrada = ${req.body.inOut}, orcamento_id = ${req.body.budgetId} WHERE Pagamento.id = ${req.body.id}`;
        con.query(sql, function(err, result){
            res.send(result);
        });
    });
}