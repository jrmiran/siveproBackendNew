var dbConnection = require('../../config/dbConnection');


module.exports = function(app, deleteBudgetItem){
    var con = dbConnection();
    
    app.get(`/${deleteBudgetItem}/:itemId`, function(req, res){
        
        console.log(req.params.nameEmpresa)
        let sql = `DELETE FROM ItemOrcamento WHERE ItemOrcamento.id in (${req.params.itemId})`;
        
        con.query(sql, function(err, result){
            res.send(result);
        });
    });
}