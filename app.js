var app = require('./config/server');
var porta = process.env.PORT || 3000;
var dbConnection = require('./config/dbConnection');
var pool = require('./config/poolConnection');
require('./app/routes/query')(app, "/query", 
                              "SELECT SQL_CACHE ClienteEmpresa.nome as storeClient, Cliente.nome as clientName, Orcamento.id as budgetId, Orcamento.data as date, Orcamento.valorTotal as value, Orcamento.aprovado as approved FROM Orcamento join Cliente on Cliente.id = Orcamento.clienteJuridico_id or Cliente.id = Orcamento.pessoa_id join ClienteEmpresa on ClienteEmpresa.id = Orcamento.clienteEmpresaa_id ORDER BY Orcamento.id DESC", dbConnection, pool());

require('./app/routes/query')(app, "/querytres",
                              "SELECT SQL_CACHE * FROM Usuario", dbConnection, pool());
require('./app/routes/query')(app, "/items",
                              "SELECT SQL_CACHE * FROM Item", dbConnection, pool());
require('./app/routes/query')(app, "/clientsJuridico",
                              "SELECT SQL_CACHE nome, id FROM Cliente where Cliente.DTYPE = 'ClienteJuridico'", dbConnection, pool());
require('./app/routes/query')(app, "/clientsFisico",
                              "SELECT SQL_CACHE nome, id FROM Cliente where Cliente.DTYPE = 'Pessoa'", dbConnection, pool());
require('./app/routes/query')(app, "/clientsArquiteto",
                              "SELECT SQL_CACHE nome, id FROM Cliente where Cliente.DTYPE = 'Arquiteto'", dbConnection, pool());
require('./app/routes/query')(app, "/budgetEdit",
                              "SELECT SQL_CACHE nome, id FROM Cliente where Cliente.DTYPE = 'Arquiteto'", dbConnection, pool());
require('./app/routes/query')(app, "/searchAllPeople",
                              "SELECT SQL_CACHE * FROM Cliente where Cliente.DTYPE = 'Pessoa'", dbConnection, pool());
require('./app/routes/query')(app, "/searchAllServiceOrder",
                              "SELECT SQL_CACHE * FROM OrdemServico", dbConnection, pool());
require('./app/routes/query')(app, "/searchAllEmployees",
                              "SELECT SQL_CACHE * FROM Funcionario WHERE Funcionario.dataDemissao = '' and Funcionario.funcao_funcao IN ('Acabador', 'Ajudante Geral', 'Serrador', 'Acabador Fixo')", dbConnection, pool());
require('./app/routes/query')(app, "/materials",
                              "SELECT SQL_CACHE * FROM Materia", dbConnection, pool());

require('./app/routes/queryClients')(app,"clientEmpresa", dbConnection, pool());
require('./app/routes/queryVendors')(app,"vendor", dbConnection, pool());
require('./app/routes/queryBudgets')(app,"budgetVendor", dbConnection, pool());
require('./app/routes/queryClientBudget')(app,"budgetClient", dbConnection, pool());
require('./app/routes/queryBudgetInsertion')(app,"budgetInsertion", dbConnection, pool());
require('./app/routes/queryInsertion')(app,"budgetInsertionTest", dbConnection, pool());
require('./app/routes/queryUpdateItem')(app,"updateItem", dbConnection, pool());
require('./app/routes/queryClientInsertion')(app,"clientInsertion", dbConnection, pool());
require('./app/routes/queryClientStoreInsertion')(app,"clientStoreInsertion", dbConnection, pool());
require('./app/routes/querySellerInsertion')(app,"sellerInsertion", dbConnection, pool());
require('./app/routes/queryBudgetEdit')(app,"budgetEdit", dbConnection, pool());
require('./app/routes/queryBudgetUpdate')(app,"budgetUpdate", dbConnection, pool());
require('./app/routes/queryAuthentication')(app,"authentication", dbConnection, pool());
require('./app/routes/queryCreateItem')(app,"createItem", dbConnection, pool());
require('./app/routes/queryStatusBudget')(app,"statusBudget", dbConnection, pool());
require('./app/routes/queryBudget')(app,"budget", dbConnection, pool());
require('./app/routes/queryServiceOrder')(app,"serviceOrder", dbConnection, pool());
require('./app/routes/queryServiceOrderInsertion')(app,"serviceOrderInsertion", dbConnection, pool());
require('./app/routes/queryInsertSOExecution')(app,"soExecution", dbConnection, pool());
require('./app/routes/queryInsertImageSO')(app,"insertImageSO", dbConnection, pool());
require('./app/routes/postTest')(app,"postTest", dbConnection, pool());
require('./app/routes/queryServiceOrderId')(app,"serviceOrderId", dbConnection, pool());
require('./app/routes/queryFileDropTest')(app,"fileDropTest", dbConnection, pool());
require('./app/routes/queryBudgetExplosion')(app,"budgetExplosion", dbConnection, pool());
require('./app/routes/postInsertBudgetItems')(app,"postInsertBudgetItems", dbConnection, pool());
require('./app/routes/queryFindBudgetItems')(app,"findBudgetItems", dbConnection, pool());
require('./app/routes/queryDraw')(app,"draw", dbConnection, pool());
require('./app/routes/postInsertDraw')(app,"postInsertDraw", dbConnection, pool());
require('./app/routes/postInsertMaterial')(app,"postInsertMaterial", dbConnection, pool());
require('./app/routes/queryDeleteBudgetItem')(app,"deleteBudgetItem", dbConnection, pool());
require('./app/routes/postUpdateBudgetItem')(app,"postUpdateBudgetItem", dbConnection, pool());
require('./app/routes/postBudgetUpdate')(app,"postBudgetUpdate", dbConnection, pool());
require('./app/routes/postPayment')(app,"postPayment", dbConnection, pool());
require('./app/routes/postSearchClients')(app,"postSearchClients", dbConnection, pool());
require('./app/routes/postSearchClient')(app,"postSearchClient", dbConnection, pool());
require('./app/routes/postUpdateClient')(app,"postUpdateClient", dbConnection, pool());
require('./app/routes/postBudgetsClient')(app,"postBudgetsClient", dbConnection, pool());
require('./app/routes/postSearchPaymentForm')(app,"postSearchPaymentForm", dbConnection, pool());
require('./app/routes/postSearchPaymentType')(app,"postSearchPaymentType", dbConnection, pool());
require('./app/routes/postInsertPayment')(app,"postInsertPayment", dbConnection, pool());
require('./app/routes/postEditPayment')(app,"postEditPayment", dbConnection, pool());
require('./app/routes/postBudgetInsertion')(app,"postBudgetInsertion", dbConnection, pool());
require('./app/routes/postBudgetClientStore')(app,"postBudgetClientStore", dbConnection, pool());
require('./app/routes/postSearchAllProjects')(app,"postSearchAllProjects", dbConnection, pool());
require('./app/routes/postSearchProjectByBudget')(app,"postSearchProjectByBudget", dbConnection, pool());
require('./app/routes/postSearchProjectByClient')(app,"postSearchProjectByClient", dbConnection, pool());
require('./app/routes/postSearchProjectByStore')(app,"postSearchProjectByStore", dbConnection, pool());
require('./app/routes/postImageDraw')(app,"postImageDraw", dbConnection, pool());
require('./app/routes/postInsertPaymentForm')(app,"postInsertPaymentForm", dbConnection, pool());
require('./app/routes/postInsertPaymentType')(app,"postInsertPaymentType", dbConnection, pool());
require('./app/routes/postRemovePayment')(app,"postRemovePayment", dbConnection, pool());
require('./app/routes/postInsertion')(app,"postInsertion", dbConnection, pool());
require('./app/routes/postServiceOrderByEmployee')(app,"postServiceOrderByEmployee", dbConnection, pool());
require('./app/routes/postSearchAllEmployees')(app,"postSearchAllEmployees", dbConnection, pool());
require('./app/routes/postSearchAllRequests')(app,"postSearchAllRequests", dbConnection, pool());
require('./app/routes/postSearchStore')(app,"postSearchStore", dbConnection, pool());
require('./app/routes/postSearchBudgetItemByBudget')(app,"postSearchBudgetItemByBudget", dbConnection, pool());
require('./app/routes/postSearchBudgetByStoreId')(app,"postSearchBudgetByStoreId", dbConnection, pool());
require('./app/routes/postInsertRequest')(app,"postInsertRequest", dbConnection, pool());
require('./app/routes/postSearchAllFromRequest')(app,"postSearchAllFromRequest", dbConnection, pool());
require('./app/routes/postSearchDataFromRequest')(app,"postSearchDataFromRequest", dbConnection, pool());
require('./app/routes/postInsertPaymentOnRequest')(app,"postInsertPaymentOnRequest", dbConnection, pool());
require('./app/routes/postSearchPaymentFromRequest')(app,"postSearchPaymentFromRequest", dbConnection, pool());
require('./app/routes/postUpdateRequestStatus')(app,"postUpdateRequestStatus", dbConnection, pool());
require('./app/routes/keepConnected')(app,"keepConnected", dbConnection, pool());
require('./app/routes/postSearchAllStore')(app,"postSearchAllStore", dbConnection, pool());
require('./app/routes/postSearchClientAndSellerByStore')(app,"postSearchClientAndSellerByStore", dbConnection, pool());
require('./app/routes/postSearchAllItems')(app,"postSearchAllItems", dbConnection, pool());
require('./app/routes/postInsertBudget')(app,"postInsertBudget", dbConnection, pool());
require('./app/routes/postSearchBudget')(app,"postSearchBudget", dbConnection, pool());
require('./app/routes/postEditBudget')(app,"postEditBudget", dbConnection, pool());
require('./app/routes/postEditBudgetStatus')(app,"postEditBudgetStatus", dbConnection, pool());
require('./app/routes/postSearchServiceOrderByBudget')(app,"postSearchServiceOrderByBudget", dbConnection, pool());

app.listen(porta, function(){
    console.log("Server up on port: " + porta);
});