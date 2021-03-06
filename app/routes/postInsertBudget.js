module.exports = function(app, postInsertBudget, dbConnection, pool){

    
    app.post(`/${postInsertBudget}`, function(req, res){
        
        var queryItems = function(){
            var query = "";
            req.body.itemsBudget.forEach((data, index)=>{
                query = query + `(LAST_INSERT_ID(), ${data.qtd}, ${data.cod}, '${data.item}', '${data.detail}', '${data.measure}', '${data.ambient}', '${data.necessary}', ${data.unitValue}, ${data.totalValue}, ${data.discount}, ${data.discountValue}, ${data.number}, 1)`;
                if(req.body.itemsBudget.length != index+1){
                    query = query + ",";
                }
            });
            return query;
        }
        let sql = ` INSERT INTO Orcamento(aprovado, caminho, data, desconto, observacao, retificado, tipoCliente, valorTotal, clienteEmpresaa_id, clienteJuridico_id, vendedor_id, poload, status, frete) VALUES (${req.body.budget.approved},'','${req.body.budget.date}',${req.body.budget.discount},'${req.body.budget.note}',${req.body.budget.retificated},'Empresa', ${req.body.budget.totalValue},${req.body.budget.clientId},${req.body.budget.storeId},${req.body.budget.sellerId},${req.body.budget.poloAd}, '${req.body.budget.status}', '${req.body.budget.freightValue}');
                    INSERT INTO ItemOrcamento(orcamento_id, quantidade, codigo, item, detalhe, medida, comodo, necessario, valorUnitario, valorTotal, desconto, valorComDesconto, numero, material_id) VALUES ${queryItems()}`;
        console.log(sql);
        pool.getConnection((err, con) => {
            con.query(sql, function(err, result){
                res.send(result);
                con.release();
            });
        })
    });
}