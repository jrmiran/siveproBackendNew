module.exports = function(app, postSearchAllRequests, dbConnection, pool){

    
    app.post(`/${postSearchAllRequests}`, function(req, res){
        let sql = `SELECT * FROM Cliente WHERE DTYPE = 'ClienteJuridico'`;
        pool.getConnection((err, con) => {
            con.query(sql, function(err, result){
                res.send(result);
                con.release();
            });
        })
    });
}