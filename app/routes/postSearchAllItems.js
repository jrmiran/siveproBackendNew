module.exports = function(app, postSearchAllItems, dbConnection, pool){

    
    app.post(`/${postSearchAllItems}`, function(req, res){
        let sql = `SELECT * FROM Item`;
        pool.getConnection((err, con) => {
            con.query(sql, function(err, result){
                res.send(result);
                con.release();
            });
        })
    });
}