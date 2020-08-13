module.exports = function(app, postTest, dbConnection, pool){

    app.post(`/${postTest}`, function(req, res){
        let sql = ` UPDATE OrdemServico SET imagem = '${req.body.image}' WHERE OrdemServico.id = ${req.body.idOs}`;
        pool.getConnection((err, con) => {
            con.query(sql, function(err, result){
                res.send(result);
                con.release();
            });
        })
    });
}