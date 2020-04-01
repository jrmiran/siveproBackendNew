module.exports = function(app, postEditBudget, dbConnection, pool){
    
    app.post(`/${postEditBudget}`, function(req, res){
        var deleteItems = function(){
            if(req.body.oldItemsBudget.length > 0){
                var query = "(";
                req.body.oldItemsBudget.forEach((data, index) => {
                    query = query + data.id;
                    if(index != req.body.oldItemsBudget.length - 1){
                        query = query + ",";
                    }
                })
                query = query + ")";
                return `DELETE FROM ItemOrcamento WHERE id in ${query};`
            }else{
                return "";
            }
            
        }
        
        var insertItems = function(){
            if(req.body.newItemsBudget.length > 0){
                var query = "";
            req.body.newItemsBudget.forEach((data, index)=>{
                query = query + `(${req.body.budget.id}, ${data.qtd}, ${data.cod}, '${data.item}', '${data.detail}', '${data.measure}', '${data.ambient}', '${data.necessary}', ${data.unitValue}, ${data.totalValue}, ${data.discount}, ${data.discountValue}, ${data.number})`;
                if(req.body.newItemsBudget.length != index+1){
                    query = query + ",";
                }
            });
            return `INSERT INTO ItemOrcamento(orcamento_id, quantidade, codigo, item, detalhe, medida, comodo, necessario, valorUnitario, valorTotal, desconto, valorComDesconto, numero) VALUES ${query};`
            } else{
                return "";
            }
        }
        
        var updateItems = function(){
            var query = "";
            req.body.itemsBudget.forEach((data, index)=>{
                query = query + `UPDATE ItemOrcamento SET quantidade=${data.qtd},codigo=${data.cod},item='${data.item}',detalhe='${data.detail}',medida='${data.measure}',comodo='${data.ambient}',necessario='${data.necessary}',valorUnitario=${data.unitValue},valorTotal=${data.totalValue},desconto=${data.discount},valorComDesconto=${data.discountValue},numero=${data.number} WHERE id=${req.body.budget.id};`;
            });
            return query;
        }
        
        let sql = `UPDATE Orcamento SET aprovado=${req.body.budget.approved},desconto=${req.body.budget.discount},observacao='${req.body.budget.note}',retificado=${req.body.budget.retificated},valorTotal=${req.body.budget.totalValue},poload=${req.body.budget.poloAd} WHERE id = ${req.body.budget.id};
        ${deleteItems()}
        ${insertItems()}
        ${updateItems()}`;
        
        pool.getConnection((err, con) => {
            con.query(sql, function(err, result){
                res.send(result);
                con.release();
            });
        })
    });
}