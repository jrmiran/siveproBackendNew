module.exports = function(app, post, dbConnection, pool){
    app.post(`/${post}`, function(req, res){
        var query = function(){
            var response = "";
            req.body.items.forEach((data, index)=>{
                response = response + `('${data['qtd']}', '${data['cod']}', '${data['item']}', '${data['detail']}', '${data['measure']}', '${data['ambient']}', '${data['necessary']}', '${data['unitValue']}', '${data['totalValue']}', '${data['discount']}', '${data['discountValue']}', '${req.body.budget.id}')`;
                
                if(index < req.body.items.length - 1){
                    response = response + ",";
                }
            });
            return response;
        }
        
        let sql = ` DELETE FROM ItemOrcamento WHERE orcamento_id = ${req.body.budget.id};
                    INSERT INTO ItemOrcamento(quantidade, codigo, item, detalhe, medida, comodo, necessario, valorUnitario, valorTotal, desconto, valorComDesconto, orcamento_id) VALUES ${query()};
                    UPDATE Orcamento SET data='${req.body.budget.date}', observacao='${req.body.budget.note}', valorTotal=${req.body.budget.totalValue} WHERE id = ${req.body.id};
                    `;
        
        pool.getConnection((err, con) => {
            con.query(sql, function(err, result){
                res.send(result);
                con.release();
            });
        })
    });
}