module.exports = function(app, postBudgetInsertion, dbConnection, pool){
    
    app.post(`/${postBudgetInsertion}`, function(req, res){
        //con.connect();
        let sql = ` Insert into Orcamento_quantidades (Orcamento_id, quantidades) values ${req.body.budgetQuantitys};
                    Insert into Orcamento_comodos (Orcamento_id, comodos) values ${req.body.budgetAmbients};
                    Insert into Orcamento_codigos (Orcamento_id, codigos) values ${req.body.budgetCodes};
                    Insert into Orcamento_detalhes (Orcamento_id, detalhes) values ${req.body.budgetDetails};
                    Insert into Orcamento_itens (Orcamento_id, itens) values ${req.body.budgetItems};
                    Insert into Orcamento_medidas (Orcamento_id, medidas) values ${req.body.budgetMeasures};
                    Insert into Orcamento_valores (Orcamento_id, valores) values ${req.body.budgetValues};
                    Insert into Orcamento_necessidades (Orcamento_id, necessidades) values ${req.body.budgetNeedings};
                    `;
        pool.getConnection((err, con) => {
            con.query(sql, function(err, result){
                res.send(result);
                con.release();
            });
        })
    });    
}