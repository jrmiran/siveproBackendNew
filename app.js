var app = require('./config/server');
var porta = process.env.PORT || 3000;
var dbConnection = require('./config/dbConnection');

function handleDisconnect() {

  dbConnection().connect(function(err) {              // The server is either down
    if(err) {                                     // or restarting (takes a while sometimes).
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
    }                                     // to avoid a hot loop, and to allow our node script to
  });                                     // process asynchronous requests in the meantime.
                                          // If you're also serving http, display a 503 error.
  dbConnection().on('error', function(err) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
      handleDisconnect();                         // lost due to either server restart, or a
    } else {                                      // connnection idle timeout (the wait_timeout
      throw err;                                  // server variable configures this)
    }
  });
}

handleDisconnect();

//require('./app/routes/keepConnected')(app, "/keepConnected", 
  //                           "SELECT SQL_CACHE 1");
require('./app/routes/query')(app, "/query", 
                              "SELECT SQL_CACHE ClienteEmpresa.nome as storeClient, Cliente.nome as clientName, Orcamento.id as budgetId, Orcamento.data as date, Orcamento.valorTotal as value, Orcamento.aprovado as approved FROM Orcamento join Cliente on Cliente.id = Orcamento.clienteJuridico_id or Cliente.id = Orcamento.pessoa_id join ClienteEmpresa on ClienteEmpresa.id = Orcamento.clienteEmpresaa_id ORDER BY Orcamento.id DESC", dbConnection);

require('./app/routes/query')(app, "/querytres",
                              "SELECT SQL_CACHE * FROM Usuario", dbConnection);
require('./app/routes/query')(app, "/items",
                              "SELECT SQL_CACHE * FROM Item", dbConnection);
require('./app/routes/query')(app, "/clientsJuridico",
                              "SELECT SQL_CACHE nome, id FROM Cliente where Cliente.DTYPE = 'ClienteJuridico'", dbConnection);
require('./app/routes/query')(app, "/clientsFisico",
                              "SELECT SQL_CACHE nome, id FROM Cliente where Cliente.DTYPE = 'Pessoa'", dbConnection);
require('./app/routes/query')(app, "/clientsArquiteto",
                              "SELECT SQL_CACHE nome, id FROM Cliente where Cliente.DTYPE = 'Arquiteto'", dbConnection);
require('./app/routes/query')(app, "/budgetEdit",
                              "SELECT SQL_CACHE nome, id FROM Cliente where Cliente.DTYPE = 'Arquiteto'", dbConnection);
require('./app/routes/query')(app, "/searchAllPeople",
                              "SELECT SQL_CACHE * FROM Cliente where Cliente.DTYPE = 'Pessoa'", dbConnection);
require('./app/routes/query')(app, "/searchAllServiceOrder",
                              "SELECT SQL_CACHE * FROM OrdemServico", dbConnection);
require('./app/routes/query')(app, "/searchAllEmployees",
                              "SELECT SQL_CACHE * FROM Funcionario WHERE Funcionario.dataDemissao = '' and Funcionario.funcao_funcao IN ('Acabador', 'Ajudante Geral', 'Serrador', 'Acabador Fixo')", dbConnection);
require('./app/routes/query')(app, "/materials",
                              "SELECT SQL_CACHE * FROM Materia", dbConnection);

require('./app/routes/queryClients')(app,"clientEmpresa", dbConnection);
require('./app/routes/queryVendors')(app,"vendor", dbConnection);
require('./app/routes/queryBudgets')(app,"budgetVendor", dbConnection);
require('./app/routes/queryClientBudget')(app,"budgetClient", dbConnection);
require('./app/routes/queryBudgetInsertion')(app,"budgetInsertion", dbConnection);
require('./app/routes/queryInsertion')(app,"budgetInsertionTest", dbConnection);
require('./app/routes/queryUpdateItem')(app,"updateItem", dbConnection);
require('./app/routes/queryClientInsertion')(app,"clientInsertion", dbConnection);
require('./app/routes/queryClientStoreInsertion')(app,"clientStoreInsertion", dbConnection);
require('./app/routes/querySellerInsertion')(app,"sellerInsertion", dbConnection);
require('./app/routes/queryBudgetEdit')(app,"budgetEdit", dbConnection);
require('./app/routes/queryBudgetUpdate')(app,"budgetUpdate", dbConnection);
require('./app/routes/queryAuthentication')(app,"authentication", dbConnection);
require('./app/routes/queryCreateItem')(app,"createItem", dbConnection);
require('./app/routes/queryStatusBudget')(app,"statusBudget", dbConnection);
require('./app/routes/queryBudget')(app,"budget", dbConnection);
require('./app/routes/queryServiceOrder')(app,"serviceOrder", dbConnection);
require('./app/routes/queryServiceOrderInsertion')(app,"serviceOrderInsertion", dbConnection);
require('./app/routes/queryInsertSOExecution')(app,"soExecution", dbConnection);
require('./app/routes/queryInsertImageSO')(app,"insertImageSO", dbConnection);
require('./app/routes/postTest')(app,"postTest", dbConnection);
require('./app/routes/queryServiceOrderId')(app,"serviceOrderId", dbConnection);
require('./app/routes/queryFileDropTest')(app,"fileDropTest", dbConnection);
require('./app/routes/queryBudgetExplosion')(app,"budgetExplosion", dbConnection);
require('./app/routes/postInsertBudgetItems')(app,"postInsertBudgetItems", dbConnection);
require('./app/routes/queryFindBudgetItems')(app,"findBudgetItems", dbConnection);
require('./app/routes/queryDraw')(app,"draw", dbConnection);
require('./app/routes/postInsertDraw')(app,"postInsertDraw", dbConnection);
require('./app/routes/postInsertMaterial')(app,"postInsertMaterial", dbConnection);
require('./app/routes/queryDeleteBudgetItem')(app,"deleteBudgetItem", dbConnection);
require('./app/routes/postUpdateBudgetItem')(app,"postUpdateBudgetItem", dbConnection);
require('./app/routes/postBudgetUpdate')(app,"postBudgetUpdate", dbConnection);
require('./app/routes/postPayment')(app,"postPayment", dbConnection);
require('./app/routes/postSearchClients')(app,"postSearchClients", dbConnection);
require('./app/routes/postSearchClient')(app,"postSearchClient", dbConnection);
require('./app/routes/postUpdateClient')(app,"postUpdateClient", dbConnection);
require('./app/routes/postBudgetsClient')(app,"postBudgetsClient", dbConnection);
require('./app/routes/postSearchPaymentForm')(app,"postSearchPaymentForm", dbConnection);
require('./app/routes/postSearchPaymentType')(app,"postSearchPaymentType", dbConnection);
require('./app/routes/postInsertPayment')(app,"postInsertPayment", dbConnection);
require('./app/routes/postEditPayment')(app,"postEditPayment", dbConnection);
require('./app/routes/postBudgetInsertion')(app,"postBudgetInsertion", dbConnection);
require('./app/routes/postBudgetClientStore')(app,"postBudgetClientStore", dbConnection);
require('./app/routes/postSearchAllProjects')(app,"postSearchAllProjects", dbConnection);
require('./app/routes/postSearchProjectByBudget')(app,"postSearchProjectByBudget", dbConnection);
require('./app/routes/postSearchProjectByClient')(app,"postSearchProjectByClient", dbConnection);
require('./app/routes/postSearchProjectByStore')(app,"postSearchProjectByStore", dbConnection);
require('./app/routes/postImageDraw')(app,"postImageDraw", dbConnection);
require('./app/routes/postInsertPaymentForm')(app,"postInsertPaymentForm", dbConnection);
require('./app/routes/postInsertPaymentType')(app,"postInsertPaymentType", dbConnection);
require('./app/routes/postRemovePayment')(app,"postRemovePayment", dbConnection);
require('./app/routes/postInsertion')(app,"postInsertion", dbConnection);
require('./app/routes/postServiceOrderByEmployee')(app,"postServiceOrderByEmployee", dbConnection);
require('./app/routes/postSearchAllEmployees')(app,"postSearchAllEmployees", dbConnection);
require('./app/routes/postSearchAllRequests')(app,"postSearchAllRequests", dbConnection);
require('./app/routes/postSearchStore')(app,"postSearchStore", dbConnection);
require('./app/routes/postSearchBudgetItemByBudget')(app,"postSearchBudgetItemByBudget", dbConnection);
require('./app/routes/postSearchBudgetByStoreId')(app,"postSearchBudgetByStoreId", dbConnection);
require('./app/routes/postInsertRequest')(app,"postInsertRequest", dbConnection);
require('./app/routes/postSearchAllFromRequest')(app,"postSearchAllFromRequest", dbConnection);
require('./app/routes/postSearchDataFromRequest')(app,"postSearchDataFromRequest", dbConnection);
require('./app/routes/postInsertPaymentOnRequest')(app,"postInsertPaymentOnRequest", dbConnection);
require('./app/routes/postSearchPaymentFromRequest')(app,"postSearchPaymentFromRequest", dbConnection);
require('./app/routes/postUpdateRequestStatus')(app,"postUpdateRequestStatus", dbConnection);
require('./app/routes/keepConnected')(app,"keepConnected", dbConnection);


app.listen(porta, function(){
    console.log("Server ON");
});