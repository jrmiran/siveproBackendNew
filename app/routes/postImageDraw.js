module.exports = function(app, postImageDraw, dbConnection, pool){
    
    app.post(`/${postImageDraw}`, function(req, res){
        let sql = `SELECT imagem FROM Desenho WHERE id = ${req.body.drawId}`;
        pool.getConnection((err, con) => {
            con.query(sql, function(err, result){
                res.send(result);
                con.release();
            });
        })
    });
}