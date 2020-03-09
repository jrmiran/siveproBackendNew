//var dbConnection = require('../../config/dbConnection');


module.exports = function(app, createItem, dbConnection){
    var con = dbConnection();
    
    app.get(`/${createItem}/:id/:description/:value`, function(req, res){
        
        console.log(req.params.nameEmpresa)
        let sql = `INSERT INTO Item (id, descricao, valorUnitario) VALUES (${req.params.id}, ${req.params.description}, ${req.params.value})`;
        
        con.query(sql, function(err, result){
            res.send(result);
            //con.end();
            //con.release();
        });
        //con.end();
    });
}