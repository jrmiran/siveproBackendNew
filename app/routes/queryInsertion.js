var dbConnection = require('../../config/dbConnection');

module.exports = function(app, budgetInsertion){
    var con = dbConnection();
    
    app.get(`/${budgetInsertion}/
            :budgetCodes/
            :budgetAmbients/
            :budgetInsertion`, function(req, res){
        //con.connect();
        let sql = `Insert into Orcamento (aprovado, caminho, data, desconto, observacao, retificado, tipoCliente, valorTotal, arquiteto_id, clienteEmpresa_id, clienteEmpresaa_id, clienteJuridico_id, pessoa_id, vendedor_id) values ${req.params.budgetInsertion};
                    Insert into Orcamento_comodos (Orcamento_id, comodos) values ${req.params.budgetAmbients};
                    Insert into Orcamento_codigos (Orcamento_id, codigos) values ${req.params.budgetCodes};
                    Insert into Orcamento_detalhes (Orcamento_id, codigos) values ${req.params.budgetCodes};
                    Insert into Orcamento_itens (Orcamento_id, codigos) values ${req.params.budgetCodes};
                    Insert into Orcamento_medidas (Orcamento_id, codigos) values ${req.params.budgetCodes};
                    Insert into Orcamento_necessidades (Orcamento_id, codigos) values ${req.params.budgetCodes};
                    Insert into Orcamento_numeros (Orcamento_id, codigos) values ${req.params.budgetCodes};
                    Insert into Orcamento_quantidades (Orcamento_id, codigos) values ${req.params.budgetCodes};
                    Insert into Orcamento_valores (Orcamento_id, codigos) values ${req.params.budgetCodes}
`;
        con.query(sql, function(err, result){
            res.send(result);
        });
       // con.end();
    });    
}