
module.exports = function(app, statusBudget, dbConnection, pool){

    app.get(`/${statusBudget}/:id/:status`, function(req, res){
        console.log(req.params.nameEmpresa)
        let sql = `UPDATE Orcamento SET aprovado = ${req.params.status} WHERE Orcamento.id = ${req.params.id}`
        
        pool.getConnection((err, con) => {
            con.query(sql, function(err, result){
                res.send(result);
                con.release();
            });
        })
    });
}