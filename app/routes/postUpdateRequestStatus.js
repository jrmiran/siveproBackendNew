
module.exports = function(app, postUpdateRequestStatus, dbConnection, pool){

    app.post(`/${postUpdateRequestStatus}`, function(req, res){
        console.log(req.body);
        let sql = `UPDATE Pedido SET status = '${req.body.status}' WHERE id = ${req.body.id}`;
        pool.getConnection((err, con) => {
            con.query(sql, function(err, result){
                res.send(result);
                con.release();
            });
        })
    });
}