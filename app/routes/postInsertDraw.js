module.exports = function(app, postInsertDraw, dbConnection, pool){

    
    app.post(`/${postInsertDraw}`, function(req, res){
        let sql = `INSERT INTO Desenho (aprovado, imagem, orcamento_id, materia_id, ambiente, local) VALUES ${req.body.query}`;
        pool.getConnection((err, con) => {
            con.query(sql, function(err, result){
                res.send(result);
                con.release();
            });
        })
    });
}