
module.exports = function(app, updateItem, dbConnection, pool){

    
    app.get(`/${updateItem}/:id/:description/:value`, function(req, res){
        
        console.log(req.params.nameEmpresa)
        let sql = `UPDATE Item SET descricao= ${req.params.description},valorUnitario= ${req.params.value} WHERE id = ${req.params.id}`;
        
        pool.getConnection((err, con) => {
            con.query(sql, function(err, result){
                res.send(result);
                con.release();
            });
        })
    });
}