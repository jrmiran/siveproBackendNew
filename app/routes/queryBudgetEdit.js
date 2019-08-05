var dbConnection = require('../../config/dbConnection');


module.exports = function(app, budgetEdit){
    var con = dbConnection();
    
    app.get(`/${budgetEdit}/:budgetId`, function(req, res){
        console.log(req.params.nameEmpresa)
        let sql =   `SELECT ${req.params.budgetId} into @ID;
                    SELECT comodos from Orcamento_comodos WHERE Orcamento_id = @ID;
                    SELECT codigos from Orcamento_codigos WHERE Orcamento_id = @ID;
                    SELECT detalhes from Orcamento_detalhes WHERE Orcamento_id = @ID;
                    SELECT itens from Orcamento_itens WHERE Orcamento_id = @ID;
                    SELECT medidas from Orcamento_medidas WHERE Orcamento_id = @ID;
                    SELECT necessidades from Orcamento_necessidades WHERE Orcamento_id = @ID;
                    SELECT numeros from Orcamento_numeros WHERE Orcamento_id = @ID;
                    SELECT quantidades from Orcamento_quantidades WHERE Orcamento_id = @ID;
                    SELECT valores from Orcamento_valores WHERE Orcamento_id = @ID;
                    SELECT * from Orcamento where Orcamento.id = @ID;
                    SELECT o.clienteJuridico_id, o.pessoa_id, o.clienteEmpresaa_id, o.vendedor_id INTO @ClienteJuridico, @Pessoa, @ClienteEmpresa, @Vendedor from Orcamento as o where o.id = @ID;
                    SELECT * FROM Cliente WHERE Cliente.id = @ClienteJuridico;
                    SELECT * FROM Cliente WHERE Cliente.id = @Pessoa;
                    SELECT * FROM ClienteEmpresa WHERE ClienteEmpresa.id = @ClienteEmpresa;
                    SELECT * FROM Vendedor WHERE Vendedor.id = @Vendedor`;
        con.query(sql, function(err, result){
            res.send(result);
            //con.end();
            con.release();
        });
    });
}