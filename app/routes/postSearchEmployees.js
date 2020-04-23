module.exports = function(app, post, dbConnection, pool){
    
    app.post(`/${post}`, function(req, res){
        let sql = `SELECT SQL_CACHE * FROM Funcionario ORDER BY nome`;
        pool.getConnection((err, con) => {
            con.query(sql, function(err, result){
                res.send(result);
                con.release();
            });
        })
    });
}