
module.exports = function(app, postInsertRequest, dbConnection, pool){
    app.post(`/${postInsertRequest}`, function(req, res){
        console.log(req.body);
        
        let clients = "";
        let budgets = "";
        let itemsBudgets = "";
        
        let lengthClients = req.body.clients.length;
        let lengthBudgets = req.body.budgets.length;
        let lengthItemsBudgets = req.body.itemsBudgets.length;
        // --------------------------  LOOP FOR CLIENTS ------------------------
        req.body.clients.forEach(function(data, index){
            clients = clients + "(@ID, "+ data + ")";
            if(index != lengthClients-1){
                clients = clients + ",";
            }
        });
        // --------------------------  LOOP FOR BUDGETS ------------------------
        req.body.budgets.forEach(function(data, index){
            budgets = budgets + "(@ID, "+ data + ")";
            if(index != lengthBudgets-1){
                budgets = budgets + ",";
            }
        });
        // --------------------------  LOOP FOR ITEMS BUDGETS ------------------------
        req.body.itemsBudgets.forEach(function(data, index){
            itemsBudgets = itemsBudgets + "(@ID, "+ data + ")";
            if(index != lengthItemsBudgets-1){
                itemsBudgets = itemsBudgets + ",";
            }
        });
        
        let sql = `INSERT INTO Pedido (cliente_id, valor, data, dataPrevistaPagamento, observacao) VALUES ${req.body.query};
                   SELECT LAST_INSERT_ID() INTO @ID;
                   INSERT INTO Pedido_orcamentos VALUES ${budgets};
                   INSERT INTO Pedido_clientesEmpresa VALUES ${clients};
                   INSERT INTO Pedido_itemsOrcamentos VALUES ${itemsBudgets};`;
        console.log(sql);
        
        pool.getConnection((err, con) => {
            con.query(sql, function(err, result){
                res.send(result);
                con.release();
            });
        })
    });
}