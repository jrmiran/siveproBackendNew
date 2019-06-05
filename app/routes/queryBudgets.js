var dbConnection = require('../../config/dbConnection');


module.exports = function(app, budgetVendor){
    var con = dbConnection();
    con.connect();
    app.get(`/${budgetVendor}/:nameEmpresa/:nameVendor`, function(req, res){  
        console.log(req.params.nameEmpresa)
        let sql = `select v.telefone, v.celular, v.email, v.id, c.id from Cliente as c, Vendedor as v where c.nome = ${req.params.nameEmpresa} and v.nome = ${req.params.nameVendor}`
        //let sql = `Select Vendedor.nome , Vendedor.id from Vendedor, Cliente where Vendedor.empresa_id = Cliente.id and Cliente.nome = ${req.params.nameEmpresa}`;
        
        con.query(sql, function(err, result){
            res.send(result);
        });
    });
    con.end();
    
}