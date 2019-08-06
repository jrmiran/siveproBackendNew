var dbConnection = require('../../config/dbConnection');

module.exports = function(app, clientStoreInsertion){
    var con = dbConnection();
     app.get(`/${clientStoreInsertion}/:clientNeighbor/:clientCel1/:clientCel2/:clientCity/:clientComplement/:clientEmail/:clientAddress/:clientName/:clientTel1/:clientTel2/:storeName`, function(req, res){
        let sql = `INSERT INTO ClienteEmpresa (bairro, celular, celular2, cidade, complemento, email, endereco, nome, telefone, telefone2, empresa_id) VALUES (${req.params.clientNeighbor}, ${req.params.clientCel1}, ${req.params.clientCel2}, ${req.params.clientCity}, ${req.params.clientComplement}, ${req.params.clientEmail}, ${req.params.clientAddress}, ${req.params.clientName}, ${req.params.clientTel1}, ${req.params.clientTel2},(SELECT id from Cliente where Cliente.nome =  ${req.params.storeName} and Cliente.DTYPE = 'ClienteJuridico'));
        SELECT LAST_INSERT_ID() INTO @ID;
        INSERT INTO Cliente_ClienteEmpresa (Cliente_id, clientesEmpresa_id) VALUES ((SELECT id from Cliente where Cliente.nome =  ${req.params.storeName} and Cliente.DTYPE = 'ClienteJuridico'), @ID)`;
         
        con.query(sql, function(err, result){
            res.send(result);
            //con.end();
            //con.release();
        });
    });
}