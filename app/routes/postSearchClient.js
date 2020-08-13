module.exports = function(app, postSearchClient, dbConnection, pool){
    app.post(`/${postSearchClient}`, function(req, res){
        let sql = `SELECT * FROM ClienteEmpresa WHERE id = ${req.body.id}`;
        pool.getConnection((err, con) => {
            con.query(sql, function(err, result){
                res.send(result);
                con.release();
            });
        })
    });
}