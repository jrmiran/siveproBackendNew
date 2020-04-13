module.exports = function(app, post, dbConnection, pool){
    
    app.post(`/${post}`, function(req, res){
        var query = function(){
            var response = "";
            req.body.execution.forEach((data, index) =>{
                response = response + `(${data.serviceOrderId},'${data.startDate}','${data.endDate}',${data.empreita},'${data.empreitaValue}',${data.stone},'${data.stoneValue}','${data.empreitaPaymentDate}',${data.employeeShare},${data.employeeId})`;
                if(index < req.body.execution.length - 1){
                    response = response + ',';;
                }
            })

            return response;
        }
        
        let sql = `INSERT INTO ExecucaoOrdemServico(ordemDeServico_id, dataInicio, dataTermino, empreita, valorEmpreita, pedra, valorPedra, dataPagamentoEmpreita, porcentagem, funcionario_id) VALUES ${query()}`;
        
        pool.getConnection((err, con) => {
            con.query(sql, function(err, result){
                res.send(result);
                con.release();
            });
        })
    });
}