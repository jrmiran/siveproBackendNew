module.exports = function(app, post, dbConnection, pool){
    
    app.post(`/${post}`, function(req, res){
        let sql = `UPDATE Materia SET nome='${req.body.name}',tamanhoReal='${req.body.realSize}',tamanhoComercial='${req.body.comercialSize}',marca='${req.body.brand}',unidade='${req.body.unit}',valor='${req.body.value}' WHERE id = ${req.body.id} `;
        pool.getConnection((err, con) => {
            con.query(sql, function(err, result){
                res.send(result);
                con.release();
            });
        })
    });
}