const express = require('express');

const OngController = require('./controllers/ongController');
const IncidentController = require('./controllers/incidentController');
const ProfileController = require('./controllers/profileController');
const SessionController = require('./controllers/sessionController');

const routes = express.Router();
//rota de login
routes.post('/sessions',SessionController.create)

// rotas das ONGs
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

// rotas do perfil das ONGs
routes.get('/profile',ProfileController.index);

//rota dos incidentes cadastrados
routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;