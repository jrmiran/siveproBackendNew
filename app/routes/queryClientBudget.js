var dbConnection = require('../../config/dbConnection');


module.exports = function(app, budgetClient){
    var con = dbConnection();
    
    app.get(`/${budgetClient}/:nameEmpresa/:nameThirdy`, function(req, res){
        //con.connect();
        console.log(req.params.nameEmpresa)
        let sql = `Select ce.nome, ce.telefone, ce.celular, ce.email, ce.endereco, c.id as id_Client, ce.id as id_Thirdy from Cliente as c, ClienteEmpresa as ce where ce.nome = ${req.params.nameThirdy} and c.nome = ${req.params.nameEmpresa}`
        
        con.query(sql, function(err, result){
            res.send(result);
            //con.release();
        });
        //con.end();
    });
}