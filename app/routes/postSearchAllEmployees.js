module.exports = function(app, postSearchAllEmployees, dbConnection, pool){
    
    app.post(`/${postSearchAllEmployees}`, function(req, res){
        let sql = `SELECT SQL_CACHE * FROM Funcionario WHERE Funcionario.dataDemissao = ''`;
        pool.getConnection((err, con) => {
            con.query(sql, function(err, result){
                res.send(result);
                con.release();
            });
        })
    });
}