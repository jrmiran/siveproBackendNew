
module.exports = function(app, post, dbConnection, pool){

    app.post(`/${post}`, function(req, res){
        console.log(req.body);
        let sql = `UPDATE Desenho SET status = '${req.body.status}' WHERE id = ${req.body.id}`;
        pool.getConnection((err, con) => {
            con.query(sql, function(err, result){
                res.send(result);
                con.release();
            });
        })
    });
}