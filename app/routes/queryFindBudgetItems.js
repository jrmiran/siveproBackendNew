module.exports = function(app, budget, dbConnection, pool){
    
    app.get(`/${budget}/:id`, function(req, res){
        console.log(req.params.nameEmpresa)
        let sql = `SELECT * FROM ItemOrcamento WHERE orcamento_id = ${req.params.id}`;
        
        pool.getConnection((err, con) => {
            con.query(sql, function(err, result){
                res.send(result);
                con.release();
            });
        })
    });
}