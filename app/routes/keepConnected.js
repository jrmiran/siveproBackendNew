var poolConnection = require ('../../config/poolConnection')

module.exports = function(app, l, dbConnection, pool){

    app.post(`/${l}`, function(req, res){  
        pool.getConnection((err, con) => {
            con.query("SELECT * FROM Pedido", function(err, result){ 
                res.send(result);
                con.release();
            });
        })
    });
}