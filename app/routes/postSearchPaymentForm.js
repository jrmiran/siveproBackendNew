//var dbConnection = require('../../config/dbConnection');

module.exports = function(app, postSearchPaymentForm, dbConnection){
    var con = dbConnection();
    app.post(`/${postSearchPaymentForm}`, function(req, res){
        let sql = `SELECT * FROM FormaPagamento`;
        con.query(sql, function(err, result){
            res.send(result);
        });
    });
}