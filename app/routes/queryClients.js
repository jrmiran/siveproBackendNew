

module.exports = function(app, client, dbConnection, pool){
    
    app.get(`/${client}/:nameEmpresa`, function(req, res){
        console.log(req.params.nameEmpresa)
        let sql = `Select ClienteEmpresa.nome, ClienteEmpresa.id from ClienteEmpresa, Cliente where ClienteEmpresa.empresa_id = Cliente.id and Cliente.nome = ${req.params.nameEmpresa}`;
        
        pool.getConnection((err, con) => {
            con.query(sql, function(err, result){
                res.send(result);
                con.release();
            });
        })
    });   
    
}