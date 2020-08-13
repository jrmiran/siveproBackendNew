module.exports = function(app, budgetExplosion, dbConnection, pool){
    app.get(`/${budgetExplosion}`, function(req, res){
        console.log(req.params.nameEmpresa)
        let sql =   `
                    SET @IDMIN = 2301;
                    SET @IDMAX = 2400;
                    SELECT SQL_CACHE * from Orcamento_comodos WHERE Orcamento_id BETWEEN @IDMIN AND @IDMAX;
                    SELECT SQL_CACHE * from Orcamento_codigos WHERE Orcamento_id BETWEEN @IDMIN AND @IDMAX;
                    SELECT SQL_CACHE * from Orcamento_detalhes WHERE Orcamento_id BETWEEN @IDMIN AND @IDMAX;
                    SELECT SQL_CACHE * from Orcamento_itens WHERE Orcamento_id BETWEEN @IDMIN AND @IDMAX;
                    SELECT SQL_CACHE * from Orcamento_medidas WHERE Orcamento_id BETWEEN @IDMIN AND @IDMAX;
                    SELECT SQL_CACHE * from Orcamento_necessidades WHERE Orcamento_id BETWEEN @IDMIN AND @IDMAX;
                    SELECT SQL_CACHE * from Orcamento_numeros WHERE Orcamento_id BETWEEN @IDMIN AND @IDMAX;
                    SELECT SQL_CACHE * from Orcamento_quantidades WHERE Orcamento_id BETWEEN @IDMIN AND @IDMAX;
                    SELECT SQL_CACHE * from Orcamento_valores WHERE Orcamento_id BETWEEN @IDMIN AND @IDMAX;
                    SELECT SQL_CACHE id, desconto from Orcamento WHERE Orcamento.id BETWEEN @IDMIN AND @IDMAX;`;
        pool.getConnection((err, con) => {
            con.query(sql, function(err, result){
                res.send(result);
                con.release();
            });
        })
    });
}