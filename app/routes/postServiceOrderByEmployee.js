module.exports = function(app, postServiceOrderByEmployee, dbConnection, pool){

    app.post(`/${postServiceOrderByEmployee}`, function(req, res){
        let sql = `SELECT * FROM OrdemServico_funcionarios; SELECT * FROM OrdemServico_porcentagens;SELECT id, valor, dataTermino, empreita, pedra, valorEmpreita, valorPedra FROM OrdemServico;SELECT * FROM Funcionario;`
        
        
        pool.getConnection((err, con) => {
            con.query(sql, function(err, result){
                var response = [];
                result[0].forEach(function(data, index){
                    response.push({os: data['OrdemServico_id'], 
                              funcionario: data['funcionarios'], 
                              porcentagem: result[1][index]['porcentagens'], 
                              dataTermino: result[2].find((v) => {return v.id == data['OrdemServico_id']})['dataTermino'], 
                              valor: result[2].find((v) => {return v.id == data['OrdemServico_id']})['valor'],
                              empreita: result[2].find((v) => {return v.id == data['OrdemServico_id']})['valorEmpreita'],  
                              pedra: result[2].find((v) => {return v.id == data['OrdemServico_id']})['valorPedra'],
                              funcao: result[3].find((v) => {return v.nome == data['funcionarios']})['funcao_funcao']               
                             })
                });
                res.send(response);
                    con.release();
            });
        })
    });
}