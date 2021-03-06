
module.exports = function(app, sellerInsertion, dbConnection, pool){
     app.get(`/${sellerInsertion}/:clientCel1/:clientCel2/:clientEmail/:clientName/:clientTel1/:clientTel2/:storeName`, function(req, res){
        let sql = `INSERT INTO Vendedor (celular, celular2, email, nome, telefone, telefone2, empresa_id) VALUES (${req.params.clientCel1}, ${req.params.clientCel2}, ${req.params.clientEmail}, ${req.params.clientName}, ${req.params.clientTel1}, ${req.params.clientTel2},(SELECT id from Cliente where Cliente.nome =  ${req.params.storeName} and Cliente.DTYPE = 'ClienteJuridico'));
        SELECT LAST_INSERT_ID() INTO @ID;
        INSERT INTO Cliente_Vendedor (Cliente_id, vendedores_id) VALUES ((SELECT id from Cliente where Cliente.nome =  ${req.params.storeName} and Cliente.DTYPE = 'ClienteJuridico'), @ID)`;
         
        pool.getConnection((err, con) => {
            con.query(sql, function(err, result){
                res.send(result);
                con.release();
            });
        })
    });
}