//var dbConnection = require('../../config/dbConnection');

module.exports = function(app, postSearchDataFromRequest, dbConnection){
    var con = dbConnection();
    app.post(`/${postSearchDataFromRequest}`, function(req, res){
        let sql = `SELECT io.orcamento_id, io.id, io.valorTotal, io.valorComDesconto FROM ItemOrcamento as io WHERE io.orcamento_id IN (SELECT orcamento_id FROM Pedido_orcamentos WHERE pedido_id = ${req.body.id});
                   SELECT o.id, o.desconto, o.valortotal, c.id as clientId FROM Orcamento as o, ClienteEmpresa as c WHERE o.id IN (SELECT orcamento_id FROM Pedido_orcamentos WHERE pedido_id = ${req.body.id}) AND o.clienteEmpresaa_id = c.id`;
        console.log(sql);
        con.query(sql, function(err, result){
            res.send(result);
        });
    });
}