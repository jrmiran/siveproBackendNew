var dbConnection = require('../../config/dbConnection');

module.exports = function(app, budgetUpdate){
    var con = dbConnection();
    
    app.get(`/${budgetUpdate}/:budgetId/:discount/:note/:retified/:amount/:budgetCodes/:budgetAmbients/:budgetDetails/:budgetItems/:budgetMeasures/:budgetNeedings/:budgetNumbers/:budgetQuantitys/:budgetValues`, function(req, res){
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
                    
                    
                    `;
        con.query(sql, function(err, result){
            res.send(result);
        });
    });    
}