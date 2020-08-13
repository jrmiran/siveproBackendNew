module.exports = function(app, post, dbConnection, pool){
    app.post(`/${post}`, function(req, res){
        let sql = `SELECT os.id as id, os.orcamento_id as orcamento, os.itemOrcamento_id as itemOrcamentoId, os.observacao as observacao, os.dataEntrega as dataEntrega, io.codigo as codigo, io.quantidade as quantidade, io.comodo as comodo, io.detalhe as detalhe, io.item as item, io.medida as medida, io.necessario as necessario, io.valorUnitario as valorUnitario, io.valorTotal as valorTotal, io.desconto as desconto, io.valorComDesconto as valorComDesconto, c.nome as loja, ce.nome as cliente
FROM OrdemDeServico as os JOIN Orcamento as o JOIN ItemOrcamento as io JOIN Cliente as c JOIN ClienteEmpresa as ce ON 
os.orcamento_id = o.id AND 
io.orcamento_id = o.id AND 
os.itemOrcamento_id = io.id AND
o.clienteJuridico_id = c.id AND
o.clienteEmpresaa_id = ce.id
WHERE os.id NOT IN (SELECT id FROM OrdemDeServicoExcluida);
SELECT eos.id, eos.ordemDeServico_id, eos.dataInicio, eos.dataTermino, eos.empreita, eos.valorEmpreita, eos.pedra, eos.valorPedra, eos.dataPagamentoEmpreita, eos.porcentagem, eos.funcionario_id, f.nome FROM ExecucaoOrdemServico as eos JOIN Funcionario as f ON f.id = eos.funcionario_id;`;
        pool.getConnection((err, con) => {
            con.query(sql, function(err, result){
                var responseExecution = [];
                var responseNoExecution = [];
                result[0].forEach((r)=>{
                    var aux = result[1].filter((v)=>{
                        return v['ordemDeServico_id'] == r['id']
                    });
                    //console.log(aux);
                    if(aux.length > 0){
                        r['funcionarios'] = '';
                        aux.forEach((a)=>{
                            r['funcionarios'] = r['funcionarios'] + ' ' + a['nome'];
                        })
                        r['executado'] = true;
                    } else{
                        r['funcionarios'] = '';
                        r['executado'] = false;
                    }
                })
                res.send(result);
                con.release();
            });
        })
    });
}