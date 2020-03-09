module.exports = function(app, postInsertMaterial, dbConnection, pool){
    app.post(`/${postInsertMaterial}`, function(req, res){
        let sql = ` INSERT INTO Materia (nome, tamanhoComercial, tamanhoReal) VALUES ('${req.body.name}', '${req.body.comercialSize}', '${req.body.realSize}')`;
        pool.getConnection((err, con) => {
            con.query(sql, function(err, result){
                res.send(result);
                con.release();
            });
        })
    });
}