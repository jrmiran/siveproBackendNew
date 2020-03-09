//var dbConnection = require('../../config/dbConnection');

module.exports = function(app, postSearchAllFromRequest, dbConnection){
    var con = dbConnection();
    
    app.post(`/${postSearchAllFromRequest}`, function(req, res){
        let sql = `SELECT p.id, p.cliente_id, p.valor, p.data, p.dataPrevistaPagamento, p.observacao, p.status, c.nome as nomeCliente FROM Pedido as p, Cliente as c WHERE p.id = ${req.body.id} AND c.id = p.cliente_id;
                   SELECT * FROM Pedido_orcamentos WHERE pedido_id = ${req.body.id};
                   SELECT * FROM Pedido_itemsOrcamentos WHERE pedido_id = ${req.body.id};
                   SELECT * FROM Pedido_pagamentos WHERE pedido_id = ${req.body.id};
                   SELECT o.id as orcamento_id, io.id itemOrcamento_id FROM Orcamento as o, ItemOrcamento as io WHERE io.orcamento_id = o.id AND o.id IN (SELECT orcamento_id FROM Pedido_orcamentos WHERE pedido_id = ${req.body.id});`;
        con.query(sql, function(err, result){
            res.send(result);
        });
    });
}