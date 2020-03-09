//var dbConnection = require('../../config/dbConnection');

module.exports = function(app, postUpdateRequestStatus, dbConnection){
    var con = dbConnection();

    app.post(`/${postUpdateRequestStatus}`, function(req, res){
        console.log(req.body);
        let sql = `UPDATE Pedido SET status = '${req.body.status}' WHERE id = ${req.body.id}`;
        con.query(sql, function(err, result){
            res.send(result);
        });
    });
}