module.exports = function(app, post, dbConnection, pool){
    
    app.post(`/${post}`, function(req, res){
        var query = function(){
            var response = "";
            req.body.execution.forEach((data, index) =>{
                response = response + `(${data.serviceOrderId},'${data.startDate}','${data.endDate}',${data.empreita},'${data.empreitaValue}',${data.stone},'${data.stoneValue}','${data.empreitaPaymentDate}',${data.employeeShare},${data.employeeId})`;
                if(index < req.body.execution.length - 1){
                    response = response + ',';
                }
            })

            return response;
        }
        
        var removeExecutions = function(){
            if(req.body.removeExecutions.length <= 0){
                return '';
            } else{
                var response = "(";
                req.body.removeExecutions.forEach((data, index)=>{
                    response = response + data;
                    if(index < req.body.removeExecutions.length - 1){
                        response = response + ',';
                    }
                })
                
                response = response + ")";

                return 'DELETE FROM ExecucaoOrdemServico WHERE id IN ' + response;
            }
        }
        
        let sql = `

INSERT INTO ExecucaoOrdemServico(ordemDeServico_id, dataInicio, dataTermino, empreita, valorEmpreita, pedra, valorPedra, dataPagamentoEmpreita, porcentagem, funcionario_id) VALUES ${query()};
${removeExecutions()};`;
        pool.getConnection((err, con) => {
            con.query(sql, function(err, result){
                res.send(result);
                con.release();
            });
        })
    });
}