module.exports = function(app, postSearchClients, dbConnection, pool){
    app.post(`/${postSearchClients}`, function(req, res){
        let sql = `SELECT * FROM ClienteEmpresa WHERE empresa_id = ${req.body.storeId};
                    SELECT * FROM Vendedor WHERE empresa_id = ${req.body.storeId}`;
        pool.getConnection((err, con) => {
            con.query(sql, function(err, result){
                res.send(result);
                con.release();
            });
        })
    });
}