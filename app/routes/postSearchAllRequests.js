

module.exports = function(app, postSearchAllRequests, dbConnection, pool){

    
    app.post(`/${postSearchAllRequests}`, function(req, res){
        let sql = `SELECT p.id, p.cliente_id, p.valor, p.data, p.dataPrevistaPagamento, p.observacao, c.nome as nomeLoja FROM Pedido as p, Cliente as c WHERE c.id = p.cliente_id`;
        pool.getConnection((err, con) => {
            con.query(sql, function(err, result){
                res.send(result);
                con.release();
            });
        })
    });
}