var app = require('./config/server');
var porta = process.env.PORT || 8080;

require('./app/routes/query')(app, "/query", 
                              "SELECT ClienteEmpresa.nome as storeClient, Cliente.nome as clientName, Orcamento.id as budgetId, Orcamento.data as date, Orcamento.valorTotal as value FROM Orcamento join Cliente on Cliente.id = Orcamento.clienteJuridico_id or Cliente.id = Orcamento.pessoa_id join ClienteEmpresa on ClienteEmpresa.id = Orcamento.clienteEmpresaa_id ORDER BY Orcamento.id");

require('./app/routes/query')(app, "/querytres",
                              "SELECT * FROM Usuario");
require('./app/routes/query')(app, "/items",
                              "SELECT * FROM Item");
require('./app/routes/query')(app, "/clientsJuridico",
                              "SELECT nome, id FROM Cliente where Cliente.DTYPE = 'ClienteJuridico'");
require('./app/routes/query')(app, "/clientsFisico",
                              "SELECT nome, id FROM Cliente where Cliente.DTYPE = 'Pessoa'");
require('./app/routes/query')(app, "/clientsArquiteto",
                              "SELECT nome, id FROM Cliente where Cliente.DTYPE = 'Arquiteto'");
require('./app/routes/queryClients')(app,"clientEmpresa");
require('./app/routes/queryVendors')(app,"vendor");

app.listen(porta);
/*app.listen(3000, function(){
    console.log("Servidor ON");
});*/