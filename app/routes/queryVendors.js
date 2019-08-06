var dbConnection = require('../../config/dbConnection');


module.exports = function(app, vendor){
    var con = dbConnection();
    
    app.get(`/${vendor}/:nameEmpresa`, function(req, res){
        //con.connect();
        console.log(req.params.nameEmpresa)
        let sql = `Select SQL_CACHE Vendedor.nome , Vendedor.id as id_vendor, Cliente.id as id_client from Vendedor, Cliente where Vendedor.empresa_id = Cliente.id and Cliente.nome = ${req.params.nameEmpresa}`;
        
        con.query(sql, function(err, result){
            res.send(result);
            //con.end();
            //con.release();
        });
        //con.end();
    });
}