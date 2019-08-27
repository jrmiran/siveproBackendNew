var app = require('./config/server');
var porta = process.env.PORT || 8080;
//var porta = 3000;

require('./app/routes/keepConnected')(app, "/keepConnected", 
                             "SELECT SQL_CACHE 1");
require('./app/routes/query')(app, "/query", 
                              "SELECT SQL_CACHE ClienteEmpresa.nome as storeClient, Cliente.nome as clientName, Orcamento.id as budgetId, Orcamento.data as date, Orcamento.valorTotal as value, Orcamento.aprovado as approved FROM Orcamento join Cliente on Cliente.id = Orcamento.clienteJuridico_id or Cliente.id = Orcamento.pessoa_id join ClienteEmpresa on ClienteEmpresa.id = Orcamento.clienteEmpresaa_id ORDER BY Orcamento.id");

require('./app/routes/query')(app, "/querytres",
                              "SELECT SQL_CACHE * FROM Usuario");
require('./app/routes/query')(app, "/items",
                              "SELECT SQL_CACHE * FROM Item");
require('./app/routes/query')(app, "/clientsJuridico",
                              "SELECT SQL_CACHE nome, id FROM Cliente where Cliente.DTYPE = 'ClienteJuridico'");
require('./app/routes/query')(app, "/clientsFisico",
                              "SELECT SQL_CACHE nome, id FROM Cliente where Cliente.DTYPE = 'Pessoa'");
require('./app/routes/query')(app, "/clientsArquiteto",
                              "SELECT SQL_CACHE nome, id FROM Cliente where Cliente.DTYPE = 'Arquiteto'");
require('./app/routes/query')(app, "/budgetEdit",
                              "SELECT SQL_CACHE nome, id FROM Cliente where Cliente.DTYPE = 'Arquiteto'");
require('./app/routes/query')(app, "/searchAllPeople",
                              "SELECT SQL_CACHE * FROM Cliente where Cliente.DTYPE = 'Pessoa'");
require('./app/routes/query')(app, "/searchAllServiceOrder",
                              "SELECT SQL_CACHE * FROM OrdemServico");
require('./app/routes/query')(app, "/searchAllEmployees",
                              "SELECT SQL_CACHE * FROM Funcionario");

require('./app/routes/queryClients')(app,"clientEmpresa");
require('./app/routes/queryVendors')(app,"vendor");
require('./app/routes/queryBudgets')(app,"budgetVendor");
require('./app/routes/queryClientBudget')(app,"budgetClient");
require('./app/routes/queryBudgetInsertion')(app,"budgetInsertion");
require('./app/routes/queryInsertion')(app,"budgetInsertionTest");
require('./app/routes/queryUpdateItem')(app,"updateItem");
require('./app/routes/queryClientInsertion')(app,"clientInsertion");
require('./app/routes/queryClientStoreInsertion')(app,"clientStoreInsertion");
require('./app/routes/querySellerInsertion')(app,"sellerInsertion");
require('./app/routes/queryBudgetEdit')(app,"budgetEdit");
require('./app/routes/queryBudgetUpdate')(app,"budgetUpdate");
require('./app/routes/queryAuthentication')(app,"authentication");
require('./app/routes/queryCreateItem')(app,"createItem");
require('./app/routes/queryStatusBudget')(app,"statusBudget");
require('./app/routes/queryBudget')(app,"budget");
require('./app/routes/queryServiceOrder')(app,"serviceOrder");
require('./app/routes/queryServiceOrderInsertion')(app,"serviceOrderInsertion");
require('./app/routes/queryInsertSOExecution')(app,"soExecution");


app.listen(porta, function(){
    console.log("Server ON");
});
/*app.listen(3000, function(){
    console.log("Servidor ON");
});*/