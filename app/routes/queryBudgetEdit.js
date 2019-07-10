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
                    SELECT * from Orcamento, Cliente Where Orcamento.id = @ID and Cliente.id = Orcamento.ClienteEmpresaa_id`;
        con.query(sql, function(err, result){
            res.send(result);
        });
    });
}