

module.exports = function(app, budgetInsertionTest, dbConnection, pool){
    
    app.post(`/${budgetInsertionTest}`, function(req, res){

        console.log(req.body.query);
        let sql = `Insert into Orcamento (aprovado, caminho, data, desconto, observacao, retificado, tipoCliente, valorTotal, arquiteto_id, clienteJuridico_id, clienteEmpresaa_id, clienteEmpresa_id, pessoa_id, vendedor_id, poload) values ${req.body.query};`;
        pool.getConnection((err, con) => {
            con.query(sql, function(err, result){
                res.send(result);
                con.release();
            });
        })
    });
}