var dbConnection = require('../../config/dbConnection');

module.exports = function(app, postInsertPaymentForm){
    var con = dbConnection();
    app.post(`/${postInsertPaymentForm}`, function(req, res){
        console.log(req.body);
        let sql = `INSERT INTO FormaPagamento (formaPagamento) VALUES (${req.body.query})`;
        con.query(sql, function(err, result){
            res.send(result);
        });
    });
}