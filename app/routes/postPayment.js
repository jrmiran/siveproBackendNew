
module.exports = function(app, postPayment, dbConnection, pool){

    
    app.post(`/${postPayment}`, function(req, res){
        let sql = `SELECT p.id, p.conta, p.data, p.entrada, p.numeroCheque, p.status, p.valor, p.formaPagamento_formaPagamento, p.observacao, p.funcionario_id, p.tipoPagamento_tipoPagamento, p.orcamento_id, tp.categoria FROM Pagamento as p JOIN TipoPagamento as tp ON p.tipoPagamento_tipoPagamento = tp.tipoPagamento`;
        pool.getConnection((err, con) => {
            con.query(sql, function(err, result){
                res.send(result);
                con.release();
            });
        })
    });
}