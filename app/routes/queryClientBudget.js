var dbConnection = require('../../config/dbConnection');


module.exports = function(app, budgetClient){
    var con = dbConnection();
    
    app.get(`/${budgetClient}/:nameEmpresa/:nameThirdy`, function(req, res){  
        console.log(req.params.nameEmpresa)
        let sql = `Select ce.nome, ce.telefone, ce.celular, ce.email, ce.endereco, c.id from Cliente as c, ClienteEmpresa as ce where ce.nome = ${req.params.nameThirdy} and c.nome = ${req.params.nameEmpresa}`
        let sql = `select v.telefone, v.celular, v.email, v.id, c.id from Cliente as c, Vendedor as v where c.nome = ${req.params.nameEmpresa} and v.nome = ${req.params.nameVendor}`
        
        con.query(sql, function(err, result){
            res.send(result);
        });
    });
    
}