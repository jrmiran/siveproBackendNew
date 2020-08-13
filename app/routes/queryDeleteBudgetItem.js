module.exports = function(app, deleteBudgetItem, dbConnection, pool){
    app.get(`/${deleteBudgetItem}/:itemId`, function(req, res){
        
        console.log(req.params.nameEmpresa)
        let sql = `DELETE FROM ItemOrcamento WHERE ItemOrcamento.id in (${req.params.itemId})`;
        
        pool.getConnection((err, con) => {
            con.query(sql, function(err, result){
                res.send(result);
                con.release();
            });
        })
    });
}