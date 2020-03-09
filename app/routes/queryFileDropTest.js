module.exports = function(app, fileDropTest, dbConnection, pool){
    app.post(`/${fileDropTest}`, function(req, res){
        console.log("Entrou no post!");
        console.log(req.file);
        res.send(req.file);
    });
}