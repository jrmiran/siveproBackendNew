var dbConnection = require('../../config/dbConnection');

module.exports = function(app, postInsertDraw){
    var con = dbConnection();
    
    app.post(`/${postInsertDraw}`, function(req, res){
        let sql = `INSERT INTO Desenho (aprovado, imagem, itemOrcamento_id, materia_id) VALUES (${req.body.approved}, '${req.body.image}', ${req.body.budgetItem}, ${req.body.material})`;
        con.query(sql, function(err, result){
            res.send(result);
        });
    });
}