var dbConnection = require('../../config/dbConnection');

module.exports = function(app, budgetInsertion){
    var con = dbConnection();
    
    app.get(`/${budgetInsertion}/:budgetCodes/:budgetAmbients/:budgetDetails/:budgetItems/:budgetMeasures/:budgetNeedings/:budgetNumbers/:budgetQuantitys/:budgetValues/:budgetInsertion/`, function(req, res){
        //con.connect();
        let sql = ` Insert into Orcamento_comodos (Orcamento_id, comodos) values ${req.params.budgetAmbients};
                    Insert into Orcamento_codigos (Orcamento_id, codigos) values ${req.params.budgetCodes};
                    Insert into Orcamento_detalhes (Orcamento_id, detalhes) values ${req.params.budgetDetails};
                    Insert into Orcamento_itens (Orcamento_id, itens) values ${req.params.budgetItems};
                    Insert into Orcamento_medidas (Orcamento_id, medidas) values ${req.params.budgetMeasures};
                    Insert into Orcamento_necessidades (Orcamento_id, necessidades) values ${req.params.budgetNeedings};
                    Insert into Orcamento_numeros (Orcamento_id, numeros) values ${req.params.budgetNumbers};
                    Insert into Orcamento_quantidades (Orcamento_id, quantidades) values ${req.params.budgetQuantitys};
                    Insert into Orcamento_valores (Orcamento_id, valores) values ${req.params.budgetValues}
                    `;
        con.query(sql, function(err, result){
            res.send(result);
        });
       // con.end();
    });    
}