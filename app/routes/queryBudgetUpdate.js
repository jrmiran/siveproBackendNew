var dbConnection = require('../../config/dbConnection');

module.exports = function(app, budgetUpdate){
    var con = dbConnection();
    
    app.get(`/${budgetUpdate}/:budgetId/:discount/:note/:retified/:amount/:budgetCodes/:budgetAmbients/:budgetDetails/:budgetItems/:budgetMeasures/:budgetNeedings/:budgetNumbers/:budgetQuantitys/:budgetValues`, function(req, res){
        //con.connect();
        let sql = ` UPDATE Orcamento SET desconto = ${req.params.discount}, observacao = ${req.params.note}, retificado = ${req.params.retified}, valorTotal = ${req.params.amount} WHERE Orcamento.id = ${req.params.budgetId};
                    DELETE FROM Orcamento_comodos as o WHERE o.orcamento_id = ${req.params.budgetId};
                    DELETE FROM Orcamento_codigos as o WHERE o.orcamento_id = ${req.params.budgetId};
                    DELETE FROM Orcamento_detalhes as o WHERE o.orcamento_id = ${req.params.budgetId};
                    DELETE FROM Orcamento_itens as o WHERE o.orcamento_id = ${req.params.budgetId};
                    DELETE FROM Orcamento_medidas as o WHERE o.orcamento_id = ${req.params.budgetId};
                    DELETE FROM Orcamento_necessidades as o WHERE o.orcamento_id = ${req.params.budgetId};
                    DELETE FROM Orcamento_numeros as o WHERE o.orcamento_id = ${req.params.budgetId};
                    DELETE FROM Orcamento_quantidades as o WHERE o.orcamento_id = ${req.params.budgetId};
                    DELETE FROM Orcamento_valores as o WHERE o.orcamento_id = ${req.params.budgetId};
                    
                    Insert into Orcamento_comodos (Orcamento_id, comodos) values ${req.params.budgetAmbients};
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
        con.release();
       // con.end();
    });    
}