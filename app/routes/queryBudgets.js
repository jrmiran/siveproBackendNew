module.exports = function(app, budgetVendor, dbConnection, pool){
    app.get(`/${budgetVendor}/:nameEmpresa/:nameVendor`, function(req, res){
        console.log(req.params.nameEmpresa)
        let sql = `select v.telefone, v.celular, v.email, v.id as id_vendor, c.id from Cliente as c, Vendedor as v where c.nome = ${req.params.nameEmpresa} and v.nome = ${req.params.nameVendor}`
        
        pool.getConnection((err, con) => {
            con.query(sql, function(err, result){
                res.send(result);
                con.release();
            });
        })
    });
    
    
}