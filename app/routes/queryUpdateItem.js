var dbConnection = require('../../config/dbConnection');


module.exports = function(app, updateItem){
    var con = dbConnection();
    
    app.get(`/${updateItem}/:id/:description/:value`, function(req, res){
        
        console.log(req.params.nameEmpresa)
        let sql = `UPDATE Item SET descricao= ${req.params.description},valorUnitario= ${req.params.description} WHERE id = ${req.params.id}`;
        
        con.query(sql, function(err, result){
            res.send(result);
        });
        //con.end();
    });
}