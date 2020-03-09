
module.exports = function(app, l, dbConnection){
    var con = dbConnection();
    
    app.post(`/${l}`, function(req, res){  
            con.query("SELECT * FROM Pedido", function(err, result){
                //res.send(result);
                console.log(result);
            });
    });
}