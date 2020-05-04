module.exports = function(app, post, dbConnection, pool){
    app.post(`/${post}`, function(req, res){
        
        var queryPayments = function(){
            var query = "";
            req.body.payments.forEach((data, index)=>{
                query = query + `(  '${data.bill}',
                                    '${data.date}',
                                    ${data.in},
                                    '${data.checkNumber}',
                                    '${data.status}',
                                    '${data.value}',
                                    '${data.paymentWay}',
                                    '${data.note}',
                                    '${data.employeeId}',
                                    '${data.paymentType}',
                                    '${data.budgetId}')`;
                if(index < req.body.payments.length -1){
                    query = query + ",";
                }
            })
            return query;
        }
        
        
        let sql = `INSERT INTO Pagamento (conta, data, entrada, numeroCheque, status, valor, formaPagamento_formaPagamento, observacao, funcionario_id, tipoPagamento_tipoPagamento, orcamento_id) VALUES ${queryPayments()}`;
        
        console.log(sql);
        
        pool.getConnection((err, con) => {
            con.query(sql, function(err, result){
                res.send(result);
                con.release();
            });
        })
    });
}