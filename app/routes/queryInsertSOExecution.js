var dbConnection = require('../../config/dbConnection');


module.exports = function(app, soExecution){
    var con = dbConnection();
    
    app.get(`/${soExecution}/:employees/:shares`, function(req, res){
        let sql =   `INSERT INTO OrdemServico_porcentagens(OrdemServico_id, porcentagens) VALUES ${req.params.shares};
                     INSERT INTO OrdemServico_funcionarios(OrdemServico_id, funcionarios) VALUES '${req.params.employees}'`;
        con.query(sql, function(err, result){
            res.send(result);
        });
    });
    
    
}