//var dbConnection = require('../../config/dbConnection');

module.exports = function(app, postServiceOrderByEmployee, dbConnection){
    var con = dbConnection();
    app.post(`/${postServiceOrderByEmployee}`, function(req, res){
        //let sql = `SELECT o.id, o.dataTermino, of.funcionarios, op.porcentagens FROM OrdemServico_funcionarios as of INNER JOIN OrdemServico_porcentagens as op INNER JOIN OrdemServico as o ON of.OrdemServico_id = op.OrdemServico_id WHERE o.id = of.OrdemServico_id AND o.id = op.OrdemServico_id`;
        let sql = `SELECT * FROM OrdemServico_funcionarios; SELECT * FROM OrdemServico_porcentagens;SELECT id, valor, dataTermino, empreita, pedra, valorEmpreita, valorPedra FROM OrdemServico;SELECT * FROM Funcionario;`
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
        });
    });
}