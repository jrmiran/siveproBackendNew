var app = require('./config/server');
var porta = process.env.PORT || 3000;

require('./app/routes/keepConnected')(app, "/keepConnected", 
                             "SELECT SQL_CACHE 1");
require('./app/routes/query')(app, "/query", 
                              "SELECT SQL_CACHE ClienteEmpresa.nome as storeClient, Cliente.nome as clientName, Orcamento.id as budgetId, Orcamento.data as date, Orcamento.valorTotal as value, Orcamento.aprovado as approved FROM Orcamento join Cliente on Cliente.id = Orcamento.clienteJuridico_id or Cliente.id = Orcamento.pessoa_id join ClienteEmpresa on ClienteEmpresa.id = Orcamento.clienteEmpresaa_id ORDER BY Orcamento.id DESC");

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
                              "SELECT SQL_CACHE * FROM Funcionario WHERE Funcionario.dataDemissao = '' and Funcionario.funcao_funcao IN ('Acabador', 'Ajudante Geral', 'Serrador', 'Acabador Fixo')");
require('./app/routes/query')(app, "/materials",
                              "SELECT SQL_CACHE * FROM Materia");

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
require('./app/routes/queryInsertImageSO')(app,"insertImageSO");
require('./app/routes/postTest')(app,"postTest");
require('./app/routes/queryServiceOrderId')(app,"serviceOrderId");
require('./app/routes/queryFileDropTest')(app,"fileDropTest");
require('./app/routes/queryBudgetExplosion')(app,"budgetExplosion");
require('./app/routes/postInsertBudgetItems')(app,"postInsertBudgetItems");
require('./app/routes/queryFindBudgetItems')(app,"findBudgetItems");
require('./app/routes/queryDraw')(app,"draw");
require('./app/routes/postInsertDraw')(app,"postInsertDraw");
require('./app/routes/postInsertMaterial')(app,"postInsertMaterial");
require('./app/routes/queryDeleteBudgetItem')(app,"deleteBudgetItem");
require('./app/routes/postUpdateBudgetItem')(app,"postUpdateBudgetItem");
require('./app/routes/postBudgetUpdate')(app,"postBudgetUpdate");
require('./app/routes/postPayment')(app,"postPayment");
require('./app/routes/postSearchClients')(app,"postSearchClients");
require('./app/routes/postSearchClient')(app,"postSearchClient");
require('./app/routes/postUpdateClient')(app,"postUpdateClient");
require('./app/routes/postBudgetsClient')(app,"postBudgetsClient");
require('./app/routes/postSearchPaymentForm')(app,"postSearchPaymentForm");
require('./app/routes/postSearchPaymentType')(app,"postSearchPaymentType");
require('./app/routes/postInsertPayment')(app,"postInsertPayment");
require('./app/routes/postEditPayment')(app,"postEditPayment");
require('./app/routes/postBudgetInsertion')(app,"postBudgetInsertion");
require('./app/routes/postBudgetClientStore')(app,"postBudgetClientStore");
require('./app/routes/postSearchAllProjects')(app,"postSearchAllProjects");
require('./app/routes/postSearchProjectByBudget')(app,"postSearchProjectByBudget");
require('./app/routes/postSearchProjectByClient')(app,"postSearchProjectByClient");
require('./app/routes/postSearchProjectByStore')(app,"postSearchProjectByStore");
require('./app/routes/postImageDraw')(app,"postImageDraw");
require('./app/routes/postInsertPaymentForm')(app,"postInsertPaymentForm");
require('./app/routes/postInsertPaymentType')(app,"postInsertPaymentType");
require('./app/routes/postRemovePayment')(app,"postRemovePayment");
require('./app/routes/postInsertion')(app,"postInsertion");
require('./app/routes/postServiceOrderByEmployee')(app,"postServiceOrderByEmployee");
require('./app/routes/postSearchAllEmployees')(app,"postSearchAllEmployees");
require('./app/routes/postSearchAllRequests')(app,"postSearchAllRequests");
require('./app/routes/postSearchStore')(app,"postSearchStore");
require('./app/routes/postSearchBudgetItemByBudget')(app,"postSearchBudgetItemByBudget");
require('./app/routes/postSearchBudgetByStoreId')(app,"postSearchBudgetByStoreId");
require('./app/routes/postInsertRequest')(app,"postInsertRequest");
require('./app/routes/postSearchAllFromRequest')(app,"postSearchAllFromRequest");
require('./app/routes/postSearchDataFromRequest')(app,"postSearchDataFromRequest");


app.listen(porta, function(){
    console.log("Server ON");
});