module.exports = function(app, post, dbConnection, pool){

    
    app.post(`/${post}`, function(req, res){
        let sql = `SELECT 	eos.id, eos.ordemDeServico_id, eos.dataInicio, eos.dataTermino, eos.empreita, eos.valorEmpreita, eos.pedra, eos.valorPedra, eos.dataPagamentoEmpreita, eos.porcentagem, eos.funcionario_id,
		os.orcamento_id, io.id as item_id, io.valorUnitario, io.valorTotal, io.valorComDesconto, io.desconto, round((io.valorComDesconto*eos.porcentagem / 100), 2) as valorExecucao
FROM ExecucaoOrdemServico AS eos LEFT JOIN OrdemDeServico AS os ON os.id = eos.ordemDeServico_id LEFT JOIN ItemOrcamento AS io ON os.itemOrcamento_id = io.id ORDER BY eos.id`;
        pool.getConnection((err, con) => {
            con.query(sql, function(err, result){
                res.send(result);
                con.release();
            });
        })
    });
}