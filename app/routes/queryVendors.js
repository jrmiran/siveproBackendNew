
module.exports = function(app, vendor, dbConnection, pool){
    app.get(`/${vendor}/:nameEmpresa`, function(req, res){
        console.log(req.params.nameEmpresa)
        let sql = `Select SQL_CACHE Vendedor.nome , Vendedor.id as id_vendor, Cliente.id as id_client from Vendedor, Cliente where Vendedor.empresa_id = Cliente.id and Cliente.nome = ${req.params.nameEmpresa}`;
        
        pool.getConnection((err, con) => {
            con.query(sql, function(err, result){
                res.send(result);
                con.release();
            });
        })
    });
}