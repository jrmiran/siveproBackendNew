module.exports = function(app, budgetEdit, dbConnection, pool){
    
    app.get(`/${budgetEdit}/:budgetId`, function(req, res){
        console.log(req.params.nameEmpresa)
        let sql =   `SELECT ${req.params.budgetId} into @ID;
                    SELECT SQL_CACHE comodos from Orcamento_comodos WHERE Orcamento_id = @ID;
                    SELECT SQL_CACHE codigos from Orcamento_codigos WHERE Orcamento_id = @ID;
                    SELECT SQL_CACHE detalhes from Orcamento_detalhes WHERE Orcamento_id = @ID;
                    SELECT SQL_CACHE itens from Orcamento_itens WHERE Orcamento_id = @ID;
                    SELECT SQL_CACHE medidas from Orcamento_medidas WHERE Orcamento_id = @ID;
                    SELECT SQL_CACHE necessidades from Orcamento_necessidades WHERE Orcamento_id = @ID;
                    SELECT SQL_CACHE numeros from Orcamento_numeros WHERE Orcamento_id = @ID;
                    SELECT SQL_CACHE quantidades from Orcamento_quantidades WHERE Orcamento_id = @ID;
                    SELECT SQL_CACHE valores from Orcamento_valores WHERE Orcamento_id = @ID;
                    SELECT SQL_CACHE * from Orcamento where Orcamento.id = @ID;
                    SELECT SQL_CACHE o.clienteJuridico_id, o.pessoa_id, o.clienteEmpresaa_id, o.vendedor_id INTO @ClienteJuridico, @Pessoa, @ClienteEmpresa, @Vendedor from Orcamento as o where o.id = @ID;
                    SELECT SQL_CACHE * FROM Cliente WHERE Cliente.id = @ClienteJuridico;
                    SELECT SQL_CACHE * FROM Cliente WHERE Cliente.id = @Pessoa;
                    SELECT SQL_CACHE * FROM ClienteEmpresa WHERE ClienteEmpresa.id = @ClienteEmpresa;
                    SELECT SQL_CACHE * FROM Vendedor WHERE Vendedor.id = @Vendedor`;
        pool.getConnection((err, con) => {
            con.query(sql, function(err, result){
                res.send(result);
                con.release();
            });
        })
    });
}