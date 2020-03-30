//Tipos de parametros em rotas
// Query: parametros nomeados enbiados na rota após "?"(filtros paginação)
// Route parems:Parametros utilizados para indentifacar recursos
//Request body:Corpo da requisição, utilizado para dcriar ou alterar recursos

const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.listen(3330);