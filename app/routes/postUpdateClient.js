var dbConnection = require('../../config/dbConnection');

module.exports = function(app, postUpdateClient){
    var con = dbConnection();

    app.post(`/${postUpdateClient}`, function(req, res){
        console.log(req.body);
        let sql = `UPDATE ClienteEmpresa SET bairro = '${req.body.neighbor}', celular = '${req.body.cel}', celular2 = '${req.body.cel2}', cidade = '${req.body.city}', complemento = '${req.body.complement}', email = '${req.body.email}', endereco = '${req.body.address}', nome = '${req.body.name}', telefone = '${req.body.tel}', telefone2 = '${req.body.tel2}', cpf = '${req.body.cpf}', cnpj = '${req.body.cnpj}' WHERE ClienteEmpresa.id = ${req.body.id}`;
        con.query(sql, function(err, result){
            res.send(result);
        });
    });
}