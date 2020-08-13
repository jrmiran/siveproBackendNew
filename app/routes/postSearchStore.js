
module.exports = function(app, postSearchStore, dbConnection, pool){
    app.post(`/${postSearchStore}`, function(req, res){
        let sql = `SELECT id, nome FROM Cliente WHERE DTYPE = 'ClienteJurídico'`;
        pool.getConnection((err, con) => {
            con.query(sql, function(err, result){
                res.send(result);
                con.release();
            });
        })
    });
}