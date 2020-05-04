module.exports = function(app, postInsertMaterial, dbConnection, pool){
    app.post(`/${postInsertMaterial}`, function(req, res){
        let sql = ` INSERT INTO Materia (nome, tamanhoComercial, tamanhoReal, marca, unidade, valor) VALUES ('${req.body.name}', '${req.body.comercialSize}', '${req.body.realSize}', '${req.body.brand}','${req.body.unit}', '${req.body.value}')`;
        console.log(sql);
        pool.getConnection((err, con) => {
            con.query(sql, function(err, result){
                res.send(result);
                con.release();
            });
        })
    });
}