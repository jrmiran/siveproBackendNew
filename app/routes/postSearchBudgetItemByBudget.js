//var dbConnection = require('../../config/dbConnection');

module.exports = function(app, postSearchBudgetItemByBudget, dbConnection){
    var con = dbConnection();
    
    app.post(`/${postSearchBudgetItemByBudget}`, function(req, res){
        let sql = `SELECT * FROM ItemOrcamento WHERE orcamento_id = ${req.body.budgetId}`;
        con.query(sql, function(err, result){
            res.send(result);
        });
    });
}