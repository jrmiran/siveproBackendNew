module.exports = function(app, l, q, dbConnection, pool){
    var con = dbConnection();
    
    app.get(l, function(req, res){  
        pool.getConnection((err, con) => {
            con.query(q, function(err, result){
                res.send(result);
                con.release();
            });
        })
    });
    
}