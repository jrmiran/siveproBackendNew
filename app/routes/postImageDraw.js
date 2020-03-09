//var dbConnection = require('../../config/dbConnection');

module.exports = function(app, postImageDraw, dbConnection){
    var con = dbConnection();
    
    app.post(`/${postImageDraw}`, function(req, res){
        let sql = `SELECT imagem FROM Desenho WHERE id = ${req.body.drawId}`;
        con.query(sql, function(err, result){
            res.send(result);
        });
    });
}