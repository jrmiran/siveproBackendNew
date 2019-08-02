var dbConnection = require('../../config/dbConnection');

module.exports = function(app, clientInsertion){
    var con = dbConnection();
    
    app.get(`/${clientInsertion}/:clientType/:clientNeighbor/:clientCel1/:clientCel2/:clientCity/:clientComplement/:clientAddress/:clientName/:clientTel1/:clientTel2/:clientCpf/:clientEmail/:clientCnpj`, function(req, res){
        //con.connect();
        let sql = ` INSERT INTO Cliente (DTYPE, bairro, celular, celular2, cidade, complemento, endereco, nome, telefone, telefone2, cpf, email, cnpj) VALUES (${req.params.clientType},${req.params.clientNeighbor},${req.params.clientCel1},${req.params.clientCel2},${req.params.clientCity},${req.params.clientComplement},${req.params.clientAddress},${req.params.clientName},${req.params.clientTel1},${req.params.clientTel2},${req.params.clientCpf},${req.params.clientEmail},${req.params.clientCnpj})`;
        con.query(sql, function(err, result){
            res.send(result);
            
        });
        con.release();
       // con.end();
    });    
}