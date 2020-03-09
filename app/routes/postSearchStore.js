//var dbConnection = require('../../config/dbConnection');

module.exports = function(app, postSearchStore, dbConnection){
    var con = dbConnection();
    app.post(`/${postSearchStore}`, function(req, res){
        let sql = `SELECT id, nome FROM Cliente WHERE DTYPE = 'ClienteJurídico'`;
        con.query(sql, function(err, result){
            res.send(result);
        });
    });
}