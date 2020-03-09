//var dbConnection = require('../../config/dbConnection');


module.exports = function(app, fileDropTest, dbConnection){
    var con = dbConnection();
    app.post(`/${fileDropTest}`, function(req, res){
        console.log("Entrou no post!");
        console.log(req.file);
        res.send(req.file);
    });
}