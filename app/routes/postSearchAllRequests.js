var dbConnection = require('../../config/dbConnection');

module.exports = function(app, postSearchAllRequests){
    var con = dbConnection();
    
    app.post(`/${postSearchAllRequests}`, function(req, res){
        let sql = `SELECT p.id, p.cliente_id, p.valor, p.data, p.dataPrevistaPagamento, p.observacao, c.nome as nomeLoja FROM Pedido as p, Cliente as c WHERE c.id = p.cliente_id`;
        con.query(sql, function(err, result){
            res.send(result);
        });
    });
}