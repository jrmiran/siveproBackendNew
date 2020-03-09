//var dbConnection = require('../../config/dbConnection');

module.exports = function(app, postTest, dbConnection){
    var con = dbConnection();

    app.post(`/${postTest}`, function(req, res){
        console.log(req.body);
        let sql = `UPDATE ItemOrcamento SET quantidade = ${req.body.qtd}, detalhe = '${req.body.detail}', medida = '${req.body.measure}', necessario = '${req.body.necessary}', valorUnitario = '${req.body.unitValue}', valorTotal = '${req.body.totalValue}', desconto = '${req.body.discount}', valorComDesconto = '${req.body.discountValue}', numero = ${req.body.number} WHERE ItemOrcamento.id = ${req.body.id}`;
        con.query(sql, function(err, result){
            res.send(result);
        });
    });
}