var dbConnection = require('../../config/dbConnection');

module.exports = function(app, budgetInsertionTest){
    var con = dbConnection();
    
    
    app.get(`/${budgetInsertionTest}/:budgetInsertion`, function(req, res){
        //con.connect();
        console.log(req.params.budgetInsertion);
        let sql = `Insert into Orcamento (aprovado, caminho, data, desconto, observacao, retificado, tipoCliente, valorTotal, arquiteto_id, clienteJuridico_id, clienteEmpresaa_id, clienteEmpresa_id, pessoa_id, vendedor_id, poload) values ${req.params.budgetInsertion};`;
        con.query(sql, function(err, result){
            console.log(result);
            res.send(result);
            //con.end();
            //con.release();
        });
       // con.end();
    });
    
}