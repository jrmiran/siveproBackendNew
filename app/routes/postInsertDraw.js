//var dbConnection = require('../../config/dbConnection');

module.exports = function(app, postInsertDraw, dbConnection){
    var con = dbConnection();
    
    app.post(`/${postInsertDraw}`, function(req, res){
        let sql = `INSERT INTO Desenho (aprovado, imagem, orcamento_id, materia_id, ambiente, local) VALUES ${req.body.query}`;
        con.query(sql, function(err, result){
            res.send(result);
        });
    });
}