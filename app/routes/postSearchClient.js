var dbConnection = require('../../config/dbConnection');

module.exports = function(app, postSearchClient){
    var con = dbConnection();
    app.post(`/${postSearchClient}`, function(req, res){
        let sql = `SELECT * FROM ClienteEmpresa WHERE id = ${req.body.id}`;
        con.query(sql, function(err, result){
            res.send(result);
        });
    });
}