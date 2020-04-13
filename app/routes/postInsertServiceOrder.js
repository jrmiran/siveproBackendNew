module.exports = function(app, postInsertServiceOrder, dbConnection, pool){
    app.post(`/${postInsertServiceOrder}`, function(req, res){
        var serviceOrders = function(){
            var query = "";
            req.body.items.forEach((v, index) => {
                query = query + "(" + req.body.budgetId + "," + v +")";
                if(index < req.body.items.length - 1){
                    query = query + ",";
                }
            })
            return query;
        }

        let sql = `INSERT INTO OrdemDeServico(orcamento_id, itemOrcamento_id) VALUES ${serviceOrders()}`;
        
        pool.getConnection((err, con) => {
            con.query(sql, function(err, result){
                res.send(result);
                con.release();
            });
        })
    });
}