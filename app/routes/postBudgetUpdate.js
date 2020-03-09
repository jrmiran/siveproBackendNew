//var dbConnection = require('../../config/dbConnection');

module.exports = function(app, postBudgetUpdate, dbConnection){
    var con = dbConnection();
    
    app.post(`/${postBudgetUpdate}`, function(req, res){
        console.log(req.body);
        let sql = ` UPDATE Orcamento SET desconto = ${req.body.discount}, observacao = ${req.body.note}, retificado = ${req.body.rectified}, valorTotal = ${req.body.amount} WHERE Orcamento.id = ${req.body.budgetId};
                    DELETE FROM Orcamento_comodos WHERE Orcamento_comodos.orcamento_id = ${req.body.budgetId};
                    DELETE FROM Orcamento_codigos WHERE Orcamento_codigos.orcamento_id = ${req.body.budgetId};
                    DELETE FROM Orcamento_detalhes WHERE Orcamento_detalhes.orcamento_id = ${req.body.budgetId};
                    DELETE FROM Orcamento_itens WHERE Orcamento_itens.orcamento_id = ${req.body.budgetId};
                    DELETE FROM Orcamento_medidas WHERE Orcamento_medidas.orcamento_id = ${req.body.budgetId};
                    DELETE FROM Orcamento_necessidades WHERE Orcamento_necessidades.orcamento_id = ${req.body.budgetId};
                    DELETE FROM Orcamento_numeros WHERE Orcamento_numeros.orcamento_id = ${req.body.budgetId};
                    DELETE FROM Orcamento_quantidades WHERE Orcamento_quantidades.orcamento_id = ${req.body.budgetId};
                    DELETE FROM Orcamento_valores WHERE Orcamento_valores.orcamento_id = ${req.body.budgetId};
                    
                    Insert into Orcamento_comodos (Orcamento_id, comodos) values ${req.body.budgetAmbients};
                    Insert into Orcamento_codigos (Orcamento_id, codigos) values ${req.body.budgetCodes};
                    Insert into Orcamento_detalhes (Orcamento_id, detalhes) values ${req.body.budgetDetails};
                    Insert into Orcamento_itens (Orcamento_id, itens) values ${req.body.budgetItems};
                    Insert into Orcamento_medidas (Orcamento_id, medidas) values ${req.body.budgetMeasures};
                    Insert into Orcamento_necessidades (Orcamento_id, necessidades) values ${req.body.budgetNeedings};
                    Insert into Orcamento_quantidades (Orcamento_id, quantidades) values ${req.body.budgetQuantitys};
                    Insert into Orcamento_valores (Orcamento_id, valores) values ${req.body.budgetValues};
                    Insert into Orcamento_numeros (Orcamento_id, numeros) values ${req.body.budgetNumbers};
                    `;
        con.query(sql, function(err, result){
            res.send(result);
        });
    });
}